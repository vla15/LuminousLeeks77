const Profiles = require('../controllers').Profiles;
const models = require('../../db/models');
const io = require('../app').io;

io.on('connection', socket => {
  socket.on('action', action => {
    if (action.type === 'server/SEND_USER_ID') {
      Profiles.updateSocketId(action.payload, socket.id);
    }
  });
});

var emitSocketMessage = (socketId, action, payload) => {
  console.log(`***** socket: ${socketId}, action: ${action}, payload: ${payload}`);
  io.to(socketId).emit('action', {
    type: action,
    payload: payload
  });
};


var sendSocketDataForParties = queueId => {
  return models.Party.where({queue_id: queueId})
    .query((qb) => {
      qb.orderBy('wait_time', 'ASC');
    })
    .fetchAll({
      withRelated: ['queue', 'profile'],
      columns: ['id', 'queue_id', 'wait_time', 'profile_id', 'party_size', 'first_name', 'phone_number']
    })
    .then(result => {
      var length = result.length;
      var targetCustomer = result.map((customer, index) => {
        customer.set({parties_ahead: index});
        customer.set({parties_behind: length - (index + 1)});
        return customer;
      });
      targetCustomer.forEach(customer => {
        emitSocketMessage(customer.related('profile').get('socket_id'), 'UPDATE_PARTY_INFO', customer);
      });
    });
};

var updateQueueInfoForNonqueuedCustomers = queueId => {
  models.Profile.query(qb => {
    qb.select('*').from('profiles').leftJoin(
      'parties',
      'profiles.id',
      'parties.profile_id');
  })
    .fetchAll({
      columns: ['socket_id']
    })
    .then(result => {
      // res.send(result);
      result.forEach(party => {
        if (party.attributes.id === null && party.attributes.socket_id && (party.attributes.admin === null || party.attributes.admin === queueId)) {
          models.Queue.where({ id: queueId }).fetch({
            withRelated: ['parties']
          })
            .then(queue => {
              emitSocketMessage(party.attributes.socket_id, 'UPDATE_QUEUE_INFO_ON_TOGGLE_QUEUE', queue);
            });
        }
      });
    });
};

var sendQueueInfoToHostWithSocket = queueId => {
  return models.Queue.where({ id: queueId })
    .fetch({
      withRelated: [{
        'parties': (qb) => {
          qb.orderBy('wait_time', 'ASC');
        }
      }]
    })
    .then(queue => {
      return models.Profile
        .where({ admin: queueId })
        .fetchAll({ withRelated: ['queue']})
        .then(profiles => {
          console.log('profiles', profiles);
          profiles.forEach(profile => {
            emitSocketMessage(profile.get('socket_id'), 'GET_QUEUE_INFO_HOST', queue);
          });
        });
    });
};

var updatePartiesOnDequeue = queueId => {
  if (res.queue) {
    res.queue.forEach(party => {
      let profile = party.related('profile');
      emitSocketMessage(profile.get('socket_id'), 'UPDATE_PARTY_INFO', party);
    });
  }
};

var sendSocketDequeueForCustomer = (userId, queueId) => {
  //get queue info for this customer
  var socket = '';
  return models.Profile.where({ id: userId })
    .fetch()
    .then(profile => {
      socket = profile.get('socket_id');
      return models.Queue.where({id: queueId}).fetch();
    })
    .then(queue => {
      queue.set('queue_size', queue.get('queue_size') - 1);
      emitSocketMessage(socket, 'UPDATE_PARTY_INFO', { party_size: 1, first_name: '', phone_number: '', location: { lat: 37.7836676, lng: -122.4090455 } });
      emitSocketMessage(socket, 'GET_QUEUE_INFO_CUSTOMER', queue);
    });
};

var updatePartiesOnToggleQueue = queueId => {
  var queueData;
  models.Queue.where({id: queueId}).fetch({
    withRelated: ['parties']
  })
    .then(data => {
      queueData = data;
      return models.Profile.query(qb => {
        qb.select('*').from('profiles').leftJoin(
          'parties',
          'profiles.id',
          'parties.profile_id')
          .whereNotNull('profiles.socket_id');
      })
        .fetchAll();
    })
    .then(result => {
      result.forEach(party => {
        if (party.attributes.id === null && party.attributes.socket_id && (party.attributes.admin === null || party.attributes.admin === queueId)) {
          emitSocketMessage(party.attributes.socket_id, 'UPDATE_QUEUE_INFO_ON_TOGGLE_QUEUE', queueData);
        }
      });

    })
    .error(err => {
      console.log(err);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = {
  emitSocketMessage: emitSocketMessage,
  sendSocketDataForParties: sendSocketDataForParties,
  updateQueueInfoForNonqueuedCustomers: updateQueueInfoForNonqueuedCustomers,
  sendQueueInfoToHostWithSocket: sendQueueInfoToHostWithSocket,
  updatePartiesOnDequeue: updatePartiesOnDequeue,
  sendSocketDequeueForCustomer: sendSocketDequeueForCustomer,
  updatePartiesOnToggleQueue: updatePartiesOnToggleQueue
};
