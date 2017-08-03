const models = require('../../db/models');
const Party = require('./party');
const SocketIO = require('../sockets/socketIO');

//get all of queue
module.exports.toggleQueue = (req, res, next) => {
  models.Queue.where({id: req.params.queueid})
    .fetch()
    .then(queue => {
      let status = !queue.get('is_open');
      return queue.set('is_open', status).save();
    })
    .then(queue => {
      res.result = queue;
      SocketIO.updatePartiesOnToggleQueue(req.params.queueid);
      SocketIO.updateQueueList();
      res.send('ok');
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(err => {
      res.status(404).send(err);
    });
};

module.exports.getQueueByUser = (req, res) => {
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


module.exports.getAll = (req, res) => {
  models.Queue.fetchAll()
    .then(queues => {
      res.send(queues);
    })
    .catch(err => {
      res.send(err);
    });
};


module.exports.getPartyInfoOfQueue = (req, res, next) => {
  // SocketIO.sendSocketDataForParties(req.params.queueid);
  // res.send('success');
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

      res.send(queue);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(err => {
      res.status(404).send(err);
    });
};

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

module.exports.getQueueInfoCustomer = (req, res) => {
  console.log(req.params.queueid);
  models.Queue.where({ id: req.params.queueid }).fetch()
    .then(queue => {
      res.send(queue);
    });
};

module.exports.getQueueInfoHost = (req, res) => {
  models.Queue.where({ id: req.params.queueid })
    .fetch({
      withRelated: [{
        'parties': (qb) => {
          qb.orderBy('wait_time', 'ASC');
        }
      }]
    })
    .then(queue => {
      res.send(queue);
    });
};
