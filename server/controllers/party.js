const models = require('../../db/models');
const moment = require('moment');

module.exports.getOne = (req, res) => {
  models.Party.where({id: req.params.partyid})
    .fetch({
      withRelated: ['queue', 'profile'],
      columns: ['id', 'queue_id', 'wait_time', 'profile_id', 'party_size']
    })
    .then(result => {
      res.send(result);
    })
    .error(err => {
      res.send(err);
    });
};

//gets all parties for the host;
//passing in queue Id and partyId
module.exports.getAll = (req, res) => {
  var queue = [];
  return models.Party.where({queue_id: req.params.queueid})
    .query((qb) => {
      qb.orderBy('wait_time', 'DESC');
    })
    .fetchAll({
      withRelated: ['queue', 'profile'],
      columns: ['id', 'queue_id', 'wait_time', 'profile_id', 'party_size']
    })
    .then(result => {
      //use req.params.partyid
      var length = result.length;
      var test = result.map((customer, index) => {
        //your place is index + 1
        console.log(customer);
        customer.set({partiesAhead: index});
        customer.set({partiesBehind: length - (index + 1)});
        return customer;
      });
      test = test.filter(party => {
        return party.get('id') === Number(req.params.partyid);
      });
      res.send(test);
    })
    .error(err => {
      res.send(err);
    });
};

module.exports.enqueue = (req, res) => {
  if (!req.isAuthenticated()) {
    models.Queue.where({id: req.params.queueid})
      .fetch({columns: ['next_wait_time']})
      .then(result => {
        console.log(result.get('next_wait_time'));
        models.Party.forge({
          queue_id: req.params.queueid,
          wait_time: moment(new Date()).add(result.get('next_wait_time'), 'm'),
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