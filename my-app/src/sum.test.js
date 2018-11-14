//const sum = require('./sum');
import jpul from './sum';

test('adds 1 + 2 to equal 3', () => {
    console.log(jpul);
    expect(jpul.sum(1, 2)).toBe(3);
    expect(jpul.add(1, 2)).toBe(4);
});