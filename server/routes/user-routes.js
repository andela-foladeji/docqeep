const express = require('express');
const Authentication = require('../controllers/authentication');
const UsersController = require('../controllers/users-controller.js');

const userRoute = express.Router();

userRoute.post('/', UsersController.createUser);
userRoute.get('/', Authentication.verify, UsersController.getUsers);
userRoute.get('/:id', Authentication.verify, UsersController.getAUser);
userRoute.put('/:id', Authentication.verify, UsersController.updateAUser);
userRoute.post('/role', UsersController.createRole);
userRoute.post('/login', UsersController.login);
userRoute.delete('/:id', Authentication.verify, UsersController.deleteUser);
module.exports = userRoute;
