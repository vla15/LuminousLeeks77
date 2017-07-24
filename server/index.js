'use strict';
const server = require('./app').server;
const db = require('../db');
const port = process.env.PORT || 3000;
const io = require('./app').io;

server.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

