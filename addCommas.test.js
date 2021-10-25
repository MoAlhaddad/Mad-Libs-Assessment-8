const { reverseString, segmentString, addCommas } = require('./addCommas');

describe('addCommas', () => {
  test('it is a function', () => {
    expect(typeof addCommas).toBe('function');
  });
  test('it returns the str version of a positive int if less than 4 chars', () => {
    expect(addCommas(6)).toEqual(expect.stringContaining('6'));
  });
  test('it returns the str version of a negative int if less than 4 chars', () => {
    expect(addCommas(-10)).toEqual(expect.stringContaining('-10'));
  });
  test('it returns the str version of a negative int if greater than 4 chars (with commas)', () => {
    expect(addCommas(-5678)).toEqual(expect.stringContaining('-5,678'));
  });
});
describe('reverseString', () => {
  test('it is a function', () => {
    expect(typeof reverseString).toBe('function');
  });
  test('it reverses a given string', () => {
    expect(reverseString('1234')).toBe('4321');
    expect(reverseString('1000000')).toBe('0000001');
    expect(reverseString('9876543210')).toBe('0123456789');
  });
});
describe('segmentString', () => {
  test('if commas found in string', () => {
    expect(typeof segmentString).toBe('function');
    expect(segmentString('1234')).toEqual(expect.stringContaining('1,234'));
    expect(segmentString('1000000')).toEqual(
      expect.stringContaining('1,000,000')
    );
    expect(segmentString('9876543210')).toEqual(
      expect.stringContaining('9,876,543,210')
    );
  });
});