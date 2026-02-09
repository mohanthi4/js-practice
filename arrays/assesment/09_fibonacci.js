// Write a function that gives first n elements of fibonacci in an array
// fibonacci(5) => [0, 1, 1, 2, 3]
// do not modify input parameters
function fibonacci(n) {
  let arrayOfFibonacci = [];
  let term1 = 0;
  let term2 = 1;

  for (let index = 1; index <= n; index++) {
    arrayOfFibonacci.push(term1);
    const term3 = term1 + term2;
    term1 = term2;
    term2 = term3;
  }

  return arrayOfFibonacci;
}

function resultMessage(gist, n, expected, actual, result) {
  const symbol = result ? "✅" : "❌";

  if (symbol === "❌") {
    const values = outputFragment(n, expected, actual);
    return symbol + gist + values;
  }

  return symbol + gist;
}

function isEqual(expected, actual, index) {
  if (expected.length !== actual.length) {
    return false;
  }

  if (index === expected.length) {
    return true;
  }

  return expected[index] === actual[index] ? isEqual(expected, actual, index + 1) : false;
}

function outputFragment(n, expected, actual) {
  return " '" + n + "' expected : " + expected + " actual : " + actual;
}

function testFibonacci(gist, n, expected) {
  const actual = fibonacci(n);
  const result = isEqual(expected, actual, 0);
  const message = resultMessage(gist, n, expected, actual, result);

  console.log(message);
}

function allTestCases() {
  testFibonacci("1 fibonacci numbers", 1, [0]);
  testFibonacci("2 fibonacci numbers", 2, [0, 1]);
  testFibonacci("5 fibonacci numbers", 5, [0, 1, 1, 2, 3]);
}

allTestCases();