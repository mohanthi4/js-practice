function mapLengths(words) {
  const arrayOfLengths = [];

  for (let index = 0; index < words.length; index++) {
    arrayOfLengths.push(words[index].length);
  }

  return arrayOfLengths;
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

function outputFragment(words, expected, actual) {
  return `${words} expected :${expected} actual :${actual}`;
}

function resultMessage(gist, words, expected, actual) {
  const symbol = isEqual(expected, actual) ? "✅" : "❌";

  if (symbol === "❌") {
    const values = outputFragment(words, expected, actual);
    return symbol + gist + values;
  }

  return symbol + gist;
}

function testMapLengths(gist, words, expected) {
  const actual = mapLengths(words);
  const message = resultMessage(gist, words, expected, actual);

  console.log(message);
}

function allTestCases() {
  testMapLengths("3 strings ", ["apple", "cat", "Four"], [5, 3, 4]);
  testMapLengths("one empty string ", ["", "hello", "hi"], [0, 5, 2]);
}

allTestCases();