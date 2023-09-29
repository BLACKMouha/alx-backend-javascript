/* jshint esversion: 8 */
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const calculateNumber = Utils.calculNumber;

describe('calculNumber utils.js', function () {
  describe('calculNumber of type SUM', function () {
    it('should return the sum of two rounded numbers', function () {
      // I-/ Testing addition
      // Using only Numbers
      expect(calculateNumber('SUM', 1, 3,)).to.equal(4);
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      expect(calculateNumber('SUM', 0.0, 0.4)).to.equal(0);
      expect(calculateNumber('SUM', 0.0, 0.5)).to.equal(1);
      expect(calculateNumber('SUM', 0.4, 0.5)).to.equal(1);

      // Using 'stringified' Numbers
      expect(calculateNumber('SUM', '1', '3')).to.equal(4);
      expect(calculateNumber('SUM', '1', 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.2, '3.7')).to.equal(5);
      expect(calculateNumber('SUM', '1.5', '3.7')).to.equal(6);
    });
  });

  describe('calculNumber of type SUBTRACT', function () {
    it('should return the substraction of two rounded numbers', function () {
      // II-/ Testing addition
      // Using only Numbers
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 0.0, 0.4)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 0.0, 0.5)).to.equal(-1);
      expect(calculateNumber('SUBTRACT', 0.4, 0.5)).to.equal(-1);

      // Using 'stringified' Numbers
      expect(calculateNumber('SUBTRACT', '1', '3')).to.equal(-2);
      expect(calculateNumber('SUBTRACT', '1', 3.7)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', 1.2, '3.7')).to.equal(-3);
      expect(calculateNumber('SUBTRACT', '1.5', '3.7')).to.equal(-2);
    });
  });

  describe('calculNumber of type DIVIDE', function () {
    it('should return the division of two rounded numbers', function () {
      // III-/ Testing addition
      // Using only Numbers
      expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
      expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      expect(calculateNumber('DIVIDE', 0.0, 0.5)).to.equal(0);
      expect(calculateNumber('DIVIDE', 0.4, 0.5)).to.equal(0);

      // Using 'stringified' Number'DIVIDE', s
      expect(calculateNumber('DIVIDE', '1', '3')).to.equal(0.3333333333333333);
      expect(calculateNumber('DIVIDE', '1', 3.7)).to.equal(0.25);
      expect(calculateNumber('DIVIDE', 1.2, '3.7')).to.equal(0.25);
      expect(calculateNumber('DIVIDE', '1.5', '3.7')).to.equal(0.5);
    });

    it('should return "Error" if the divider is 0', function () {
      expect(calculateNumber('DIVIDE', 0.0, 0.4)).to.equal('Error');
    });
  });
});


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
