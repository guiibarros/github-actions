const { add, subtract, divide, multiply } = require('./Math');

describe('Math basics operations', () => {
  it('should be able to add numbers', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('should be able to subtract numbers', () => {
    expect(subtract(4, 2)).toBe(2);
  });

  it('should be able to divide numbers', () => {
    expect(divide(4, 2)).toBe(2);
  });

  it('should be able to multiply numbers', () => {
    expect(multiply(4, 2)).toBe(8);
  });
});