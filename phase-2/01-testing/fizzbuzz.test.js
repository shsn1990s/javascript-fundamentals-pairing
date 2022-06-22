fizzbuzz = require('./fizzbuzz');

describe ('fizzbuzz',  () => {
  it('returns Fizz for value 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });
  it('returns Buzz for value 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  });
  it('returns 8 if value 8 is submitted', () => {
    expect(fizzbuzz(8)).toBe(8);
  });
  it('returns FizzBuzz for value 15', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });
  it('returns Fizz for value 18', () => {
    expect(fizzbuzz(18)).toBe('Fizz')
  });
  it('returns Buzz for value 20', () => {
    expect(fizzbuzz(20)).toBe('Buzz');
  });
});