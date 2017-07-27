const mq = require('amqplib/callback_api');


module.exports = () => {
  mq.connect('amqp://localhost', (err, conn) => {
    conn.createChannel((err, ch) => {
      const sms = 'smsqueue';
      ch.assertQueue(sms, {durable: false});
      ch.sendToQueue(sms, new Buffer('hello world!'));
      console.log('[x] Sent Hello World');

      setTimeout(() => {
        conn.close();
        // process.exit(0);
      }, 500);
    });
  });
  return (req, res, next) => {
    next();
  };
};


mq.connect('amqp://localhost', (err, conn) => {
  conn.createChannel((err, ch) => {
    const sms = 'smsqueue';

    ch.assertQueue(sms, {durable: false});
    console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', sms);
    ch.consume(sms, (msg) => {
      console.log(' [x] Received %s', msg.content.toString());
    }, {noAck: true});
  });
});