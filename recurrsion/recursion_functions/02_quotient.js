function quotient(dividend, divisor) {
  let count = 0;

  if (dividend < divisor) return 0;

  if (divisor === 0) return undefined;

  if (dividend > 0) {
    count = 1;
  }

  return count + quotient(dividend - divisor, divisor);
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

function testQuotient(dividend, divisor, expected) {
  const actual = quotient(dividend, divisor);
  const message = resultSymbol(expected, actual) + actualFragment(dividend, divisor);
  const finalMessage = message + outputFragment(expected, actual);

  console.log(finalMessage);
}

function allTestCases() {
  testQuotient(4, 2, 2);
  testQuotient(2, 4, 0);
  testQuotient(5, 2, 2);
  testQuotient(11, 2, 5);
  testQuotient(0, 0, undefined);
  testQuotient(5, 0, undefined);
  testQuotient(0, 5, 0);
  testQuotient(1, 5, 0);
  testQuotient(5, 5, 1);
  testQuotient(5, 1, 5);
}

allTestCases();