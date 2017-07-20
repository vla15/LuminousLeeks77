const models = require('../models');
const moment = require('moment');

exports.seed = function (knex, Promise) {

  return models.Profile.where({ email: 'admin@domain.com' }).fetch()
    .then((profile) => {
      if (profile) {
        throw profile;
      }
      return models.Profile.forge({
        first: 'System',
        last: 'Admin',
        display: 'Administrator',
        email: 'admin@domain.com',
        admin: 'queue_id: 1'
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create profile');
      throw err;
    })
    .then((profile) => {
      return models.Auth.forge({
        type: 'local',
        password: 'admin123',
        profile_id: profile.get('id')
      }).save();
    })
    .then ((auth) => {
      return models.Queue.forge({
        queueSize: 1,
        profile_id: auth.get('profile_id'),
        organization: 'Hack Reactor',
        next_wait_time: 10,
        avg_turn_rate: 10,
        status: 'open'
      }).save();
    })
    .then ((queue) => {
      return models.Party.forge({
        queue_id: queue.get('id'),
        time_to_sit: moment(new Date()).add(30, 'm'),
        time_sat: moment(new Date()).add(31, 'm'),
        profile_id: queue.get('profile_id'),
        party_size: 2
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create auth');
    })
    .catch(() => {
      console.log('WARNING: defualt user already exists.');
    });

};
