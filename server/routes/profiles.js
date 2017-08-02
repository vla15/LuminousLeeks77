'use strict';
const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers').Profiles;

// router.route('/')
//   .get(ProfileController.getAll)
//   // .post(ProfileController.create)
//   ;

router.route('/:id')
  .get(ProfileController.getOne)
  .put(ProfileController.update);
// .delete(ProfileController.deleteOne);

// router.route('/setUserLocation/:userid/:lat/:lng')
//   .put(ProfileController.setUserLocation);

router.route('/viewing/:userid/:queueid')
  .put(ProfileController.updateViewing);

module.exports = router;