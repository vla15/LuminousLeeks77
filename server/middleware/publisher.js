const mq = require('amqplib');


module.exports = (number, message) => {
  mq.connect('amqp://localhost')
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
  return (req, res, next) => {
    next();
  };
};