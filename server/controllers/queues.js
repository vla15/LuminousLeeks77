const models = require('../../db/models');

//get all of queue
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
  console.log('hi');
  models.Party.where({queue_id: req.params.queueid})
    .query((qb) => {
      qb.orderBy('wait_time', 'ASC');
    })
    .fetchAll({
      withRelated: ['queue', {
        'profile': (qb) => {
          qb.select('id', 'first', 'last', 'email', 'phone')
        }}],
      columns: ['id', 'queue_id', 'wait_time', 'profile_id', 'party_size', 'first_name', 'phone']
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

//no rows defaults to catch


