class ShoppingBasket {

  constructor () {
    this.basket = [];
  }

  addItem(item){
    this.basket.push(item);
  }

  getTotalPrice(){
    var total = 0;
    this.basket.map((item) => {
      return total += item.getPrice();
    });
    return total;
  }

}

module.exports = ShoppingBasket;

Candy = require('./candy');

const candy = new Candy('Mars', 4.99);
// console.log(candy.getName());
// console.log(candy.getPrice());

const basket = new ShoppingBasket();
basket.addItem(candy);
console.log(basket.getTotalPrice());
basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));

console.log(basket.getTotalPrice());