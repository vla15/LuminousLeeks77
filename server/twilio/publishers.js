const mq = require('amqplib');
const db = process.env.RABBITMQ_BIGWIG_URL || 'amqp://localhost';


module.exports = (number, message) => {
  mq.connect(db)
    .then((conn) => {
      console.log('created channel');
      return conn.createChannel();
    })
    .then((ch) => {
      return ch.assertQueue('sms')
        .then((ok) => {
          var post = `${number}+${message}`;
          return ch.sendToQueue('sms', new Buffer(post));
        });
    })
    .catch(console.warn);
};