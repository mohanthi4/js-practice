function nthFibonacciTerm(termPosition) {
  const firstTerm = 0;
  const secondTerm = 1;

  if (termPosition === 1) {
    return firstTerm;
  }

  if (termPosition === 2) {
    return secondTerm;
  }

  return nthFibonacciTerm(termPosition - 1) + nthFibonacciTerm(termPosition - 2);
}

function resultSymbol(expected, actual) {
  return expected === actual ? "✅" : "❌";
}

function actualFragment(termPosition) {
  return " '" + termPosition;
}

function outputFragment(expected, actual) {
  return "' expected : " + expected + " actual : " + actual;
}

function testNthFibonacciTerm(termPosition, expected) {
  const actual = nthFibonacciTerm(termPosition);
  const message = resultSymbol(expected, actual) + actualFragment(termPosition);
  const finalMessage = message + outputFragment(expected, actual);

  console.log(finalMessage);
}

function allTestCases() {
  testNthFibonacciTerm(1, 0);
  testNthFibonacciTerm(2, 1);
  testNthFibonacciTerm(3, 1);
  testNthFibonacciTerm(5, 3);
  testNthFibonacciTerm(7, 8);
  testNthFibonacciTerm(8, 13);
}

allTestCases();