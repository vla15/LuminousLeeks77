const CronJob = require('cron').CronJob;
const moment = require('moment');
const models = require('../../db/models');

const smsNotifications = new CronJob({
  cronTime: '0 */1 * * * *',
  onTick: () => {
    //fetcall from parties table
    models.Party.fetchAll()
      .then(parties => {
        parties.forEach(party => {
          if (party.get('wait_time').diff(moment) < 0) {
            //task rabbit
          }
        });
      });
    //iterate through them
    //check wait_time timestamp
    //if expired, send to rabbitmq
    //need to make if expired
    console.log('this is a new moment', moment());
    console.log('this is a new date', new Date());
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
  smsNotifications.stop();
  return (req, res, next) => {
    next();
  };
};