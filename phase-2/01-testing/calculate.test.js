const Calculate = require('./calculate');
const calculate = new Calculate();

describe ('add', () => {
  
  it('adds 2 and 2', () => {
    expect(calculate.add(2, 2)).toBe(4);
  });

  it('adds 0 and 5', () => {
    expect(calculate.add(0, 5)).toBe(5);
  });
});

describe ('multiply', () => {
  it('multiplies 2 by 2', () => {
    expect(calculate.multiply(2, 2)).toBe(4);
  });

  it('multiplies 10 by 10', () => {
    expect(calculate.multiply(10, 10)).toBe(100);
  });
});