'use strict';
const express = require('express');
const router = express.Router();
const PartyController = require('../controllers').Party;

// router.route('/test/:partyid')
//   .get(PartyController.getOne);

router.route('/add/:queueid/:userid/:partysize')
  .put(PartyController.enqueue);

router.route('/rm/:partyid')
  .delete(PartyController.dequeue);

module.exports = router;