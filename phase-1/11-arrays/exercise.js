const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];
const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const checkLength = (phone_number) => {
  if (phone_number.length <= 10 ) {
    return true;
  } else {
    return false;
  }
}

const filterLongNumbers = (array) => {
  return array.filter(checkLength);
}

// const messageSuffix = (name) => {
//   return `Hi ${name}! 50% off our best candies for you today!`;
// }

// const generateMessages = (array) => {
//   return array.map(messageSuffix);
// }

const generateMessages = (array) => {
  return array.map = () => {
    return 'Hi ${}! 50% off our best candies for you today!';
  }
}


//console.log(filterLongNumbers(numbers));
// console.log(filterLongNumbers([numbers]));
// console.log(filterLongNumbers(['4763687363', '7867867862']));
// console.log(filterLongNumbers([]));
console.log(generateMessages(names));