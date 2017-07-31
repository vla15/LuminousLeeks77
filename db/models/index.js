const knex = require('knex')(require('../../knexfile'));
module.exports.Auth = require('./auths');
module.exports.Profile = require('./profiles');
module.exports.Queue = require('./queue');
module.exports.Party = require('./party');
module.exports.St = require('knex-postgis')(knex);
module.exports.PartyHistory = require('./partyHistory');