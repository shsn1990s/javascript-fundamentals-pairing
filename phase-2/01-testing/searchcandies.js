const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

const searchCandies = (string, price) => {
  return candies
  .filter((candy) => {
    return candy.name.toLocaleLowerCase().startsWith(string.toLowerCase());
  })
  .map((candy) => {
    if (candy.price < price) {return candy.name};
  });
}


module.exports = searchCandies;


// const searchCandies = (string, price) => {
//   return candies.filter((candy) => {
//     return candy.name.toLocaleLowerCase().startsWith(string.toLowerCase());
//   }).map((candy) => {
//     if (candy.price < price) {return candy.name};
//   });
// }

// Previous Code:
// (Without Chaining)
// const searchCandies = (string, price) => {
//   prefix_search = searchPrefix(string.toLowerCase());
//   return priceSearch(prefix_search, price);
// }

// const searchPrefix = (string) => {
//   return candies.filter((candy) => {
//     return candy.name.toLowerCase().startsWith(string);
//   });
// }

// const priceSearch = (array, price) => {
//   return array.map((candy) => {
//     if (candy.price < price) {
//       return candy.name;
//     }
//   });
// }