module.exports = server => {
  
  const io = require('socket.io')(server);

  io.on('connection', socket => {
    // console.log( 'Socket connected: ' + socket.id);
    socket.on('action', (action) => {
      if (action.type === 'server/testSocket_ClientToServer') {
        console.log('data: ', action.data);

        socket.emit('action', {type: 'testSocket_ServerToClient', data: 'Socket data flow from server to client confirmed'});
      }
    });
  });
};




