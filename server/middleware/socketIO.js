// var app = require('express').createServer();
// var io = require('socket.io')(app);


var connectionCount = function connectionCount(customers, hosts) {
  var res = {
    customer: Object.keys(customers).length,
    host: Object.keys(hosts).length,
  };
  return res;
};

module.exports = server => {
  const io = require('socket.io')(server, { cookie: true });

  io.on('connection', socket => {
    
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
    /*
    let id = socket.handshake.query.id;
    let role = socket.handshake.query.role;
    
    const customers = {};
    const hosts = {};
    
    if (role === 'customer') {
      !customers[id] ? customers[id] = [socket] : customers[id].push(socket);
    } else if (role === 'mentor') {
      !hosts[id] ? hosts[id] = [socket] : hosts[id].push(socket);
    } 

    io.emit('user connect', connectionCount(customers, hosts));

    console.log(`${Object.keys(customers).length} customers connected`);
    console.log(`${Object.keys(hosts).length} hosts connected`);
    */
  });
};




