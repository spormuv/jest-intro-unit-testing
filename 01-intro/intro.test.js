const { sum, nativeNull } = require('./intro');

describe('sum function:', () => {
  test('sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 2)).toEqual(3);
  });

  test('comparing to other', () => {
    expect(sum(2, 3)).toBeGreaterThan(4);
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
    expect(sum(2, 3)).toBeLessThan(6);
    expect(sum(2, 3)).toBeLessThanOrEqual(5);
  });

  test('correct float values', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe('nativeNull function:', () => {
  test('returns null', () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
  });
});
