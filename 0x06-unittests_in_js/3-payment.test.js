/* jshint esversion: 8 */
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let utilsSpy;
  let consoleSpy;

  beforeEach(() => {
    utilsSpy = sinon.spy(Utils, 'calculNumber');
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    utilsSpy.restore();
    consoleSpy.restore();
  });

  it("should inspect calling sendPaymentRequestToApi is the same as Utils.calculNumber('SUM', totalAmount, totalShipping')", function () {
    sendPaymentRequestToApi(100, 20);
    expect(utilsSpy.calledOnceWith('SUM', 100, 20));
  });

  it('logs to the console the right result of a call sendPaymentRequstToApi', function () {
    expect(consoleSpy.calledOnceWith('The total is: 120'));
  });
});
