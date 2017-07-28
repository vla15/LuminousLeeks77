const knex = require('knex')(require('../knexfile'));

const db = require('bookshelf')(knex);

db.plugin('registry');
db.plugin('bookshelf-postgis');

module.exports = db;


