// Given an array of numbers and a element, return the first index in the array
// where element is present else -1
// findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea") => 2
// do not modify input parameters
function findIndex(array, element) {
  let index = 0;
  index = isIndexFind(array, element, 0, index);
  return index;
}

function isIndexFind(array, element, index, count) {
  if (index > array.length) {
    return -1;
  }

  if (array[index] === element) {
    return index;
  }

  return isIndexFind(array, element, index + 1, count);
}

function resultMessage(gist, array, element, expected, actual) {
  const symbol = expected === actual ? "✅" : "❌";

  if (symbol === "❌") {
    const values = outputFragment(array, element, expected, actual);
    return symbol + gist + values;
  }

  return symbol + gist;
}

function outputFragment(array, element, expected, actual) {
  return `${array} ${element} expected :${expected} actual :${actual}`;
}

function testFindIndex(gist, array, element, expected) {
  const actual = findIndex(array, element);
  const message = resultMessage(gist, array, element, expected, actual);

  console.log(message);
}

function allTestCases() {
  testFindIndex("string present in array", ["apple", "cake", "tea", "coffee", "tea"], "tea", 2);
  testFindIndex("no matches", ["apple", "cake", "tea", "coffee", "tea"], "milk", -1);
  testFindIndex("one match", ["apple", "cake", "tea", "coffee", "tea"], "coffee", 3);
}

allTestCases();
