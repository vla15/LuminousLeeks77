'use strict';
const express = require('express');
const router = express.Router();
const QueueController = require('../controllers').Queues;


router.route('/host/:queueid')
  .get(QueueController.getPartyInfoOfQueue);

router.route('/togglequeue/:queueid')
  .put(QueueController.toggleQueue);

router.route('/:queueid/:userid') 
  .get(QueueController.getQueueByUser);

module.exports = router;