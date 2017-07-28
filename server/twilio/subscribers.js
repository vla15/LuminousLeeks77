const mq = require('amqplib');
const twilioClient = require('./twilio');


module.exports = () => {
  mq.connect('amqp://localhost')
    .then((conn) => {
      return conn.createChannel();
    })
    .then((ch) => {
      return ch.assertQueue('sms')
        .then((ok) => {
          return ch.consume('sms', (msg) => {
            if (msg !== null) {
              ch.ack(msg);
              msg = msg.content.toString().split('+');
              var number = msg[0];
              var message = msg[1];
              Promise.resolve(twilioClient.phoneLookup(number))
                .then((number) => {
                  twilioClient.sendSms(number, message);
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          });
        });
    })
    .catch(console.warn);  
  return (req, res, next) => {
    next();
  }
};