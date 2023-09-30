/* jshint esversion: 8 */
const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');


describe('Testing getPaymentTokenFromAPI', function () {
  it('should resolve with {data: "Successful response from the API"} when "true" is passed in', function (done) {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).to.deep.equal({ data: 'Successful response from the API' });
        done();
      });
  });

  it('should resolve without value when "false" is passed in', function (done) {
    getPaymentTokenFromAPI(false)
      .then((data) => {
        expect(data).to.be.undefined;
        done();
      });
  });
});
