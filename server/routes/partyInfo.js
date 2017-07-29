'use strict';
const express = require('express');
const router = express.Router();
const PartyController = require('../controllers').Party;
const QueueController = require('../controllers').Queues;

router.route('/:queueid/:userid')
  .get(PartyController.getPartyInfoCustomer);

// Queues a customer
// Sends QueueInfoHost back as Res
// Sends sockets to:
// --------------------------------------------------------
//  Host:               QueueInfoHost
//  Queued Customer:    QueueInfoCustomer, PartyInfoCustomer
//  NonQueued Customer: QueueInfoCustomer
// --------------------------------------------------------

router.route('/add/:queueid/:userid/:partysize/:firstname/:phonenumber/:lat/:lng')
  .put(PartyController.enqueue,
    PartyController.getPartyInfoCustomer);

router.route('/rm/:queueid/:partyid')
  .delete(PartyController.dequeue,
    QueueController.getPartyInfoOfQueue);

router.route('/updatePartyLocation/:partyid/:lat/:lng')
  .put(PartyController.updatePartyLocation);

module.exports = router;
