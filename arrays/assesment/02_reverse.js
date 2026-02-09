function reverse(array) {
  const reverseArray = [];

  for (let index = array.length - 1; index >= 0; index--) {
    reverseArray.push(array[index]);
  }

  return reverseArray;
}

function isEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function outputFragment(array, expected, actual) {
  return `${array} expected :${expected} actual :${actual}`;
}

function resultMessage(gist, array, expected, actual) {
  const symbol = isEqual(expected, actual) ? "✅" : "❌";

  if (symbol === "❌") {
    const values = outputFragment(array, expected, actual);
    return symbol + gist + values;
  }

  return symbol + gist;
}


function testReverse(gist, array, expected) {
  const actual = reverse(array);
  const message = resultMessage(gist, array, expected, actual);

  console.log(message);
}

function allTestCases() {
  testReverse("reverse of given string", [1, 2, 3], [3, 2, 1]);
  testReverse("empty string", [], []);
}

allTestCases();