const ShoppingBasket = require("./shoppingbasket");
const Candy = require("./candy");


describe('ShoppingBasket', () => {
  it('calls the getTotalPrice on an empty ShoppingBasket', () => {
    //const candy = new Candy()
    const shoppingBasket = new ShoppingBasket();
    expect(shoppingBasket.getTotalPrice()).toEqual(0);
  })
  it('adds item and returns its price', () => {
    const shoppingBasket = new ShoppingBasket();
    const candy = new Candy('Mars', 4.99);

    shoppingBasket.addItem(candy);
    expect(shoppingBasket.getTotalPrice()).toEqual(4.99);
  });
  it('adds multiple item and returns total price', () => {
    const shoppingBasket = new ShoppingBasket();
    const candy1 = new Candy('Skittle', 3.99);
    const candy2 = new Candy('Skittle', 3.99);
    const candy3 = new Candy('Mars', 4.99);

    shoppingBasket.addItem(candy1);
    shoppingBasket.addItem(candy2);
    shoppingBasket.addItem(candy3);
    expect(shoppingBasket.getTotalPrice()).toEqual(12.97);
  });
  it('gets the names of the items in the shopping basket', () => {
    const candy1 = new Candy('Skittle', 3.99);
    const candy2 = new Candy('Mars', 4.99);

    const shoppingBasket = new ShoppingBasket();

    shoppingBasket.addItem(candy1);
    shoppingBasket.addItem(candy2);

    expect(shoppingBasket.getItemName()).toEqual(['Skittle', 'Mars']);
  });
  it('applies a discount on the total price', () => {
    const candy1 = new Candy('Mars', 5);
    const shoppingBasket = new ShoppingBasket();

    shoppingBasket.addItem(candy1);
    shoppingBasket.applyDiscount(0.50);

    expect(shoppingBasket.getTotalPrice()).toEqual(4.50);
  });
});