const addToBatch = (array, number) => {
  if (array.length <= 5 ) {
    return array.concat(number);
  } else {
    return array;
  }
}

module.exports = addToBatch;

// console.log(addToBatch([1], 3));
// console.log(addToBatch([1, 2, 3], 4));
// console.log(addToBatch([], 8));
// console.log(addToBatch([1, 2, 3, 4, 5, 6], 7));
// console.log(addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));