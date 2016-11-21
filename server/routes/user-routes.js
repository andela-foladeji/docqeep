const express = require('express');

const UsersController = require('../controllers/users-controller.js');

const userRoute = express.Router();

userRoute.post('/', UsersController.createUser);
userRoute.post('/role', UsersController.createRole);

module.exports = userRoute;
