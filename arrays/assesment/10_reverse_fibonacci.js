// Write a function that gives first n elements of fibonacci in reverse order
// fibonacci(5) => [3, 2, 1, 1, 0]
// do not modify input parameters
function reverseFibonacci(n) {
  let arrayOfFibonacci = [];
  let term1 = 0;
  let term2 = 1;

  for (let index = 1; index <= n; index++) {
    arrayOfFibonacci.push(term1);
    const term3 = term1 + term2;
    term1 = term2;
    term2 = term3;
  }

  return reverse(arrayOfFibonacci);
}

function reverse(array) {
  const arraySize = array.length;
  const reverseArray = [];
  reversedElements(array, arraySize - 1, reverseArray, 0)
  return reverseArray;
}

function reversedElements(array, index, reverseArray, subIndex) {
  if (index < 0) {
    return reverseArray;
  }

  reverseArray[subIndex] = array[index];
  return reversedElements(array, index - 1, reverseArray, subIndex + 1);
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

function testReverseFibonacci(gist, n, expected) {
  const actual = reverseFibonacci(n);
  const result = isEqual(expected, actual, 0);
  const message = resultMessage(gist, n, expected, actual, result);

  console.log(message);
}

function allTestCases() {
  testReverseFibonacci("1 fibonacci numbers", 1, [0]);
  testReverseFibonacci("2 fibonacci numbers", 2, [1, 0]);
  testReverseFibonacci("5 fibonacci numbers", 5, [3, 2, 1, 1, 0]);
}

allTestCases();