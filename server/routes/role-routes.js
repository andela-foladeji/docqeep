const express = require('express');
const Authentication = require('../controllers/authentication');
const roleControl = require('../controllers/role-controller');

const roleRoute = express.Router();

roleRoute.route('/')
  .post(Authentication.verify, roleControl.createRole)
  .get(Authentication.verify, roleControl.getRoles);

module.exports = roleRoute;
