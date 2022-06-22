const Candy = require("./candy");

describe('Candy', () => {
  it('returns the name of the item using getName method', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toEqual('Mars');
  });
  it('returns the price using the getPrice method', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getPrice()).toEqual(4.99);
  });
});