'use strict';
const express = require('express');
const router = express.Router();
const PartyController = require('../controllers').Party;

router.route('/:queueid/:partyid')
  .get(PartyController.getPartyInfo);

router.route('/add/:queueid/:userid/:partysize/:firstname/:phonenumber')
  .put(PartyController.enqueue);

router.route('/rm/:queueid/:partyid')
  .delete(PartyController.dequeue);

module.exports = router;
