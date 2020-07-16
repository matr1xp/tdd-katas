const FizzBuzz = require('./fizzbuzz');

const fizz = 'Fizz';
const buzz = 'Buzz';
const fb = new FizzBuzz();  

test('Test fizz or buzz', () => {
  expect(fb.getFizzOrBuzz(3)).toBe(fizz);
  expect(fb.getFizzOrBuzz(5)).toBe(buzz);
});

test('Simulate 100 rounds and show output', () => {
  let output = fb.simulate(100);
  expect(output).toMatch(/\bFizz\b|\bBuzz\b/);
  console.log(output);
});