const db = require('../');
const Promise = require('bluebird');

const Queue = db.Model.extend({
  tableName: 'queues',
  
});

module.exports = db.model('Queue', Queue);

