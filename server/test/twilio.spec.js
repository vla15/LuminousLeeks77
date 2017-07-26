const expect = require('chai').expect;
const middleware = require('../middleware');

describe('Twilio', () => {
  let fakeNumber = '+14153219121';
  let wrongFormat = '4153219121';

  describe('Twilio lookup client', () => {
    xit('returns a phone number with a country code', (done) => {
      middleware.twilioClient.phoneLookup(wrongFormat)
        .then((data) => {
          expect(data).to.equal(fakeNumber);
          done();
        });
    });
  });
});
// tests twilio, turned off to save # of texts we get
//   describe('Twilio will text', () => {
//     it('inputted number is a valid number', (done) => {
//       middleware.twilioClient.phoneLookUp('(415)3219121')
//         .then(number => {
//           middleware.twilioClient.sendSms(number, 'hello world')
//             .then(() => {
//               done();
//             })
//         })
//     })
//   })
// })