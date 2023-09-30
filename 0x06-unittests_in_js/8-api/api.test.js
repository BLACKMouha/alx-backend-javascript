/* jshint esversion: 8 */
const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('testing the payment system API', function () {
  const reqOptions = { url: 'http://localhost:7865/', method: 'GET' };

  it('should have a successful status code when the homepage is reached', function (done) {
    request(reqOptions, function (err, res, body) {
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });

  it('should have a body message ("Welcome to the payment system") when the homepage is reached', function (done) {
    request(reqOptions, function (err, res, body) {
      expect(body).to.contain('Welcome to the payment system');
      done();
    });
  });
});
