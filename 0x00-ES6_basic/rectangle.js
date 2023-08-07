import assert from 'assert';
Symbol('foo');
Symbol('foo');

assert.equal(Symbol.for('foo'), Symbol.for('foo'));
