function remainder(dividend, divisor) {

  if (divisor === 0) return undefined;

  if (dividend < divisor) {
    return dividend;
  }

  return remainder(dividend - divisor, divisor);
}

function resultSymbol(expected, actual) {
  return expected === actual ? "👍" : "👎🏻";
}

function actualFragment(dividend, divisor) {
  return " " + dividend + " , " + divisor;
}

function outputFragment(expected, actual) {
  return " expected : " + expected + " actual : " + actual;
}

function testRemainder(dividend, divisor, expected) {
  const actual = remainder(dividend, divisor);
  const message = resultSymbol(expected, actual) + actualFragment(dividend, divisor);
  const finalMessage = message + outputFragment(expected, actual);

  console.log(finalMessage);
}

function allTestCases() {
  testRemainder(2, 4, 2);
  testRemainder(0, 0, undefined);
  testRemainder(0, 4, 0);
  testRemainder(17, 0, undefined);
  testRemainder(4, 2, 0);
  testRemainder(5, 2, 1);
}

allTestCases();