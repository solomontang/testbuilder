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
  if (cardNumber.length === 14 && getPrefix(cardNumber) === 38 || getPrefix(cardNumber) === 39) {
    return 'Diner\'s Club';
  } else if (cardNumber.length === 15 && getPrefix(cardNumber) === 34 || getPrefix(cardNumber) === 37) {
    return 'American Express';
  }
  return 'Invalid Number';
};

var getPrefix = function(cardNumber) {
  return Number(cardNumber.split('').slice(0,2).join(''));
};

function assertEquals(actual, expected, testName) {
  if(actual === expected) {
    console.log('PASSED [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + ']: Expected ' + expected + ', but got ' + actual);
  }
}

function testDetectNetwork() {
  assertEquals(getPrefix('12345678901234'), 12, 'should return cc prefix');
  assertEquals(detectNetwork('38345678901234'),'Diner\'s Club', 'should detect Diner\'s Club');
  assertEquals(detectNetwork('39345678901234'),'Diner\'s Club', 'should detect Diner\'s Club');
  assertEquals(detectNetwork('343456789012345'),'American Express', 'should detect American Express');
  assertEquals(detectNetwork('373456789012345'),'American Express', 'should detect American Express');
}
//testDetectNetwork();