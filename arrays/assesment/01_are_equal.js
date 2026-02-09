function areEqual(array1, array2) {
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

function testAreEqual(gist, array1, array2, expected) {
  const actual = areEqual(array1, array2);
  const message = resultMessage(gist, array1, array2, expected, actual);

  console.log(message);
}

function allTestCases() {
  testAreEqual("all four elements are equal", [1, 2, 3, 4], [1, 2, 3, 4], true);
  testAreEqual("one extra element", [1, 2, 3], [1, 2, 3, 4], false);
  testAreEqual("one reverse element", [1, 2, 3], [1, 3, 2], false);
}

allTestCases();