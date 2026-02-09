// Given an array of numbers and a element, return the last index in the array
// where element is present else -1
// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
// do not modify input parameters
function findLastIndex(array, element) {
  const arraySize = array.length;
  let indexFound = 0;
  indexFound = isIndexFind(array, element, arraySize,);
  return indexFound;
}

function isIndexFind(array, element, arraySize) {
  if (arraySize < 0) {
    return arraySize;
  }

  if (array[arraySize] === element) {
    return arraySize;
  }

  return isIndexFind(array, element, arraySize - 1);
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
  return " '" + array + " '" + element + "' expected : " + expected + " actual : " + actual;
}

function testFindLastIndex(gist, array, element, expected) {
  const actual = findLastIndex(array, element);
  const message = resultMessage(gist, array, element, expected, actual);

  console.log(message);
}

function allTestCases() {
  testFindLastIndex("string present in array", ["apple", "cake", "tea", "coffee", "tea"], "tea", 4);
  testFindLastIndex("not found", ["apple", "cake", "tea", "coffee", "tea"], "milk", -1);
}

allTestCases();
