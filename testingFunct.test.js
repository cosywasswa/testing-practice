/* eslint-disable */
const testFunct = require('./testingFunct.js');

describe('stringLength', () => {
  test('the number of characters is equal to 8', () => {
    expect(testFunct.stringLength('goingout')).toBe(8);
  });

  test('the number of characters not to equal to 5', () => {
    expect(testFunct.stringLength('goingout')).not.toBe(5);
  });

  test('check if the string is empty', () => {
    expect(() => { testFunct.stringLength(''); }).toThrow();
  });

  test('check if the string length is greater than 10 characters', () => {
    expect(() => { testFunct.stringLength('helloworldpeople'); }).toThrow();
  });
});
describe('reversString', () => {
  test('check if string is reversed, hello, should be olleh', () => {
    expect(testFunct.reversString('hello')).toBe('olleh');
  });
});

describe('calculator add', () => {
  const calculator = new testFunct.calculator();
  test('addition of 2 + 2 should be 4', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });
  test('addition of 4 + 2 should be 6', () => {
    expect(calculator.add(4, 2)).toBe(6);
  });
  test('addition of 2 + 1 should not be 4', () => {
    expect(calculator.add(2, 1)).not.toBe(4);
  });
});

describe('calculator subtract', () => {
  const calculator = new testFunct.calculator();
  test('subtraction of 2 - 2 should be 0', () => {
    expect(calculator.subtract(2, 2)).toBe(0);
  });
  test('subtraction of 10 - 1 should be 9', () => {
    expect(calculator.subtract(10, 1)).toBe(9);
  });
  test('subtraction of 5 - 2 should not be 4', () => {
    expect(calculator.subtract(5, 2)).not.toBe(4);
  });
});

describe('calculator multiply', () => {
  const calculator = new testFunct.calculator();
  test('multiplication of 2 and 2 should be 4', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });
  test('multiplication of 5 and 3 should be 15', () => {
    expect(calculator.multiply(5, 3)).toBe(15);
  });
  test('multiplication of 2 and 0 should be 0', () => {
    expect(calculator.multiply(2, 0)).toBe(0);
  });
});

describe('calculator devide', () => {
  const calculator = new testFunct.calculator();
  test('division of 2 and 2 should be 0', () => {
    expect(calculator.devide(2, 2)).toBe(1);
  });
  test('division of 10 and 1 should be 10', () => {
    expect(calculator.devide(10, 1)).toBe(10);
  });
  test('division of 2 and 0 should throw error', () => {
    expect(() => { calculator.devide(2, 0); }).toThrow();
  });
});

describe('capitalize', () => {
  test('the word hello should be returned as Hello', () => {
    expect(testFunct.capitalize('hello')).toBe('Hello');
  });
});