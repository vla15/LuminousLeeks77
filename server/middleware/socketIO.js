module.exports = server => {

  const io = require('socket.io')(server);

  io.on('connection', socket => {

    io.to(socket.id).emit('action', { type: 'SET_SOCKET_ID', payload: socket.id });

    socket.emit('action', { type: 'testSocket_ServerToClient', payload: 'For errybody!!!!!!!!!!!' });

    socket.emit('action', { type: 'UPDATE_QUEUE_INFO', payload: 'updated queue info' });

    socket.emit('action', { type: 'UPDATE_PARTY_INFO', payload: 'updated party info' });

    socket.on('action', action => {
      if (action.type === 'SEND_USER_ID') {
        console.log('SOCKET: USER ID RECEIVED: ', action.payload, ' --- SOCKET ID: ', socket.id);
      }
    });

  });
};
