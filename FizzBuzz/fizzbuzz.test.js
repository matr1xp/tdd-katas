const FizzBuzz = require('./fizzbuzz');

const fizz = 'Fizz';
const buzz = 'Buzz';
const fb = new FizzBuzz();  

test('Test fizz, buzz or neither', () => {
  expect(fb.getFizzOrBuzz(0)).toBe(0);
  expect(fb.getFizzOrBuzz(1)).toBe(1);
  expect(fb.getFizzOrBuzz(3)).toBe(fizz);
  expect(fb.getFizzOrBuzz(5)).toBe(buzz);
  expect(fb.getFizzOrBuzz(7)).toBe(7);
});

test('Simulate 100 rounds and show output', () => {
  let output = fb.simulate(100);
  expect(output).toMatch(/\bFizz\b|\bBuzz\b/);
  console.log(output);
});