const CronJob = require('cron').CronJob;
const moment = require('moment');
const models = require('../../db/models');
const publisher = require('./publishers');

const smsNotifications = new CronJob({
  cronTime: '0 */1 * * * *',
  onTick: () => {
    //fetcall from parties table
    models.Party.fetchAll()
      .then(parties => {
        parties.forEach(party => {
          console.log('lets get it cron!');
          if (moment(party.get('wait_time')).diff(moment()) < 0) {
            console.log(moment(party.get('wait_time')).diff(moment()));
            // publisher(party.get('phone_number'), 'Please proceed to the queue');
          }
        });
      });
  },
  onComplete: null,
  start: false,
  timezone: 'America/Los_Angeles'
});

module.exports = () => {
  console.log('start cron');
  smsNotifications.start();
  return (req, res, next) => {
    next();
  };
};