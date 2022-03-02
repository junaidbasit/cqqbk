const knex = require('knex');
const dbConfig = require('../knexfile');

const db = knex(dbConfig.development);
// bookTable.up(db);
module.exports = db;
