class ShoppingBasket {
  constructor () {
    this.basket = [];
    this.totalPrice = 0;
    this.discount = 0;
  }

  addItem(item){
    this.basket.push(item);
  }

  applyDiscount(discount){
    this.discount += discount;
  }

  getTotalPrice() {
    this.basket.forEach((item) => {
      this.totalPrice += item.getPrice();
    });
    return this.totalPrice - this.discount;
  }

  getItemName() {
    let itemList = [];

    this.basket.forEach((item) => {
      itemList.push(item.getName());
    });
    return itemList;
  }

}

module.exports = ShoppingBasket;