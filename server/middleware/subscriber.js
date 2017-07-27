const mq = require('amqplib');


mq.connect('amqp://localhost')
  .then((conn) => {
    return conn.createChannel();
  })
  .then((ch) => {
    return ch.assertQueue('sms')
      .then((ok) => {
        return ch.consume('sms', (msg) => {
          if (msg !== null) {
            console.log(msg.content.toString());
            ch.ack(msg);
          }
        });
      });
  })
  .catch(console.warn);