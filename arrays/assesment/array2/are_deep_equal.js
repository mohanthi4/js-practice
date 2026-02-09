// Given array1 and array2, returns true if both arrays are deeply equal, else false.
// Deep equality means both arrays contain the same elements in the same order,
// including any nested arrays, which must also be deeply equal.
// Examples:
// areDeepEqual([1, 2, 3], [1, 2, 3]) => true
// areDeepEqual([1, [2, 3]], [1, [2, 3]]) => true
// areDeepEqual([1, [2, 3]], [1, [3, 2]]) => false
// areDeepEqual([1, 2], [1, 2, 3]) => false
// areDeepEqual([1, [2, [3]]], [1, [2, [3]]]) => true
// areDeepEqual([1, [2, [3]]], [1, [2, 3]]) => false
// do not modify input parameters

function areDeepEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index] && array1.length !== undefined) {
      return false;
    }

    if (array1[index] !== array2[index] && array1.length === undefined) {
      return compareNestedArray(array1,array2,index);
    }

  }

  return true;
}

function compareNestedArray(array1)

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

}

allTestCases();