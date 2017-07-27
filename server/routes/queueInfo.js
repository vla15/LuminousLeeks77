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

// Opens or Closes Queue
// Sends QueueInfoHost back as Res
// Sends sockets to:
// --------------------------------------------------------
//  Host:               QueueInfoHost
//  Queued Customer:    QueueInfoCustomer, PartyInfoCustomer
//  NonQueued Customer: QueueInfoCustomer
// --------------------------------------------------------

router.route('/togglequeue/:queueid')
  .put(QueueController.toggleQueue, QueueController.updatePartiesOnToggleQueue);

router.route('/:queueid/:userid')
  .get(QueueController.getQueueByUser);

module.exports = router;
