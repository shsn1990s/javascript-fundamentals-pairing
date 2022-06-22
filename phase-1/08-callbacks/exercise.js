// Declare a function printHello which prints a greeting message.
// Use setTimeout to execute this function after a 3 seconds delay.

const printHello = () => {
  console.log("Hello!");
}

executeAfterDelay = (time, message) => {
  setTimeout(message, time);
}


setTimeout(printHello, 3000);

executeAfterDelay(5, printHello);