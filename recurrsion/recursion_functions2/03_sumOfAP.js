function sumOfAP(start, difference, end) {
  let sum = 0;

  return apSum(start, difference, end, sum);
}

function apSum(start, difference, end, sum) {
  if (end > 0) {
    sum = start + apSum(start + difference, difference, end - 1, sum);
  }

  return sum;
}

function resultSymbol(expected, actual) {
  return expected === actual ? "✅" : "❌";
}

function actualFragment(start, difference, end) {
  return " '" + start + "' , '" + difference + "', '" + end;
}

function outputFragment(expected, actual) {
  return "' expected : " + expected + " actual : " + actual;
}

function testSumOfAP(start, difference, end, expected) {
  const actual = sumOfAP(start, difference, end);
  const symbol = resultSymbol(expected, actual);
  const message = actualFragment(start, difference, end);
  const finalMessage = symbol + message + outputFragment(expected, actual);

  console.log(finalMessage);
}

function allTestCases() {
  testSumOfAP(0, 0, 3, 0);
  testSumOfAP(1, 0, 3, 3);
  testSumOfAP(0, 1, 3, 3);
  testSumOfAP(1, 1, 3, 6);
  testSumOfAP(0, 2, 3, 6);
  testSumOfAP(1, 2, 3, 9);
}

allTestCases();