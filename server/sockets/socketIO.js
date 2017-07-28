const Profiles = require('../controllers').Profiles;
const models = require('../../db/models');
const io = require('../app').io;


io.on('connection', socket => {
  socket.on('action', (action) => {
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

var sendSocketDataForParties = function (req, res, next) {
  return models.Party.where({queue_id: req.params.queueid})
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
      next();
    });
};
var updateQueueInfoForNonqueuedCustomers = (queueId) => {
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
      if (party.attributes.id === null && party.attributes.socket_id) {
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

module.exports = {
  emitSocketMessage: emitSocketMessage,
  sendSocketDataForParties: sendSocketDataForParties,
  updateQueueInfoForNonqueuedCustomers: updateQueueInfoForNonqueuedCustomers
};
