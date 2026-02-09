function multiply(multiplier, multiplicand) {

  if (multiplicand === 1) return multiplier;

  if (multiplicand === 0) return 0;

  return multiplier + multiply(multiplier, multiplicand - 1);
}

function resultSymbol(expected, actual) {
  return expected === actual ? "👍" : "👎🏻";
}

function actualFragment(multiplier, multiplicand) {
  return " " + multiplier + " , " + multiplicand;
}

function outputFragment(expected, actual) {
  return " expected : " + expected + " actual : " + actual;
}

function testMultiply(multiplier, multiplicand, expected) {
  const actual = multiply(multiplier, multiplicand);
  const message = resultSymbol(expected, actual) + actualFragment(multiplier, multiplicand);
  const finalMessage = message + outputFragment(expected, actual);

  console.log(finalMessage);
}

function allTestCases() {
  testMultiply(4, 2, 8);
  testMultiply(15, 2, 30);
  testMultiply(0, 1, 0);
  testMultiply(1, 2, 2);
  testMultiply(0, 0, 0);
  testMultiply(1, 0, 0);
}

allTestCases();