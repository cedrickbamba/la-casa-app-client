// test/math.test.js
const assert = require('assert'); // Node.js built-in assertion library
const { add, subtract } = require('./math'); // Import the module to be tested

describe('Math Operations', function() {
  describe('add()', function() {
    it('should return the sum of two numbers', function() {
      assert.strictEqual(add(2, 3), 5);
      assert.strictEqual(add(-1, 1), 0);
      assert.strictEqual(add(0, 0), 0);
    });
  });

  describe('subtract()', function() {
    it('should return the difference of two numbers', function() {
      assert.strictEqual(subtract(5, 2), 3);
      assert.strictEqual(subtract(1, 1), 0);
      assert.strictEqual(subtract(0, 5), -5);
    });
  });
});