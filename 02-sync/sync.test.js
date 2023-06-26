const Lodash = require('./sync');
let _ = new Lodash();

describe('Lodash: compact', () => {
  let array = [false, 42, 0, '', true, null, 'hello'];

  beforeEach(() => {
    array = [false, 42, 0, '', true, null, 'hello'];
  });

  afterAll(() => {
    _ = new Lodash();
  });

  test('should be defined', () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test('should be editable', () => {
    array.push(...['one', 'two']);
    expect(array).toContain('one');
    expect(array).toContain('two');
  });

  test('should remove falsy values', () => {
    const result = [42, true, 'hello'];
    expect(_.compact(array)).toEqual(result);
  });

  test('should not content falsy', () => {
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain(0);
    expect(_.compact(array)).not.toContain('');
    expect(_.compact(array)).not.toContain(null);
  });
});

describe('Lodash: groupBy', () => {
  test('should be defined', () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });

  test('group items by math.floor', () => {
    const array = [2.2, 2.4, 4.2, 3.1];
    const result = {
      2: [2.2, 2.4],
      3: [3.1],
      4: [4.2],
    };
    expect(_.groupBy(array, Math.floor)).toEqual(result);
  });

  test('group items by length', () => {
    const array = ['one', 'two', 'three'];
    const result = {
      3: ['one', 'two'],
      5: ['three'],
    };
    expect(_.groupBy(array, 'length')).toEqual(result);
  });

  test('should not return array', () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
  });
});
