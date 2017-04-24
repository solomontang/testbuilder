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

var isDinersClub = function(cardNumber) {
  return cardNumber.length === 14
    && (getPrefix(cardNumber, 2) === 38 || getPrefix(cardNumber, 2) === 39)
      ? true : false;
}

var isMasterCard = function(cardNumber) {
  return cardNumber.length === 16
    && getPrefix(cardNumber, 2) >= 51 && getPrefix(cardNumber, 2) <= 55
      ? true : false;
}

var isVisa = function(cardNumber) {
  return getPrefix(cardNumber, 1) === 4
    && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)
      ? true : false;
}

var isAmericanExpress = function(cardNumber) {
  return cardNumber.length === 15
    && (getPrefix(cardNumber, 2) === 34 || getPrefix(cardNumber, 2) === 37)
      ? true : false;
}

var isDiscover = function(cardNumber) {
  return (cardNumber.length === 16 || cardNumber.length === 19)
    && getPrefix(cardNumber,4) === 6011
      || (getPrefix(cardNumber,3) >= 644 && getPrefix(cardNumber,3) <= 649)
      || getPrefix(cardNumber,2) === 65
        ? true : false;
}

var isMaestro = function(cardNumber) {
  return cardNumber.length >= 12 && cardNumber.length <= 19
    && (getPrefix(cardNumber, 4) === 5018
      || getPrefix(cardNumber, 4) === 5020
      || getPrefix(cardNumber, 4) === 5038
      || getPrefix(cardNumber, 4) === 6304)
        ? true : false;
}

var isChinaUnionPay = function(cardNumber) {
  return (cardNumber.length >= 16 && cardNumber.length <= 19)
    && (getPrefix(cardNumber, 6) >= 622126 && getPrefix(cardNumber, 6) <= 622925)
      || (getPrefix(cardNumber, 3) >= 624 && getPrefix(cardNumber, 3) <= 626)
      || (getPrefix(cardNumber, 4) >= 6282 && getPrefix(cardNumber, 4) <= 6288)
        ? true : false;
}

var isSwitch = function (cardNumber) {
  return (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)
    && (getPrefix(cardNumber, 4) === 4903
      || getPrefix(cardNumber, 4) === 4905
      || getPrefix(cardNumber, 4) === 4911
      || getPrefix(cardNumber, 4) === 4936
      || getPrefix(cardNumber, 6) === 564182
      || getPrefix(cardNumber, 6) === 633110
      || getPrefix(cardNumber, 4) === 6333
      || getPrefix(cardNumber, 4) === 6759)
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
