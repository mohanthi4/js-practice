function filterBelow(array, threshold) {
  const numbersBelowThreshold = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] < threshold) {
      numbersBelowThreshold.push(array[index]);
    }
  }

  return numbersBelowThreshold;
}

function outputFragment(array, threshold, expected, actual) {
  const input = " '" + array + " '" + threshold;
  const output = "' expected : " + expected + " actual : " + actual;
  return input + output;
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

function resultMessage(gist, array, threshold, expected, actual) {
  const symbol = isEqual(expected, actual) ? "✅" : "❌";

  if (symbol === "❌") {
    const values = outputFragment(array, threshold, expected, actual);
    return symbol + gist + values;
  }

  return symbol + gist;
}

function testFilterBelow(gist, array, threshold, expected) {
  const actual = filterBelow(array, threshold);
  const message = resultMessage(gist, array, threshold, expected, actual);

  console.log(message);
}

function allTestCases() {
  testFilterBelow("numbers below 3 ", [6, 2, 3, 1, 4, 7], 3, [2, 1]);
  testFilterBelow("no below numbers", [1, 2, 3], 0, []);
}

allTestCases();