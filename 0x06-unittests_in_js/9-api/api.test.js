/* jshint esversion: 8 */
const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('testing the payment system API', function () {
  const reqOptions = { url: 'http://localhost:7865/', method: 'GET' };

  it('should have a successful status code when the homepage is reached', function (done) {
    request(reqOptions, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should have a body message ("Welcome to the payment system") when the homepage is reached', function (done) {
    request(reqOptions, function (err, res, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('testing cart route of the payment system API', function () {
  it('should have a failure status code when the cart is reached without id', function (done) {
    request.get('http://localhost:7865/cart/', function (err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });


  it('should have a failure status code when the cart is reached with an id not of type number', function (done) {
    request.get('http://localhost:7865/cart/nope', function (err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should have a body message ("Payment methods for cart: id") when the cart route is reached with an id of type number', function (done) {
    request.get('http://localhost:7865/cart/7', function (err, res, body) {
      console.log(body);
      expect(body).to.equal('Payment methods for cart 7');
      done();
    });
  });
});
