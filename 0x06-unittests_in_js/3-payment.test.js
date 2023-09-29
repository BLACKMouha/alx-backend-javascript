/* jshint esversion: 8 */
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let calculNumberSpy;
  let consoleSpy;

  beforeEach(() => {
    calculNumberSpy = sinon.spy(Utils, 'calculNumber');
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculNumberSpy.restore();
    consoleSpy.restore();
  });

  it("should inspect calling sendPaymentRequestToApi is the same as Utils.calculNumber('SUM', totalAmount, totalShipping')", function () {
    sendPaymentRequestToApi(100, 20);
    expect(calculNumberSpy.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(calculNumberSpy('SUM', 100, 20)).to.equal(120);
  });

  it('logs to the console the right result of a call sendPaymentRequstToApi', function () {
    expect(consoleSpy.calledOnceWith('The total is: 120'));
  });

  it('should fail tests sendPaymentRequestToApi not using Utils.calculateNumber', function () {
    const sendPaymentRequestToApiSpy = sinon.spy(
      function sendPaymentRequestToAPI(totalAmount, totalShipping) {
        const total = Math.round(totalAmount) + Math.round(totalShipping);
        console.log(`The total is: ${total}`);
      }
    );
    sendPaymentRequestToApiSpy(120, 30);
    expect(calculNumberSpy.called).to.be.false;
  });
});
