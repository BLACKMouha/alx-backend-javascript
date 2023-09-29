/* jshint esversion: 8 */
// test for 1-calcul
const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculNumber 2-calculs.chai.js', function () {
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
