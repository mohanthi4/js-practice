// Given an array and a value, returns true if the value is present in the array, else false.
// Examples:
// includes([1, 2, 3], 2) => true
// includes([1, 2, 3], 4) => false
// includes([], 1) => false
// do not modify input parameters

function includes(array, target) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === target) {
      return true;
    }
    if (isArray(array[index] && isArray(target))) {
      
    }
  }

  return false;
}

function isEqual(array, )

function outputFragment(array, target, expected, actual) {
  return `${array} ${target} expected :${expected} actual :${actual}`;
}

function resultMessage(gist, array, target, expected, actual) {
  const symbol = expected === actual ? "✅" : "❌";

  if (symbol === "❌") {
    const values = outputFragment(array, target, expected, actual);
    return symbol + gist + values;
  }

  return symbol + gist;
}


function testIncludes(gist, array, target, expected) {
  const actual = includes(array, target);
  const message = resultMessage(gist, array, target, expected, actual);

  console.log(message);
}

function allTestCases() {
  testIncludes("normal arrary target is includes", [1, 2, 3], 2, true);
  testIncludes("normal arrary with no target", [1, 2, 3], 4, false);
  testIncludes("empty", [], 4, false);
  testIncludes("nested array", [1, 2, [3]], [3], true);
  testIncludes("nested 2 array", [[1, 2], [3]], [1,2], true);
  testIncludes("string as target", ["hello", 3], "hello", true);
  testIncludes("nested 2 array", ["hello", [3]], [1,2], false);
}

allTestCases();