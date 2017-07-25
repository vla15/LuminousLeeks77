'use strict';
const express = require('express');
const path = require('path');
const middleware = require('./middleware');
const controllers = require('./controllers');
const routes = require('./routes');
const PartyController = require('./controllers').Party;
const QueueController = require('./controllers').Queues;


const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(middleware.morgan('dev'));
app.use(middleware.cookieParser());
app.use(middleware.bodyParser.urlencoded({extended: false}));
app.use(middleware.bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(middleware.auth.session);
app.use(middleware.passport.initialize()); 
app.use(middleware.passport.session()); 
app.use(middleware.flash());



app.use(express.static(path.join(__dirname, '../public')));

middleware.socketIO(io);
// controllers.Queues.updatePartiesOnDequeue(io);

app.use('/', routes.auth); 
app.use('/api', routes.api);
app.use('/api/profiles', routes.profiles);
app.use('/api/queueinfo', routes.queueInfo);
app.use('/api/partyinfo', routes.partyInfo);

const updatePartiesOnDequeue = (req, res) => {
  console.log('res.queue ----->', res.queue);

  res.queue.forEach(party => {
    let profile = party.related('profile');
    console.log('profile', profile)
    io.to(profile.get('socket_id')).emit('action', {
    	type: 'UPDATE_PARTY_INFO',
    	payload: profile
    });
  });
};
app.delete('/api/partyinfo/rm/:queueid/:partyid', PartyController.dequeue, QueueController.getPartyInfoOfQueue, updatePartiesOnDequeue);

module.exports= server;
