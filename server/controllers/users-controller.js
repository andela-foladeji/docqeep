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
      }).catch(() => {
        res.status(401).send({ done: false });
      });
  }

  /**
   * method createUser to create a User
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
}

module.exports = UsersController;
