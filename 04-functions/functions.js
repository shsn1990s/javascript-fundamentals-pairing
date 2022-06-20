const uppercaseMessage = (message) => {
  return message.toUpperCase();
}

const transform = (message, transformFunction) => {
  return transformFunction(message);
}

const lowercaseMessage = (message) => {
  return message.toLowerCase();
}
// console.log(transform("hello", uppercaseMessage))



module.exports = {
  uppercaseMessage,
  transform,
  lowercaseMessage,
}
