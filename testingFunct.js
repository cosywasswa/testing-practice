function stringLength(string) {
  if (string.length > 0 && string.length <= 10) {
    return string.length;
  }
  throw new Error('This string characters are out of specified number');
}

function reversString(string) {
  return string.split('').reverse().join('');
}

class calculator {
    add = (a, b) => a + b;

    subtract = (a, b) => a - b;

    multiply = (a, b) => a * b;

    devide = (a, b) => {
      if (a === 0 || b === 0) {
        throw new Error('Invalid input value');
      }
      return a / b;
    }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  stringLength, reversString, calculator, capitalize,
};