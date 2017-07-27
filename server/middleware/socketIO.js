const Profiles = require('../controllers').Profiles;
const models = require('../../db/models');

module.exports.io = io => {

  io.on('connection', socket => {

    socket.on('action', (action) => {
      if (action.type === 'server/SEND_USER_ID') {
        Profiles.updateSocketId(action.payload, socket.id);
      }
    });
  });
};


