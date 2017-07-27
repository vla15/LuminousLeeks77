const mq = require('amqplib');



mq.connect('amqp://localhost')
  .then((conn) => {
    return conn.createChannel();
  })
  .then((ch) => {
    return ch.assertQueue('sms')
      .then((ok) => {
        return ch.sendToQueue('sms', new Buffer('hello world'));
      });
  })
  .catch(console.warn);