const models = require('../../db/models');

//get all of queue

module.exports.toggleQueue = (req, res) => {
  models.Queue.where({id: req.params.queueid})
    .fetch({
      columns: ['is_open']
    })
    .then(open => {
      models.Queue.where({id: req.params.queueid})
        .save({is_open: !(open.get('is_open'))}, {patch: true});
      res.status(200).send('updated');
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
//grabs all parties info, for example: http://localhost:3000/api/queueinfo/host/1
//add parties: http://localhost:3000/api/partyinfo/add/1/1/4
module.exports.getPartyInfoOfQueue = (req, res) => {
  console.log('are you working? --------->')
  models.Party.where({queue_id: req.params.queueid})
    .query((qb) => {
      qb.orderBy('wait_time', 'ASC');
    })
    .fetchAll({
      withRelated: ['queue', {
        'profile': (qb) => {
          qb.select('id', 'first', 'last', 'email', 'phone');
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


