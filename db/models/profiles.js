const db = require('../');

const Profile = db.Model.extend({
  tableName: 'profiles',
  auths: function() {
    return this.hasMany('Auth');
  },
  queue: function() {
    return this.belongsTo('Queue');
  }
});


module.exports = db.model('Profile', Profile);

