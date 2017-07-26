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
module.exports.getPartyInfoCustomer = (req, res) => {
  console.log('IN GET PARTY INFO CUSTOMER');
  return models.Party.where({profile_id: req.params.userid})
    .fetch({require: true})
    .then(party => {
      res.party_id = res.party_id || party.get('id');
      return models.Party.where({queue_id: req.params.queueid})
        .query((qb) => {
          qb.orderBy('wait_time', 'ASC');
        })
        .fetchAll({
          withRelated: ['queue', 'profile'],
          columns: ['id', 'queue_id', 'wait_time', 'profile_id', 'party_size', 'first_name', 'phone_number']
        });
    })
    .then(result => {
      var length = result.length;
      var targetCustomer = result.map((customer, index) => {
        customer.set({parties_ahead: index});
        customer.set({parties_behind: length - (index + 1)});
        return customer;
      });
      targetCustomer = targetCustomer.filter(party => {
        return party.get('id') === Number(res.party_id);
      });
      console.log('targetCustomer: ', targetCustomer);
      res.send(targetCustomer);
    })
    .catch(err => {
      console.log('I had a problem');
      res.sendStatus(404);
    });
};


//remove not operator when launching
module.exports.enqueue = (req, res, next) => {
  //if (req.isAuthenticated()) {
  models.Profile.where({ id: req.params.userid })
    .fetch()
    .then(user => {
      if (user && user.get('admin') !== '1') {
        throw user;
      } else {
        return models.Profile.forge({
          phone: req.params.phonenumber,
          first: req.params.firstname
        }).save()
          .then(user => {
            req.params.userid = user.get('id');
            throw user;
          });
      }
    })
    .catch(user => {
      return models.Queue.where({id: req.params.queueid})
        .fetch({columns: ['next_wait_time', 'is_open']})
        .then(result => {
          if (!result.get('is_open')) {
            throw result;
          } else {
            return models.Party.forge({
              queue_id: req.params.queueid,
              wait_time: moment().add(result.get('next_wait_time'), 'm'),
              profile_id: req.params.userid,
              party_size: req.params.partysize,
              first_name: user.get('first'),
              phone_number: user.get('phone')
            }).save()
              .then(result => { res.party_id = result.get('id'); })
              .error(err => {
                res.send(err);
              });
          }
        })
        .then((party) => {
          return models.Party.where({queue_id: req.params.queueid})
            .count('id');
        })
        .then(count => {
          return models.Queue.where({id: req.params.queueid})
            .save({queue_size: count, next_wait_time: Math.max(count * 10, 10)}, {patch: true});
        })
        .then(success => {
          return next();
          let queueSize = success.attributes.queue_size;
          console.log(success.get('queue_size'));
          // send new queue size to all the clients in the queue
          models.Party.where({queue_id: req.params.queueid})
            .fetchAll()
            .then(parties => {
              parties.each((party, i) => {
                //get the socketID for each user
                console.log('party', i);
              });
            });
          //getAllPartiesInQueue(req.params.queueId);
          res.status(200).send('successful');
        })
        .error(err => {
          res.send(404);
        });
    });
  // } else {
  //   res.send('you aint authenticated');
  // }
};


module.exports.sendSocketDataForParties = function (req, res, next) {
  console.log('in send Sockets');
  return models.Party.where({queue_id: req.params.queueid})
    .query((qb) => {
      qb.orderBy('wait_time', 'ASC');
    })
    .fetchAll({
      withRelated: ['queue', 'profile'],
      columns: ['id', 'queue_id', 'wait_time', 'profile_id', 'party_size', 'first_name', 'phone_number']
    })
    .then(result => {
      console.log('result: ', result);
      var length = result.length;
      var targetCustomer = result.map((customer, index) => {
        customer.set({parties_ahead: index});
        customer.set({parties_behind: length - (index + 1)});
        return customer;
      });
      targetCustomer.forEach(customer => {
        console.log('customer: ', customer);
        emitSocketMessage(customer.related('profile').get('socket_id'), 'UPDATE_PARTY_INFO', customer);
      });
      next();
    });
};

module.exports.sendQueueInfoToHostWithSocket = function(req, res, next) {
  console.log('SEND QUEUE INFO TO HOST WITH SOCKET');
  return models.Queue
    .where({ id: req.params.queueid })
    .fetch({
      withRelated: ['parties']
    })
    .then(queue => {
      res.queue = queue;
    })
    .then(() => {
      return models.Profile
        .where({ admin: req.params.queueid })
        .fetchAll({ withRelated: ['queue']})
        .then(profiles => {
          profiles.forEach(profile => {
            console.log(profile.serialize());
            emitSocketMessage(profile.get('socket_id'), 'GET_QUEUE_INFO_HOST', res.queue);
          });
        })
        .then(()=> {
          next();
        });
    });
};

sendSocketDequeueForCustomer = (userId, queueId) => {
  //get queue info for this customer
  var socket = '';
  return models.Profile.where({ id: userId })
    .fetch()
    .then(profile => {
      socket = profile.get('socket_id');
      //   models.Queue.where({id: queueId}).fetch()
      // })
      // .then(queue => {
      //  console.log('QUEUE', queue);
      emitSocketMessage(socket, 'UPDATE_PARTY_INFO', { party_size: 1, first_name: '', phone_number: '' });
    });
};

// http://localhost:3000/api/partyinfo/rm/1/5
module.exports.dequeue = (req, res, next) => {

  // console.log('testing dequeueeeee works------>')
  // if ( req.isAuthenticated()) {
  models.Party.where({id: req.params.partyid})
    .fetch()
    .then(result =>{
      res.profile_id = result.get('profile_id');
      sendSocketDequeueForCustomer(res.profile_id, req.params.queueid);
    });
  return models.Party.where({ id: req.params.partyid})
    .destroy()
    .then(result => {
      return models.Party.where({queue_id: req.params.queueid})
        .count('id');
    })
    .then(count => {
      return models.Queue.where({id: req.params.queueid})
        .save({queue_size: count, next_wait_time: Math.max(count * 10, 10)}, {patch: true});
    })
    .then(complete => {
      return next();
    })
    .error(err => {
      res.status(305).send(err);
    })
    .catch(err => {
      res.status(415).send('error');
    });
  // } else {
  //   res.send('you aint authenticated on a dequeue');
  // }
};

const emitSocketMessage = require('../app').emitSocketMessage;
const io = require('../app').io;
