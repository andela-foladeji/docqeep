const express = require('express');

const UsersController = require('../controllers/users-controller.js');

const userRoute = express.Router();

userRoute.post('/', UsersController.createUser);
userRoute.get('/', UsersController.verify, UsersController.getUsers);
userRoute.post('/role', UsersController.createRole);
userRoute.post('/login', UsersController.login);

module.exports = userRoute;
