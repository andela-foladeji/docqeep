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
      .then(() => {
        res.status(200).send({ done: true });
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
      }
    }).then((userDetails) => {
      if (userDetails[0]) {
        if (bCrypt.compareSync(req.body.password,
        userDetails[0].dataValues.password)) {
          const token = jwt.sign({
            id: userDetails[0].dataValues.id
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
   * method verify to verify if the token is valid
   * @param {object} req - request
   * @return {boolean} true if token is valid;
   */
  static verify(req, res, next) {
    if (req.headers.authorization) {
      jwt.verify(req.headers.authorization, process.env.SECRET,
        (err, decoded) => {
          if (err) {
            return res.status(401).json({
              done: false,
              message: 'Token authentication failed' });
          }
          req.decoded = decoded;
          req.token = req.headers.authorization;
          next();
        });
    } else {
      return res.status(401).send({ done: false, message: 'Please login' });
    }
  }

  /**
   * method getUsers to get a User
   * @param {object} req - request details
   * @param {object} res - response details
   * @return {array} array of user objects;
   */
  static getUsers(req, res) {
    db.user.findAll({
      where: {
        id: req.decoded.id
      },
      include: [db.role]
    }).then((theUser) => {
      if (theUser[0].dataValues.role.title === 'Admin') {
        db.user.all().then((allUsers) => {
          return res.status(200).send({
            done: true,
            allUsers
          });
        });
      } else {
        return res.status(401).send({
          done: false,
          message: 'You\'re not authorized'
        });
      }
    });
  }
}

module.exports = UsersController;
