const Profiles = require('../controllers').Profiles;

module.exports = io => {

  
  // const io = require('socket.io')(server);

  io.on('connection', socket => {
    // console.log( 'Socket connected: ' + socket.id);
    // io.to(socket.id).emit('action', {type: 'SET_SOCKET_ID', data: `${socket.id}`});
    //io.sockets.sockets[socket.id].join(socket.id)
    // io.to(socket.id).emit('action', {type: 'server/testSocket_ServerToClient', data: 'For your eyes only!'});
    // socket.emit('action', {type: 'server/testSocket_ServerToClient', data: 'For errybody!!!!!!!!!!!'});
    // io.emit('action', {type: 'server/testSocket_ServerToClient', data: 'For errybody!!!!!!!!!!!'});
    // socket.on('action', (action) => {
    //   if (action.type === 'server/testSocket_ClientToServer') {
    //     console.log('data: ', action.data);

    //     socket.emit('action', {type: 'testSocket_ServerToClient', data: 'Socket data flow from server to client confirmed'});
    //   }
    // });

    socket.on('action', (action) => {
      if (action.type === 'server/SEND_USER_ID') {
        // console.log('SOCKET: USER ID RECEIVED: ', action.payload, ' --- SOCKET ID: ', socket.id);
        Profiles.updateSocketId(action.payload, socket.id);
        //save the socketId in db
      }
    });
  });
};


