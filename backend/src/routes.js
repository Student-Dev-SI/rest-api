const express = require('express');
const crypto = require('crypto');

// const connection = require('./database/connection');

const routes = express.Router();

routes.post('/users', async (request, response ) => {
    const {name, email, password} = request.body;

const id = crypto.randomBytes(4).toString('HEX');

    // await connection('users').insert({
    //     id, 
    //     name, 
    //     email,
    //     password
    // })
    return response.json();

});

module.exports = routes;