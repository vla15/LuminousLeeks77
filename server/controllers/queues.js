const models = require('../../db/models');

module.exports.getOne = (req, res) => {
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
    .then(result => {
      console.log(result);
    });
};

//no rows defaults to catch


