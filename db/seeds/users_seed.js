const models = require('../models');
const moment = require('moment');
const faker = require('faker');

//exports.seed = function (knex, Promise) {

  // return models.Profile.where({ email: 'admin@domain.com' }).fetch()
  //   .then((profile) => {
  //     if (profile) {
  //       throw profile;
  //     }
  //     return models.Profile.forge({
  //       first: 'System',
  //       last: 'Admin',
  //       display: 'Administrator',
  //       email: 'admin@domain.com',
  //       admin: 1
  //     }).save();
  //   })
  //   .error(err => {
  //     console.error('ERROR: failed to create profile');
  //     throw err;
  //   })
  //   .then((profile) => {
  //     return models.Auth.forge({
  //       type: 'local',
  //       password: 'admin123',
  //       profile_id: profile.get('id')
  //     }).save();
  //   })
  //   .then ((auth) => {
  //     return models.Queue.forge({
  //       queue_size: 1,
  //       profile_id: auth.get('profile_id'),
  //       organization_id: 1,
  //       next_wait_time: 10,
  //       is_open: true
  //     }).save();
  //   })
  //   // .then ((queue) => {
  //   //   return models.Party.forge({
  //   //     queue_id: queue.get('id'),
  //   //     wait_time: moment(new Date()).add(30, 'm'),
  //   //     profile_id: queue.get('profile_id'),
  //   //     party_size: 2
  //   //   }).save();
  //   // })
  //   .error(err => {
  //     console.error('ERROR: failed to create auth');
  //   })
  //   .catch(() => {
  //     console.log('WARNING: defualt user already exists.');
  //   });

      //inserts a bunch of fake users
    
let createProfileRecord = (knex, id) => {
  return knex('profiles').insert({
    first: faker.name.firstName(),
    last: faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.exampleEmail(),
    created_at: new Date(),
    updated_at: new Date()
  });
};

exports.seed = (knex, Promise) => {
  return knex('profiles').del()
    .then(() => {
      let records = [];

      for (let i = 1; i < 10; i++) {
        records.push(createProfileRecord(knex, i));
      }

      return Promise.all(records);
    })
    .then(()=> {
      return models.Profile.forge({
        first: 'System',
        last: 'Admin',
        display: 'Administrator',
        email: 'admin@domain.com',
        admin: 1
      }).save();
    })
    .then(() => {
      return knex('queues').del();
    })
    .then(()=> {
      return knex('queues').insert({
        queue_size: 0,
        profile_id: 10,
        organization_id: 1,
        next_wait_time: 10,
        is_open: false
      });
    });
};
