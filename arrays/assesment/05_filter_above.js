function filterAbove(array, threshold) {
  const numbersAboveThreshold = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] > threshold) {
      numbersAboveThreshold.push(array[index]);
    }
  }

  return numbersAboveThreshold;
}

function outputFragment(array, threshold, expected, actual) {
return `${array1} expected :${expected} actual :${actual}`;
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

function testFilterAbove(gist, array, threshold, expected) {
  const actual = filterAbove(array, threshold);
  const message = resultMessage(gist, array, threshold, expected, actual);

  console.log(message);
}

function allTestCases() {
  testFilterAbove("numbers above 3 ", [6, 2, 3, 1, 4, 7], 3, [6, 4, 7]);
  testFilterAbove("no above numbers", [1, 2, 3], 4, []);
}

allTestCases();