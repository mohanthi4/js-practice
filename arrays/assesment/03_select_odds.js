function selectOdds(numbers) {
  const oddArray = [];

  for (let index = 0; index < numbers.length; index++) {
    if (isOdd(numbers[index])) {
      oddArray.push(numbers[index]);
    }
  }

  return oddArray;
}

function isOdd(number) {
  return number % 2 !== 0;
}

function outputFragment(numbers, expected, actual) {
  return `${numbers} expected :${expected} actual :${actual}`;
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

function resultMessage(gist, numbers, expected, actual) {
  const symbol = isEqual(expected, actual) ? "✅" : "❌";

  if (symbol === "❌") {
    const values = outputFragment(numbers, expected, actual);
    return symbol + gist + values;
  }

  return symbol + gist;
}

function testSelectOdds(gist, numbers, expected) {
  const actual = selectOdds(numbers);
  const message = resultMessage(gist, numbers, expected, actual);

  console.log(message);
}

function allTestCases() {
  testSelectOdds("return one odd number", [4, 2, 3], [3]);
  testSelectOdds("return three odd number", [3, 2, 4, 5, 7], [3, 5, 7]);
  testSelectOdds("no odd numbers", [2, 4, 6], []);
}

allTestCases();