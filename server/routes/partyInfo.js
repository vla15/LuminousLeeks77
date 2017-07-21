'use strict';
const express = require('express');
const router = express.Router();
const PartyController = require('../controllers').Party;

router.route('/:partyid')
  .get(PartyController.getOne);

router.route('/test/:partyid/:userid')
  .get(PartyController.getAll);

router.route('/add/:queueid/:userid/:partysize')
  .put(PartyController.enqueue);

router.route('/rm/:partyid')
  .delete(PartyController.dequeue);

module.exports = router;