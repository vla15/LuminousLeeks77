const models = require('../../db/models');

//get all of queue
module.exports.toggleQueue = (req, res) => {
  console.log('TOGGLE QUEUE');
  models.Queue.where({id: req.params.queueid})
    .fetch({
      columns: ['is_open']
    })
    .then(open => {
      models.Queue.where({id: req.params.queueid})
        .save({
          is_open: !(open.get('is_open'))},
        {patch: true});
    })
    .then(result => { 
      models.Queue.where({id: req.params.queueid})
        .fetch({columns: ['is_open']})
        .then(result => { 
          // res.send(result) ;
          res.result = result;
          next();
        });
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(err => {
      res.status(404).send(err);
    });
};

module.exports.updatePartiesOnToggleQueue = (req, res) => {
  models.Profile.query(qb => {
    qb.select('*').from('profiles').leftJoin(
      'parties',
      'profiles.id',
      'parties.profile_id');
  })
    .fetchAll({
      columns: ['socket_id', ]
    })
    .then(result => {
      // res.send(result);
      result.forEach(party => {
        if (party.attributes.id === null && party.attributes.socket_id) {
          models.Queue.where({ id: req.params.queueid }).fetch({
            withRelated: ['parties']
          })
            .then(queue => {
              emitSocketMessage(party.attributes.socket_id, 'UPDATE_QUEUE_INFO_ON_TOGGLE_QUEUE', queue);
            // res.send(queue);
            });
        }
      });
    });
};

module.exports.getQueueByUser = (req, res) => {
  console.log('GET QUEUE BY USER');
  models.Queue.where({id: req.params.queueid}).fetch()
    .then(queue => {
      if (!queue) {
        throw queue;
      } else {
        res.status(200).send(queue);
      }
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(err => {
      res.status(404).send(err);
    });
};


//grabs all parties info, for example: http://localhost:3000/api/queueinfo/host/1
//add parties: http://localhost:3000/api/partyinfo/add/1/1/4
module.exports.getPartyInfoOfQueue = (req, res, next) => {
  models.Party.where({queue_id: req.params.queueid})
    .query((qb) => {
      qb.orderBy('wait_time', 'ASC');
    })
    .fetchAll({
      withRelated: ['queue', 'profile'],
      columns: ['id', 'queue_id', 'wait_time', 'profile_id', 'party_size', 'first_name', 'phone_number']
    })
    .then(queue => {

      var length = queue.length;

      var targetCustomer = queue.map((customer, index) => {
        customer.set({parties_ahead: index});
        customer.set({parties_behind: length - (index + 1)});
        return customer;
      });
      // if (!queue) {

      //   throw queue;
      // } else {
        // console.log('queue list/parties------>', queue);

        // res.status(200).send(queue);
      res.queue = queue;
      next();

      // }
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(err => {
      res.status(404).send(err);
    });
};

// module.exports.updatePartiesOnDequeue = (req, res, queues, io) => {
//   console.log('hdgfhdfsgdhgfdhfghgfhgfdhgfdshgfdsh----->')
//   // io.on('connection', socket => {
//   //   console.log( 'Socket connected: ?????????' + socket.id);
//   //   io.to(socket.id).emit('action', {type: 'SET_SOCKET_ID', data: queue});
//   // });
// };

module.exports.getPartyInfoCustomer = (req, res) => {
  models.Party.where({id: res.party_id})
    .query((qb) => {
      qb.orderBy('wait_time', 'ASC');
    })
    .fetchAll({
      withRelated: ['queue', {
        'profile': (qb) => {
          qb.select('id', 'first', 'last', 'email', 'phone');
        }}],
      columns: ['id', 'queue_id', 'wait_time', 'profile_id', 'party_size', 'first_name', 'phone_number']
    })
    .then(queue => {
      if (!queue) {
        throw queue;
      } else {
        res.status(200).send(queue);
      }
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(err => {
      res.status(404).send(err);
    });
};

module.exports.updatePartiesOnDequeue = (req, res) => {
  console.log('res.queue ----->', res.queue);
  if (res.queue) {
    res.queue.forEach(party => {
      let profile = party.related('profile');
      emitSocketMessage(profile.get('socket_id'), 'UPDATE_PARTY_INFO', party);
    });
  }
  res.send(res.queue);
};

module.exports.getQueueInfoCustomer = (req, res) => {
  models.Queue.where({ id: req.params.queueid }).fetch()
    .then(queue => {
      res.send(queue);
    });
};


module.exports.getQueueInfoHost = (req, res) => {
  models.Queue.where({ id: req.params.queueid }).fetch({
    withRelated: ['parties']
  })
    .then(queue => {
      res.send(queue);
    });
};

const emitSocketMessage = require('../app').emitSocketMessage;
//no rows defaults to catch
