const mq = require('amqplib');
const db = process.env.RABBITMQ_BIGWIG_URL || 'amqp://localhost';
const twilioClient = require('./twilio');


module.exports = () => {
  mq.connect(db)
    .then((conn) => {
      return conn.createChannel();
    })
    .then((ch) => {
      return ch.assertQueue('sms')
        .then((ok) => {
          return ch.consume('sms', (msg) => {
            if (msg !== null) {
              console.log(msg);
              ch.ack(msg);
              msg = msg.content.toString().split('+');
              var number = msg[0];
              var message = msg[1];
              Promise.resolve(twilioClient.phoneLookup(number))
                .then((number) => {
                  twilioClient.sendSms(number, message);
                })
                .catch((err) => {
                  console.log('invalid phone number');
                });
            }
          });
        });
    })
    .catch(console.warn);  
  return (req, res, next) => {
    next();
  };
};