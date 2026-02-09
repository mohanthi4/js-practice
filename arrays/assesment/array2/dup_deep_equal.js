function isArray(x) {
  return typeof x === 'object';
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}

function areDeepEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }

  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }

  return array1 === array2;
}

function outputFragment(array1, array2, expected, actual) {
  return `${array1} ${array2} expected :${expected} actual :${actual}`;
}

function resultMessage(gist, array1, array2, expected, actual) {
  const symbol = expected === actual ? "✅" : "❌";

  if (symbol === "❌") {
    const values = outputFragment(array1, array2, expected, actual);
    return symbol + gist + values;
  }

  return symbol + gist;
}

function testAreDeepEqual(gist, array1, array2, expected) {
  const actual = areDeepEqual(array1, array2);
  const message = resultMessage(gist, array1, array2, expected, actual);

  console.log(message);
}

function allTestCases() {
  testAreDeepEqual("all three elements are equal", [1, 2, 3], [1, 2, 3], true);
  testAreDeepEqual("one nested but same", [1, [2, 3]], [1, [2, 3]], true);
  testAreDeepEqual("one nested but different", [1, [2, 3]], [1, [3, 2]], false);
  testAreDeepEqual("all three elements are equal", [1, 2, 3], [1, 2, 3], true);
  testAreDeepEqual("all three elements are equal", [1, 2, 3], [1, 2, 3], true);

}

allTestCases();