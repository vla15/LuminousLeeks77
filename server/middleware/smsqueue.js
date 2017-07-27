const mq = require('ampqlib/callback_api');

mq.connect('amqp://localhost', (err, conn) => {
  conn.createChannel((err, ch) => {
    const sms = 'smsqueue';
    ch.assertQueue(sms, {durable: false});
    ch.sendToQueue(sms, new Buffer('hello world!'));
    console.log('[x] Sent Hello World');

    setTimeout(() => {
      conn.close();
      process.exit(0);
    }, 500);
  });
});