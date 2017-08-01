const CronJob = require('cron').CronJob;
const moment = require('moment');
const models = require('../../db/models');
const publisher = require('./publishers');

const smsFirstNotification = new CronJob({
  cronTime: '0 */1 * * * *',
  onTick: () => {
    console.log('lets get it cron');
    models.Party.fetchAll()
      .then(parties => {
        parties.forEach(party => {
          if (moment(party.get('wait_time')).diff(moment(), 'minutes') < 5 && party.get('first_alert') === false) {
            console.log(moment(party.get('wait_time')).diff(moment(), 'minutes'));
            party.save({first_alert: true}, {patch: true})
              .then((result) => {
                publisher(result.get('phone_number'), 'Your estimated wait time is 5 minutes');
              });
          }

          if (moment(party.get('wait_time')).diff(moment(), 'minutes') <= 0 && party.get('final_alert') === false) {
            console.log(moment(party.get('wait_time')).diff(moment(), 'minutes'));
            party.save({final_alert: true}, {patch: true})
              .then((result) => {
                publisher(result.get('phone_number'), 'Your turn has arrived. Please proceed to the queue');
              });
          }
        });
      });
  },
  onComplete: null,
  start: true,
  timezone: 'America/Los_Angeles'
});