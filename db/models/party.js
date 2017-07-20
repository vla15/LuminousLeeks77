const db = require('../');
const moment = require('moment');


const Party = db.Model.extend({
  tableName: 'parties',
  queue: function() {
    return this.belongsTo('Queue');
  }
});

  // initialize: function() {
  //   this.on('saving', (model, attrs, options) => {
  //     this.queue.get('next_wait_time');
  //   })
  // }

  // calculateWaitTime: function() {
  //   //next time to seat in the queue col on the queue
  //   //ivoke this.queue
  //   this.queue.then(q => {
  //     if (q.get('next_wait_time')) {
  //       console.log(q.get('next_wait_time'));
  //       return q.get('next_wait_time');
  //     }
  //   })
//get wait time of queue
// Party.where({id: 1}).fetch({withRelated: ['queue']}).then((result) => {
//   console.log(JSON.stringify(Party.related('queue')));
// })


module.exports = db.model('Party', Party);