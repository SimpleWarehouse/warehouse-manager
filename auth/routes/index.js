const Router = require('express')();

const UserController = require('../models/user/controllers.js');

Router.use('/', UserController);

module.exports = Router;