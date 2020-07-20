const connection = require('../database/connection');
const crypto = require('crypto');
 

module.exports = {

    async index(request, response){
        const users = await connection('users').select('*');

        return response.json(users);

    },

    async create(request, response){
        const {username, email, password} = request.body;
    
        const id = crypto.randomBytes(5).toString('HEX');
    
        await connection('users').insert({
            id,
            username, 
            email, 
            password
        })
    
    
        return response.json({ id });
    },

    async update(request, response){
        const {username, email, password} = request.body;
        const { id } = request.params

        await connection('users')
        .update({ username, email, password })
        .where({ id });

        return response.json();
    }
}