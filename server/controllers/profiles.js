const models = require('../../db/models');
const knex = require('knex');

module.exports.getAll = (req, res) => {
  models.Profile.fetchAll()
    .then(profiles => {
      console.log('profiles', profiles);
      res.status(200).send(profiles);
    })
    .catch(err => {
      res.status(503).send(err);
    });
};

module.exports.getOne = (req, res) => {
  models.Profile.where({ id: req.params.id }).fetch()
    .then(profile => {
      if (!profile) {
        throw profile;
      }
      res.status(200).send(profile);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

module.exports.update = (req, res) => {
  models.Profile.where({ id: req.params.id }).fetch()
    .then(profile => {
      if (!profile) {
        throw profile;
      }
      return profile.save(req.body, { method: 'update' });
    })
    .then(() => {
      res.sendStatus(201);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

module.exports.updatePhone = (req, res) => {
  models.Profile.where({ id: req.user.id }).fetch()
    .then(profile => {
      if (!profile) {
        throw profile;
      }
      return profile.save(req.body, { method: 'update' });
    })
    .then(() => {
      res.redirect('/profile');
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

module.exports.updateSocketId = (userId, socketId) => {
  console.log('IN update SocketId');
  models.Profile.where({ id: userId }).fetch()
    .then(profile => {
      if (!profile) {
        throw profile;
      }
      //profile.set('socket_id', socketId);
      return profile.save('socket_id', socketId, { method: 'update' });
    })
    .catch(err => {
      console.log('no profile found');
    });
};

// module.exports.deleteOne = (req, res) => {
//   models.Profile.where({ id: req.params.id }).fetch()
//     .then(profile => {
//       if (!profile) {
//         throw profile;
//       }
//       return profile.destroy();
//     })
//     .then(() => {
//       res.sendStatus(200);
//     })
//     .error(err => {
//       res.status(503).send(err);
//     })
//     .catch(() => {
//       res.sendStatus(404);
//     });
// };
