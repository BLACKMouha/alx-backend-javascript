/* jshint esversion: 8 */
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('calculNumber utils.js', function () {
  let calculateNumberStub;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').callsFake((type, a, b) => {
      switch (type) {
        case 'SUM':
          return Math.round(a) + Math.round(b);
        case 'SUBTRACT':
          return Math.round(a) - Math.round(b);
        case 'DIVIDE':
          if (Math.round(b) === 0) return 'Error';
          return Math.round(a) / Math.round(b);
        default:
          break;
      }
    });
  });

  afterEach(() => {
    calculateNumberStub.restore();
  });
  describe('calculNumber of type SUM', function () {
    it('should return the sum of two rounded numbers', function () {
      // I-/ Testing addition
      // Using only Numbers
      expect(Utils.calculateNumber('SUM', 1, 3,)).to.equal(4);
      expect(Utils.calculateNumber('SUM', 1, 3.7)).to.equal(5);
      expect(Utils.calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(Utils.calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      expect(Utils.calculateNumber('SUM', 0.0, 0.4)).to.equal(0);
      expect(Utils.calculateNumber('SUM', 0.0, 0.5)).to.equal(1);
      expect(Utils.calculateNumber('SUM', 0.4, 0.5)).to.equal(1);

      // Using 'stringified' Numbers
      expect(Utils.calculateNumber('SUM', '1', '3')).to.equal(4);
      expect(Utils.calculateNumber('SUM', '1', 3.7)).to.equal(5);
      expect(Utils.calculateNumber('SUM', 1.2, '3.7')).to.equal(5);
      expect(Utils.calculateNumber('SUM', '1.5', '3.7')).to.equal(6);
    });
  });

  describe('calculNumber of type SUBTRACT', function () {
    it('should return the substraction of two rounded numbers', function () {
      // II-/ Testing addition
      // Using only Numbers
      expect(Utils.calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
      expect(Utils.calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
      expect(Utils.calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
      expect(Utils.calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
      expect(Utils.calculateNumber('SUBTRACT', 0.0, 0.4)).to.equal(0);
      expect(Utils.calculateNumber('SUBTRACT', 0.0, 0.5)).to.equal(-1);
      expect(Utils.calculateNumber('SUBTRACT', 0.4, 0.5)).to.equal(-1);

      // Using 'stringified' Numbers
      expect(Utils.calculateNumber('SUBTRACT', '1', '3')).to.equal(-2);
      expect(Utils.calculateNumber('SUBTRACT', '1', 3.7)).to.equal(-3);
      expect(Utils.calculateNumber('SUBTRACT', 1.2, '3.7')).to.equal(-3);
      expect(Utils.calculateNumber('SUBTRACT', '1.5', '3.7')).to.equal(-2);
    });
  });

  describe('calculNumber of type DIVIDE', function () {
    it('should return the division of two rounded numbers', function () {
      // III-/ Testing addition
      // Using only Numbers
      expect(Utils.calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
      expect(Utils.calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
      expect(Utils.calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
      expect(Utils.calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      expect(Utils.calculateNumber('DIVIDE', 0.0, 0.5)).to.equal(0);
      expect(Utils.calculateNumber('DIVIDE', 0.4, 0.5)).to.equal(0);

      // Using 'stringified' Number'DIVIDE', s
      expect(Utils.calculateNumber('DIVIDE', '1', '3')).to.equal(0.3333333333333333);
      expect(Utils.calculateNumber('DIVIDE', '1', 3.7)).to.equal(0.25);
      expect(Utils.calculateNumber('DIVIDE', 1.2, '3.7')).to.equal(0.25);
      expect(Utils.calculateNumber('DIVIDE', '1.5', '3.7')).to.equal(0.5);
    });

    it('should return "Error" if the divider is 0', function () {
      expect(Utils.calculateNumber('DIVIDE', 0.0, 0.4)).to.equal('Error');
    });
  });
});

describe('sendPaymentRequestToApi', function () {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').callsFake((type, a, b) => {
      switch (type) {
        case 'SUM':
          return Math.round(a) + Math.round(b);
        case 'SUBTRACT':
          return Math.round(a) - Math.round(b);
        case 'DIVIDE':
          if (Math.round(b) === 0) return 'Error';
          return Math.round(a) / Math.round(b);
        default:
          break;
      }
    });
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it("should inspect calling sendPaymentRequestToApi is the same as Utils.calculateNumber('SUM', totalAmount, totalShipping')", function () {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberStub('SUM', 100, 20)).to.equal(120);
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
    expect(calculateNumberStub.called).to.be.false;
  });
});

describe('Using stub to return 10 for each call', function () {
  let calculateNumberStub;
  let logSpy;

  sendPaymentRequestToApi(100, 20);

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    logSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    logSpy.restore();
    calculateNumberStub.restore();
  });

  it('should verify if calculateNumer is called with type="SUM", a=100 and b=20', function () {
    expect(calculateNumberStub.calledWith('SUM', 100, 20));
  });
  it('should verify log message is "The total is: 10" as the stub is set to always return 10', function () {
    expect(logSpy.calledWith('The total is: 10'));
  });
});
