const Candy = require('./candy');
const ShoppingBasket = require('./shoppingbasket');

jest.mock('./candy');

describe('ShoppingBasket', () => {
  it('adds mock item and returns its price', () => {
    const mockCandy = new Candy();

    mockCandy.getPrice.mockImplementation(() => 4.99);

    const shoppingBasket = new ShoppingBasket();

    shoppingBasket.addItem(mockCandy);

    expect(shoppingBasket.getTotalPrice()).toEqual(4.99);
    expect(mockCandy.getPrice).toHaveBeenCalledTimes(1);
  });
  it('adds multiple item and returns total price', () => {
    const shoppingBasket = new ShoppingBasket();
    const mockCandy1 = new Candy();
    const mockCandy2 = new Candy();

    mockCandy1.getPrice.mockImplementation(() => 3.99);
    mockCandy2.getPrice.mockImplementation(() => 4.99);

    shoppingBasket.addItem(mockCandy1);
    shoppingBasket.addItem(mockCandy2);

    expect(shoppingBasket.getTotalPrice()).toEqual(8.98);
    expect(mockCandy1.getPrice).toHaveBeenCalledTimes(1);
    expect(mockCandy2.getPrice).toHaveBeenCalledTimes(1);
  });
  it('gets the names of the items in the shopping basket using mock class', () => {
    const mockCandy1 = new Candy();
    const mockCandy2 = new Candy();

    mockCandy1.getName.mockImplementation(() => 'Skittle');
    mockCandy2.getName.mockImplementation(() => 'Mars');

    const shoppingBasket = new ShoppingBasket();

    shoppingBasket.addItem(mockCandy1);
    shoppingBasket.addItem(mockCandy2);

    expect(shoppingBasket.getItemName()).toEqual(['Skittle', 'Mars']);

    expect(mockCandy1.getName).toHaveBeenCalledTimes(1);
    expect(mockCandy2.getName).toHaveBeenCalledTimes(1);
  });
});