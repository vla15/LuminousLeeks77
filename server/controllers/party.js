const models = require('../../db/models');
const moment = require('moment');

module.exports.getOne = (req, res) => {
  models.Party.where({id: req.params.partyid})
    .fetch({
      withRelated: ['queue', 'profile'],
      columns: ['id', 'queue_id', 'time_to_sit', 'time_sat', 'profile_id', 'party_size']
    })
    .then(result => {
      res.send(result);
    })
    .error(err => {
      res.send(err);
    });
};

//gets all parties for the host;
module.exports.getAll = (req, res) => {
  var queue = [];
  models.Party.where({id: req.params.partyid})
    .query((qb) => {
      qb.orderBy('time_to_sit', 'DESC');
    })
    .fetch({columns: ['queue_id']})
    .then(queue => {
      return models.Party.where({queue_id: queue.get('queue_id')})
        .fetchAll({
          withRelated: ['queue', 'profile'],
          columns: ['id', 'queue_id', 'time_to_sit', 'time_sat', 'profile_id', 'party_size']
        });
    })
    .then(result => {
      var test = result.map(customer => {
        return customer;
      });
      res.send(test);
    })
    .error(err => {
      res.send(err);
    });
};

module.exports.enqueue = (req, res) => {
  if (req.isAuthenticated()) {
    models.Queue.where({id: req.params.queueid})
      .fetch({columns: ['next_wait_time']})
      .then(result => {
        console.log(result.get('next_wait_time'));
        models.Party.forge({
          queue_id: req.params.queueid,
          time_to_sit: moment(new Date()).add(result.get('next_wait_time'), 'm'),
          profile_id: req.params.userid,
          party_size: req.params.partysize
        }).save();
      })
      .then(party => {
        res.status(201).send('success');
      })
      .error(err => {
        res.status(500).send(err);
      })
      .catch(err => {
        res.status(404).send(err);
      });
  } else {
    res.send('you aint authenticated');
  }
};

module.exports.dequeue = (req, res) => {
  if (!req.isAuthenticated()) {
    new models.Party({id: req.params.partyid})
      .destroy()
      .then(result => {
        res.send('it has been destroyed');
      });
  } else {
    res.send('you aint authenticated on a dequeue');
  }
};