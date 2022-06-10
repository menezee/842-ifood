const knex = require('knex');

module.exports = knex({
  client: 'postgres',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : 'letscode',
    database : 'repairshop',
    port: '5432'
  }
});
