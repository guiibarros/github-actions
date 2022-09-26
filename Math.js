class Math {
  static add(...numbers) {
    return numbers.reduce((total, current) => total + current, 0);
  }

  static subtract(...numbers) {
    return numbers.reduce((prev, current) => prev - current);
  }

  static multiply(...numbers) {
    return numbers.reduce((total, current) => total * current, 1);
  }

  static divide(...numbers) {
    return numbers.reduce((prev, current) => prev / current);
  }
}

module.exports = Math;