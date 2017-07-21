const db = require('../');

const Queue = db.Model.extend({
  tableName: 'queues',
  parties: function() {
    return this.hasMany('Party');
  }
});


module.exports = db.model('Queue', Queue);