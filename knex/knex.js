const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile.js')[environment];
module.exports.knex = require('knex')(config);
