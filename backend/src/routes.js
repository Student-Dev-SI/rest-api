const express = require('express');

const SessionController = require('./controllers/SessionController');
const UsersController  = require('./controllers/UsersController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);

module.exports = routes;