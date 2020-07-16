class FizzBuzz {
  constructor() {
    this.fizz = 'Fizz';
    this.buzz = 'Buzz';
  }
  simulate(rounds) {
    let output = '';
    for (let i=1; i <= rounds; i++) {
      output += `${this.getFizzOrBuzz(i)}\n`;
    }
    return output;
  }
  getFizzOrBuzz(n) {
    if (n % 3 == 0) {
      return this.fizz;
    } else if (n % 5 == 0) {
      return this.buzz;
    }
    return n;
  }
}
module.exports = FizzBuzz;