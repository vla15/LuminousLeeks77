const db = require('../');

const Queue = db.Model.extend({
  tableName: 'queues',
  parties: function() {
    return this.hasMany('Party');
  },
  profile: function() {
    return this.belongsTo('Profile');
  }
});


module.exports = db.model('Queue', Queue);