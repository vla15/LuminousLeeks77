'use strict';
const express = require('express');
const router = express.Router();
const QueueController = require('../controllers').Queues;


router.route('/:queueid/:userid')
  //req.params.queueid
  //req.params.userid
  //need to get all queue info
  .get(QueueController.getOne);

module.exports = router;