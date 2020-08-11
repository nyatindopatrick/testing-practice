const Calculator = require('../src/calculator');

const calculator = new Calculator();

it('Add', () => expect(calculator.add(2, 3)).toBe(5));

it('Subtract', () => expect(calculator.subtract(2, 3)).toBe(-1));

it('Divide', () => expect(calculator.divide(4, 2)).toBe(2));

it('Multiply', () => expect(calculator.multiply(2, 3)).toBe(6));
