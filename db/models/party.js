const db = require('../');
const moment = require('moment');


const Party = db.Model.extend({
  tableName: 'parties',
  queue: function() {
    return this.belongsTo('Queue');
  },
  profile: function() {
    return this.belongsTo('Profile');
  }
});

module.exports = db.model('Party', Party);
