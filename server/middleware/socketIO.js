module.exports = server => {
  
  const io = require('socket.io')(server);
  console.log('just consoled');

  io.on('connection', socket => {
   
    socket.emit('connected', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log('testing socket.on data flow from client to server', data);
    });

  });
};




