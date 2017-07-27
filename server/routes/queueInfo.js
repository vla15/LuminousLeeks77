'use strict';
const express = require('express');
const router = express.Router();
const QueueController = require('../controllers').Queues;


// router.route('/host/:queueid')
//   .get(QueueController.getPartyInfoOfQueue);
// router.route('/test')
//   .get(QueueController.isOpenStatus);

router.route('/getQueueInfoCustomer/:queueid')
  .get(QueueController.getQueueInfoCustomer);

router.route('/getQueueInfoHost/:queueid')
  .get(QueueController.getQueueInfoHost);

router.route('/togglequeue/:queueid')
  .put(QueueController.toggleQueue, QueueController.updatePartiesOnToggleQueue);

router.route('/:queueid/:userid')
  .get(QueueController.getQueueByUser);

module.exports = router;
