const models = require('../../db/models');
const moment = require('moment');
const Queue = require('./queues');
const SocketIO = require('../sockets/socketIO');

module.exports.updatePartyLocation = (req, res) => {
  models.Party.where({ id: req.params.partyid })
    .save({lat: req.params.lat, lng: req.params.lng}, {patch: true})
    .then(data => {
      models.Party.where({ id: req.params.partyid })
      .fetch()
      .then(party => {
        console.log('party', party.serialize());
        SocketIO.sendQueueInfoToHostWithSocket(party.get('queue_id'));
      });
      res.status(200).send('successfully saved party location in database');
      console.log('successfully saved party location in database');
    });
};

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
  return models.Party
    .where({ profile_id: req.params.userid })
    .fetch({ require: true })
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
      res.send(targetCustomer);
    })
    .catch(err => {
      res.sendStatus(404);
    });
};


//remove not operator when launching
module.exports.enqueue = (req, res, next) => {
  console.log('IN ENQUEUE');
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
        .fetch({columns: ['next_wait_time', 'is_open', 'queue_size']})
        .then(result => {
          res.nextWaitTime = result.get('next_wait_time');
          if (!result.get('is_open')) {
            throw result;
          } else {
            res.nextWaitTimeExpired = moment().diff(moment(result.get('next_wait_time'))) >= 0 ? true : false;
            res.withinTen = moment(res.nextWaitTime).diff(moment(), 'minutes') > 10 ? moment(res.nextWaitTime) : moment().add(10, 'm');
            return models.Party.forge({
              queue_id: req.params.queueid,
              wait_time: res.nextWaitTimeExpired ? moment().add(10, 'm') : res.withinTen,
              profile_id: req.params.userid,
              party_size: req.params.partysize,
              first_name: user.get('first'),
              phone_number: user.get('phone'),
              lat: req.params.lat,
              lng: req.params.lng

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
            .save({queue_size: count, 
              next_wait_time: 
              res.nextWaitTimeExpired ? moment().add(20, 'm') : moment(res.nextWaitTime).add(10, 'm')
            }, {patch: true});
        })
        .then(success => {
          SocketIO.sendSocketDataForParties(req.params.queueid);
          SocketIO.updateQueueInfoForNonqueuedCustomers(req.params.queueid);
          return next();
        })
        .error(err => {
          res.send(404);
        });
    });
  // } else {
  //   res.send('you aint authenticated');
  // }
};

// http://localhost:3000/api/partyinfo/rm/1/5
module.exports.dequeue = (req, res, next) => {

  // console.log('testing dequeueeeee works------>')
  // if ( req.isAuthenticated()) {
  models.Party.where({id: req.params.partyid})
    .fetch()
    .then(result => {
      res.profile_id = result.get('profile_id');
      res.targetWaitTime = result.get('wait_time');
      SocketIO.sendSocketDequeueForCustomer(res.profile_id, req.params.queueid);
      return models.PartyHistory.forge({
        party_size: result.get('party_size'),
        wait_time: result.get('wait_time'),
        seat_time: moment()
      }).save();
    })
    .then(() => {
      return models.Party.where({ id: req.params.partyid})
      // return models.Party.where({ id: req.params.partyid})
        .destroy()
        .then(result => {
          return models.Party.where({queue_id: req.params.queueid})
            .query((qb) => {
              qb.orderBy('wait_time', 'ASC');
            })
            .fetchAll();
        })
        .then(count => {
          res.partyLength = count.length || 0;
          if (res.partyLength) {
            count.forEach((party, index) => {
              models.Party.where({id: party.get('id')})
                .save({wait_time: 
                  moment(res.targetWaitTime).diff(moment(party.get('wait_time'), 'm')) < 0 ? moment(party.get('wait_time')).subtract(10, 'm')
                    : party.get('wait_time')},
                  // moment(party.get('wait_time')).diff(moment(res.targetWaitTime)) < 0 ? party.get('wait_time') 
                  // : moment(party.get('wait_time')).subtract(10, 'm')},
                {patch: true});
            });
          }
          return models.Queue.where({id: req.params.queueid})
            .fetch()
            .then((q) => {
              res.nextWaitTime = q.get('next_wait_time');
              models.Queue.where({id: req.params.queueid})
                .save({queue_size: res.partyLength, next_wait_time: moment(res.nextWaitTime).subtract(10, 'm')}, {patch: true});
            });
        })
        .then(complete => {
          SocketIO.sendSocketDataForParties(req.params.queueid);
          SocketIO.updateQueueInfoForNonqueuedCustomers(req.params.queueid);
          SocketIO.sendQueueInfoToHostWithSocket(req.params.queueid);
          next();
        })
        .error(err => {
          res.status(305).send(err);
        })
        .catch(err => {
          res.status(415).send('error');
        });
    });
  // } else {
  //   res.send('you aint authenticated on a dequeue');
  // }
};


