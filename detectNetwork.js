// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if (isDinersClub(cardNumber)) {
    return 'Diner\'s Club';
  } else if (isAmericanExpress(cardNumber)) {
    return 'American Express';
  } else if (isMasterCard(cardNumber)) {
    return 'MasterCard';
  } else if (isSwitch(cardNumber)) {
    return 'Switch';
  } else if (isVisa(cardNumber)){
    return 'Visa';
  } else if (isDiscover(cardNumber)) {
    return 'Discover';
  } else if (isMaestro(cardNumber)) {
    return 'Maestro';
  } else if (isChinaUnionPay(cardNumber)) {
    return 'China UnionPay';
  }

  return 'Invalid Number';
};

var getPrefix = function(cardNumber, digits) {
  return Number(cardNumber.split('').slice(0,digits).join(''));
};

var range = function (start, stop, step = 1) {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }
  let arr = [];
  for (let i = start; i <= stop; i+=step) {
    arr.push(i);
  }
  return arr;
}

var isDinersClub = function(cardNumber) {
  return cardNumber.length === 14
    && [38,39].includes(getPrefix(cardNumber, 2))
      ? true : false;
}

var isMasterCard = function(cardNumber) {
  return cardNumber.length === 16
    && range(51,55).includes(getPrefix(cardNumber, 2))
      ? true : false;
}

var isVisa = function(cardNumber) {
  return (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)
    && getPrefix(cardNumber, 1) === 4
      ? true : false;
}

var isAmericanExpress = function(cardNumber) {
  return cardNumber.length === 15
    && (getPrefix(cardNumber, 2) === 34 || getPrefix(cardNumber, 2) === 37)
      ? true : false;
}

var isDiscover = function(cardNumber) {
  const prefixArr = [6011, ...range(644,649), 65];
  const digitsArr = [16, 19];
  return (digitsArr.includes(cardNumber.length))
    && (prefixArr.includes(getPrefix(cardNumber,2)) || prefixArr.includes(getPrefix(cardNumber, 3)) || prefixArr.includes(getPrefix(cardNumber, 4)))
      ? true : false;
}

var isMaestro = function(cardNumber) {
  const prefixArr = [5018, 5020, 5038, 6304];
  const digitsArr = range(12, 19);
  return digitsArr.includes(cardNumber.length)
    && prefixArr.includes(getPrefix(cardNumber, 4))
      ? true : false;
}

var isChinaUnionPay = function(cardNumber) {
  const prefixArr = [...range(622126, 622925), ...range(624, 626), ...range(6282, 6288)]
  const digitsArr = range(16,19);
  return (digitsArr.includes(cardNumber.length))
    && (prefixArr.includes(getPrefix(cardNumber, 3)) || prefixArr.includes(getPrefix(cardNumber, 4)) || prefixArr.includes(getPrefix(cardNumber, 6)))
      ? true : false;
}

var isSwitch = function (cardNumber) {
  const prefixArr = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  const digitsArr = [16, 18, 19]
  return (digitsArr.includes(cardNumber.length))
    && (prefixArr.includes(getPrefix(cardNumber, 4)) || prefixArr.includes(getPrefix(cardNumber, 6)))
      ? true : false;
}