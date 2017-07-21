const db = require('../');
const Promise = require('bluebird');

const Party = db.Model.extend({
 
});

module.exports = db.model('Party', Party);
