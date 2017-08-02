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

var generateRandomLongitutde = () => {
  var max = -122.51000;
  var min = -122.38000;
  return (Math.random() * (max - min) + min).toFixed(6);
}

var generateRandomLatitude = () => {
  var max = 37.80778;
  var min = 37.71000;
  return (Math.random() * (max - min) + min).toFixed(6);
}

let createAuthRecord = (knex, id) => {
  return knex('auths').insert({
    type: 'local',
    password: '$2a$10$c7yuktmu8N71NN4oB2QWyug.6ZL9J2y/ih7Of6rAqEjf/UWQM3bb.',
    salt: '$2a$10$c7yuktmu8N71NN4oB2QWyu',
    profile_id: id
  });
};

exports.seed = (knex, Promise) => {
  return knex('profiles').del()
    .then(() => {
      return models.Profile.forge({
        first: 'System',
        last: 'Admin',
        display: 'Administrator 1',
        email: 'admin1',
        admin: 1
      }).save();
    })
    .then(() => {
      return models.Profile.forge({
        first: 'System',
        last: 'Admin',
        display: 'Administrator 2',
        email: 'admin2',
        admin: 2
      }).save();
    })
    .then(() => {
      return models.Profile.forge({
        first: 'System',
        last: 'Admin',
        display: 'Administrator 3',
        email: 'admin3',
        admin: 3
      }).save();
    })
    .then(() => {
      return models.Profile.forge({
        first: 'System',
        last: 'Admin',
        display: 'Administrator 4',
        email: 'admin4',
        admin: 4
      }).save();
    })
    .then(() => {
      return models.Profile.forge({
        first: 'System',
        last: 'Admin',
        display: 'Administrator 5',
        email: 'admin5',
        admin: 5
      }).save();
    })
    .then(() => {
      let records = [];
      for (let i = 1; i < 10; i++) {
        records.push(createProfileRecord(knex, i));
      }
      return Promise.all(records);
    })
    .then(() => {
      knex('queues').del();
    })
    .then(()=> {
      return knex('queues').insert({
        name: 'Burma Superstar',
        queue_size: 0,
        organization_id: 1,
        profile_id: 1,
        next_wait_time: moment().add(10, 'm'),
        is_open: true,
        lat: generateRandomLatitude(),
        lng: generateRandomLongitutde()
      });
    })
    .then(()=> {
      return knex('queues').insert({
        name: 'Tokyo Express',
        queue_size: 0,
        organization_id: 2,
        profile_id: 2,
        next_wait_time: moment().add(10, 'm'),
        is_open: true,
        lat: generateRandomLatitude(),
        lng: generateRandomLongitutde()
      });
    })
    .then(()=> {
      return knex('queues').insert({
        name: 'Share Tea',
        queue_size: 0,
        organization_id: 3,
        profile_id: 3,
        next_wait_time: moment().add(10, 'm'),
        is_open: true,
        lat: generateRandomLatitude(),
        lng: generateRandomLongitutde()
      });
    })
    .then(()=> {
      return knex('queues').insert({
        name: 'Taqueria Castillo',
        queue_size: 0,
        organization_id: 4,
        profile_id: 4,
        next_wait_time: moment().add(10, 'm'),
        is_open: true,
        lat: generateRandomLatitude(),
        lng: generateRandomLongitutde()
      });
    })
    .then(()=> {
      return knex('queues').insert({
        name: 'Chai Bar',
        queue_size: 0,
        organization_id: 5,
        profile_id: 5,
        next_wait_time: moment().add(10, 'm'),
        is_open: true,
        lat: generateRandomLatitude(),
        lng: generateRandomLongitutde()
      });
    })
    .then(() => {
      knex('auths').del()
    })
    .then(()=> {
      let records = [];
      for (let i = 1; i < 6; i++) {
        records.push(createAuthRecord(knex, i));
      }
      return Promise.all(records);
    });

};



// return knex('queues').del()

//     });
