/* jshint esversion: 8 */

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculNumber function test', function () {
  it('should return the sum of two rounded numbers', function () {
    // Using only Numbers
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
    assert.equal(calculateNumber(0.0, 0.4), 0);
    assert.equal(calculateNumber(0.0, 0.5), 1);
    assert.equal(calculateNumber(0.4, 0.5), 1);

    // Using 'stringified' Numbers
    assert.equal(calculateNumber('1', '3'), 4);
    assert.equal(calculateNumber('1', 3.7), 5);
    assert.equal(calculateNumber(1.2, '3.7'), 5);
    assert.equal(calculateNumber('1.5', '3.7'), 6);
  });
});
