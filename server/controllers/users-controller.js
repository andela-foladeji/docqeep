require('dotenv').config({ silent: true });
const bCrypt = require('bcrypt'),
  jwt = require('jsonwebtoken');

const db = require('../models');
/**
 * UsersController class to handle all Users
 * related actions
 */
class UsersController {
  /**
   * method createUser to create a User
   * @param {object} req - request details
   * @param {object} res - response details
   * @return {object} response to the front end;
   */
  static createUser(req, res) {
    db.user.create(req.body)
      .then((userInfo) => {
        UsersController.getUserRole(userInfo.dataValues.id, (role) => {
          const token = jwt.sign({ id: userInfo.dataValues.id, role },
            process.env.SECRET, { expiresIn: '24h' });
          res.status(200).send({
            done: true,
            user: userInfo.dataValues,
            token
          });
        });
      }).catch((error) => {
        if (error.errors[0].type === 'notNull Violation' ||
        error.errors[0].type === 'unique violation') {
          return res.status(400).send({ done: false });
        }
        res.status(401).send({ done: false });
      });
  }

  /**
   * method createRole to create a role
   * @param {object} req - request details
   * @param {object} res - response details
   * @return {object} new role details;
   */
  static createRole(req, res) {
    db.role.create(req.body)
      .then((role) => {
        res.status(200).send({ role: role.dataValues });
      }).catch(() => {
        res.status(401).send({ done: false });
      });
  }

  /**
   * method login to log a user in
   * @param {object} req - request details
   * @param {object} res - response details
   * @return {object} jwtoken and status field;
   */
  static login(req, res) {
    db.user.findAll({
      where: {
        username: req.body.username
      },
      include: [db.role]
    }).then((userDetails) => {
      if (userDetails[0]) {
        if (bCrypt.compareSync(req.body.password,
        userDetails[0].dataValues.password)) {
          const token = jwt.sign({
            id: userDetails[0].dataValues.id,
            role: userDetails[0].dataValues.role.dataValues.title
          }, process.env.SECRET, { expiresIn: '24h' });
          return res.status(200).send({ done: true, token });
        }
        return res.status(401).send({
          done: false,
          message: 'Invalid password'
        });
      }
      return res.status(401).send({
        done: false,
        message: 'Invalid username'
      });
    });
  }

  /**
   * method getUsers to get a User
   * @param {object} req - request details
   * @param {object} res - response details
   * @return {array} array of user objects;
   */
  static getUsers(req, res) {
    if (req.decoded.role.toLowerCase() === 'admin') {
      db.user.all().then((allUsers) => {
        return res.status(200).send({
          done: true,
          allUsers
        });
      });
    } else {
      UsersController.returnUnAuthroized(res);
    }
  }

  /**
   * method getAuser to get a particular user details
   * @param {object} req - request details
   * @param {object} res - response details
   * @return {object} userObject details;
   */
  static getAUser(req, res) {
    if (req.decoded.id === parseInt(req.params.id, 10)) {
      db.user.findById(req.decoded.id).then((theUser) => {
        return res.status(200).send({
          done: true,
          user: theUser.dataValues
        });
      });
    } else {
      UsersController.returnUnAuthroized(res);
    }
  }

  /**
   * method updateAUser to update user details
   * @param {object} req - request details
   * @param {object} res - response details
   * @return {object} new userObject details;
   */
  static updateAUser(req, res) {
    if (req.decoded.id === parseInt(req.params.id, 10)) {
      db.user.update(req.body, {
        where: {
          id: req.decoded.id
        },
        fields: ['firstName', 'lastName', 'username', 'email',
          'password', 'roleId'],
        returning: true
      }).then((updatedUser) => {
        return res.status(200).send({
          done: true,
          user: updatedUser[1][0].dataValues
        });
      }).catch((error) => {
        return res.status(400).send({
          done: false,
          message: error.errors[0].message
        });
      });
    } else {
      UsersController.returnUnAuthroized(res);
    }
  }

  /**
   * method returnUnAuthroized is to return Unauthorized message
   * @param {object} res; the response obect
   * @returns {object} response sent to the frontend
   */
  static returnUnAuthroized(res) {
    return res.status(401).send({
      done: false,
      message: 'Unauthorized request'
    });
  }

  /**
   * method deleteUser to update user details
   * @param {object} req - request details
   * @param {object} res - response details
   * @return {object} details of the deletion;
   */
  static deleteUser(req, res) {
    if (req.decoded.id === parseInt(req.params.id, 10)) {
      db.user.destroy({ where: { id: req.decoded.id } }).then(() => {
        return res.status(200).send({ done: true });
      }).catch((error) => {
        return res.status(400).send({
          done: false,
          message: error.errors[0].message
        });
      });
    } else {
      UsersController.returnUnAuthroized(res);
    }
  }

  /**
   * method getUserRole to get the role of a user
   * @param {integer} userId - id of the user
   * @param {function} callback function
   */
  static getUserRole(userId, callback) {
    db.user.findAll({
      where: {
        id: userId
      },
      include: [db.role]
    }).then(userInfo =>
      callback(userInfo[0].dataValues.role.title)
    ).catch(() =>
      callback(false)
    );
  }
}

module.exports = UsersController;
