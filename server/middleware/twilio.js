const config = require('config')['twilio'];
const client = require('twilio')(config.accountSid, config.authToken);
const LookupsClient = require('twilio').LookupsClient;
const lookupsClient = new LookupsClient(config.accountSid, config.authToken);

module.exports.sendSms = (to, message) => {
  return client.api.messages
    .create({
      body: message,
      to: to,
      from: config.number,
    }).then((data) => {
      console.log('Message Sent');
    }).catch((err) => {
      console.error('Error has occurred');
      console.error(err);
    });
};

module.exports.phoneLookUp = (phoneNumber) => {
  lookupsClient.phoneNumbers(phoneNumber).get((error, number) => {
    return number.phone_number;
  });
};