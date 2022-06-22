const numbers = [1,2,3,4,5];

numbers.forEach ((number) => {
  console.log(number);
});

const items = ['apple', 'pear', 'strawberry'];

console.log(`Length of the items array: ${items.length}`);
console.log(`The second character is: ${items[1]}`);
new_items = items.concat('raspberry');
console.log(new_items);

var new_numbers = [1,2,3,4,5,6,7,8,9,10];
var sum = 0;
new_numbers.forEach ((num) => {
  sum += num;
});
console.log(sum);