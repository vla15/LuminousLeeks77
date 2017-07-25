const Profiles = require('../controllers').Profiles;

module.exports = io => {

  //const io = require('socket.io')(server);
  //module.exports.io = io;

  io.on('connection', socket => {
    console.log( 'Socket connected: ' + socket);
    io.to(socket.id).emit('action', {type: 'SET_SOCKET_ID', data: `${socket.id}`});
    //io.sockets.sockets[socket.id].join(socket.id)
    io.to(socket.id).emit('action', {type: 'server/testSocket_ServerToClient', data: 'For your eyes only!'});
   // socket.emit('action', {type: 'server/testSocket_ServerToClient', data: 'For errybody!!!!!!!!!!!'});
    io.emit('action', {type: 'server/testSocket_ServerToClient', data: 'For errybody!!!!!!!!!!!'});
    // socket.on('action', (action) => {
    //   if (action.type === 'server/testSocket_ClientToServer') {
    //     console.log('data: ', action.data);

    //     socket.emit('action', {type: 'testSocket_ServerToClient', data: 'Socket data flow from server to client confirmed'});
    //   }
    // });

    socket.on('action', (action) => {
      if (action.type === 'server/SEND_USER_ID') {
        console.log('SOCKET: USER ID RECEIVED: ', action.payload, ' --- SOCKET ID: ', socket.id);
        Profiles.updateSocketId(action.payload, socket.id);
        //save the socketId in db
      }
    });

    socket.on('action', (action) => {
      // if (action.type === 'server/testSocket_ClientToServer') {
      //   console.log('data: ', action.data);

      //   socket.emit('action', {type: 'testSocket_ServerToClient', data: 'Socket data flow from server to client confirmed'});
      // }
      let user = {
        admin: 1,
        id: 9,
        firstName: 'Sheyda',
        lastName: 'Rezaei',
        email: 'skysurfer@gmail.com',
        phone: '415-316-6314'
      };

      if (user.admin) {
        socket.emit('action', {type: 'UPDATE_QUEUE_INFO',
          payload: {
            partyCount: 6,
            waitDuration: '38min-host',
            waitTime: '8:49pm-host',
            queueList: [
              {
                user: {
                  id: 9,
                  firstName: 'Sheyda',
                  lastName: 'Rezaei',
                  email: 'skysurfer@gmail.com',
                  phone: '415-316-6314'
                },
                partyId: 2,
                partyCount: 3,
                waitDuration: '22min',
                waitTime: '8:25pm'
              },
              {
                user: {
                  id: 7,
                  firstName: 'Fariba',
                  lastName: 'Rezae',
                  email: 'fariba@gmail.com',
                  phone: '415-756-7465'
                },
                partyId: 3,
                partyCount: 3,
                waitDuration: '22min',
                waitTime: '8:25pm'
              }
            ]
          }});
      } else {

        socket.emit('action', {type: 'UPDATE_QUEUE_INFO',
          payload: {
            partyCount: 6,
            waitDuration: '38min',
            waitTime: '8:49pm'
          }});

        socket.emit('action', {type: 'UPDATE_PARTY_INFO',
          payload: {
            partyId: 8,
            partiesAhead: 8,
            partiesBehind: 10,
            myWaitDuration: '20min',
            myWaitTime: '8:35pm',
            message: 'please head to the queue'
          }});
      }
    });
  });
};


