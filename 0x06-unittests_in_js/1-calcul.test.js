/* jshint esversion: 8 */
// test for 1-calcul
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculNumber 1-calculs.js', function () {
  describe('calculNumber of type SUM', function () {
    it('should return the sum of two rounded numbers', function () {
      // I-/ Testing addition
      // Using only Numbers
      assert.equal(calculateNumber('SUM', 1, 3,), 4);
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
      assert.equal(calculateNumber('SUM', 0.0, 0.4), 0);
      assert.equal(calculateNumber('SUM', 0.0, 0.5), 1);
      assert.equal(calculateNumber('SUM', 0.4, 0.5), 1);

      // Using 'stringified' Numbers
      assert.equal(calculateNumber('SUM', '1', '3'), 4);
      assert.equal(calculateNumber('SUM', '1', 3.7), 5);
      assert.equal(calculateNumber('SUM', 1.2, '3.7'), 5);
      assert.equal(calculateNumber('SUM', '1.5', '3.7'), 6);
    });
  });

  describe('calculNumber of type SUBTRACT', function () {
    it('should return the substraction of two rounded numbers', function () {
      // II-/ Testing addition
      // Using only Numbers
      assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
      assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
      assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
      assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
      assert.equal(calculateNumber('SUBTRACT', 0.0, 0.4), 0);
      assert.equal(calculateNumber('SUBTRACT', 0.0, 0.5), -1);
      assert.equal(calculateNumber('SUBTRACT', 0.4, 0.5), -1);

      // Using 'stringified' Numbers
      assert.equal(calculateNumber('SUBTRACT', '1', '3'), -2);
      assert.equal(calculateNumber('SUBTRACT', '1', 3.7), -3);
      assert.equal(calculateNumber('SUBTRACT', 1.2, '3.7'), -3);
      assert.equal(calculateNumber('SUBTRACT', '1.5', '3.7'), -2);
    });
  });

  describe('calculNumber of type DIVIDE', function () {
    it('should return the division of two rounded numbers', function () {
      // III-/ Testing addition
      // Using only Numbers
      assert.equal(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
      assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
      assert.equal(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      assert.equal(calculateNumber('DIVIDE', 0.0, 0.5), 0);
      assert.equal(calculateNumber('DIVIDE', 0.4, 0.5), 0);

      // Using 'stringified' Number'DIVIDE', s
      assert.equal(calculateNumber('DIVIDE', '1', '3'), 0.3333333333333333);
      assert.equal(calculateNumber('DIVIDE', '1', 3.7), 0.25);
      assert.equal(calculateNumber('DIVIDE', 1.2, '3.7'), 0.25);
      assert.equal(calculateNumber('DIVIDE', '1.5', '3.7'), 0.5);
    });

    it('should return "Error" if the divider is 0', function () {
      assert.equal(calculateNumber('DIVIDE', 0.0, 0.4), 'Error');
    });
  });
});
