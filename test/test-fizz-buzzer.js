const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');
const fizzBuzzTestText = `should return "fizz" if the numerator is equally divisible by 3,
                           return "buzz" if equally divisible by 5, return fizz-buzz if equally
                           divisible by 15, otherwise return a number`;

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it(fizzBuzzTestText, function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 3, expected: 'fizz'},
      {a: 5, expected: 'buzz'},
      {a: 15, expected: 'fizz-buzz'},
      {a: 22, expected: 22}
    ];
    // for each set of inputs (a), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs are not numbers
    const badInputs = ['a',  '!', undefined,];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});