const config = require('config')['twilio'];
const client = require('twilio')(config.accountSid, config.authToken);


module.exports = (to, message) => {
  return client.api.messages
    .create({
      body: message,
      to: to,
      from: config.number,
    }).then((data) => {
      console.log('Administor Notified');
    }).catch((err) => {
      console.error('Could not notify administrator');
      console.error(err);
    });
};