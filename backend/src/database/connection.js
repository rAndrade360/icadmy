const databaseConfig = require("../../knexfile");
const knex = require("knex");
const connection = knex(databaseConfig.development);
module.exports = connection;
