const knex = require('knex');

const db = process.env.DB_EV || 'production';

const config = require('../knexfile.js')[db];

module.exports = knex(config);
