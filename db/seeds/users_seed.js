const models = require('../models');
const moment = require('moment');
const faker = require('faker');

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
        next_wait_time: moment().add(10, 'm'),
        is_open: true
      });
    });
};
