const CronJob = require('cron').CronJob;
const moment = require('moment');
const models = require('../../db/models');
const publisher = require('./publisher');

const smsNotifications = new CronJob({
  cronTime: '0 */1 * * * *',
  onTick: () => {
    //fetcall from parties table
    models.Party.fetchAll()
      .then(parties => {
        parties.forEach(party => {
          if (moment(party.get('wait_time')).diff(moment()) < 0) {
            console.log('we are past seating time');
            publisher(party.get('phone_number'), 'Please proceed to the queue');
          }
        });
      });
    console.log('cron is still working');
  },
  onComplete: null,
  start: false,
  timezone: 'America/Los_Angeles'
});

//every minute will need to query the database to check time has expired
//has to pass this down to sms module
//need to identify when we've already sent an sms


//utilize moment date to compare
module.exports = () => {
  smsNotifications.start();
  return (req, res, next) => {
    next();
  };
};