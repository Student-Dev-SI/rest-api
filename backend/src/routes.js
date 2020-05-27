const express = require('express');
const  crypto  = require('crypto');
const connections = require('../src/database/connections');

const routes = express.Router();

routes.get('/users', async(request, response) => {
    const users = await connections('users').select('*');

    return response.json(users);
})
routes.post('/users', async (request, response) => {
    const {username, email, password} = request.body;

    const id = crypto.randomBytes(5).toString('HEX');

    await connections('users').insert({
        username,
        email,
        password,
    })
    return response.json({ id });

});

module.exports = routes;