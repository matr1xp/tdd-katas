const FizzBuzz = require('./fizzbuzz');

const fizz = 'Fizz';
const buzz = 'Buzz';

test('Test fizz or buzz', () => {
  const f = new FizzBuzz();  
  expect(f.getFizzOrBuzz(3)).toBe(fizz);
  expect(f.getFizzOrBuzz(5)).toBe(buzz);
});

test('Simulate 100 rounds and show output', () => {
  const f = new FizzBuzz();
  let output = f.simulate(100);
  expect(output).toMatch(/\bFizz\b|\bBuzz\b/);
  console.log(output);
});