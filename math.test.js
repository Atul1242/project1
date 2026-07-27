const test = require('node:test');
const assert = require('node:assert');
const { add } = require('./math.js');

test('add function adds two numbers correctly', () => {
  assert.strictEqual(add(1, 2), 3);
});