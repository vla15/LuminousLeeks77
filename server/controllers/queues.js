const models = require('../../db/models');

//get all of queue

module.exports.toggleQueue = (req, res) => {
  models.Queue.where({id: req.params.queueid})
    .fetch({
      columns: ['is_open']
    })
    .then(open => {
      models.Queue.where({id: req.params.queueid})
        .save({is_open: !(open.get('is_open'))}, {patch: true})
    }).then(result => { models.Queue.where({id: req.params.queueid}).fetch({
      columns: ['is_open']
    }).then(result => { res.send(result) }) })
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

module.exports.getPartyInfoOfQueue = (req, res) => {
  console.log('MONKEY!!!!!!!!');
  models.Party.where({queue_id: req.params.queueid})
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
  models.Queue.where({ id: req.params.queueid }).fetch()
    .then(queue => {
      res.send(queue);
    });
}


module.exports.getQueueInfoHost = (req, res) => {
  models.Queue.where({ id: req.params.queueid }).fetch({
    withRelated: ['parties']
  })
    .then(queue => {
      res.send(queue);
    });
}

//no rows defaults to catch
