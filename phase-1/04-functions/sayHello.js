sayHello = (name) => {
  return `Hello ${name}`;
}

module.exports = sayHello;

// Debugging question
// Your colleague is trying to call the function sayHello and print its result using console.log — however, it doesn't work as expected: why? Make the fix so it prints the return value of the function, as expected.

// console.log(sayHello);

// Answer:
// console.log(sayHello());