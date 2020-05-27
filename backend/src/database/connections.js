const knex = require('knex');
const config = require('../../knexfile');

const connections = knex(config.development);

module.exports = connections;