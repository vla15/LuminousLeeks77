const db = require('../');

const Profile_host = db.Model.extend({
  tableName: 'profiles_host',
  auths_host: function() {
    return this.hasMany('Auth_host');
  }
});

module.exports = db.model('Profile_host', Profile_host);