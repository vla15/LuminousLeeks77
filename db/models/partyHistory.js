const db = require('../');
const moment = require('moment');


const PartyHistory = db.Model.extend({
  tableName: 'party_history'
});

module.exports = db.model('PartyHistory', PartyHistory);
