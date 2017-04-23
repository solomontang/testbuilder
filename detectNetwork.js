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
  } else if (isVisa(cardNumber)){
    return 'Visa';
  }

  return 'Invalid Number';
};

var getPrefix = function(cardNumber, digits) {
  return Number(cardNumber.split('').slice(0,digits).join(''));
};

var isDinersClub = function(cardNumber) {
  return (cardNumber.length === 14 && (getPrefix(cardNumber, 2) === 38 || getPrefix(cardNumber, 2) === 39))
    ? true : false;
}

var isMasterCard = function(cardNumber) {
  return (cardNumber.length === 16 && getPrefix(cardNumber, 2) >= 51 && getPrefix(cardNumber, 2) <= 55)
    ? true : false;
}

var isVisa = function(cardNumber) {
  return (getPrefix(cardNumber, 1) === 4 && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19))
    ? true : false;
}

var isAmericanExpress = function(cardNumber) {
  return cardNumber.length === 15 && (getPrefix(cardNumber, 2) === 34 || getPrefix(cardNumber, 2) === 37)
    ? true : false;
}

function assertEquals(actual, expected, testName) {
  if(actual === expected) {
    console.log('PASSED [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + ']: Expected ' + expected + ', but got ' + actual);
  }
}

function testDetectNetwork() {
  assertEquals(getPrefix('12345678901234',2), 12, 'should return cc prefix');
  assertEquals(detectNetwork('38345678901234'),'Diner\'s Club', 'should detect Diner\'s Club');
  assertEquals(detectNetwork('39345678901234'),'Diner\'s Club', 'should detect Diner\'s Club');
  assertEquals(detectNetwork('343456789012345'),'American Express', 'should detect American Express');
  assertEquals(detectNetwork('373456789012345'),'American Express', 'should detect American Express');
}
//testDetectNetwork();
