module.exports = server => {

  const io = require('socket.io')(server);

  io.on('connection', socket => {

    // Happens as soon as the socket connection is made
    io.to(socket.id).emit('action', { type: 'SET_SOCKET_ID', payload: socket.id });

    // This needs to be instigated by any update to the database
    socket.emit('action', { type: 'UPDATE_QUEUE_INFO', payload: 'updated queue info' });

    // This needs to be instigated by any update to the database
    io.to(socket.id).emit('action', { type: 'UPDATE_PARTY_INFO', payload: 'updated party info'});
    
    socket.on('action', action => {
      if (action.type === 'SEND_USER_ID') {
        console.log('SOCKET: USER ID RECEIVED: ', action.payload, ' --- SOCKET ID: ', socket.id);
      }
    });

  });
};
