function findLastIndex(string, char) {
  const stringSize = string.length;
  let index = stringSize - 1;

  return isLastIndex(string, index, char);
}

function isLastIndex(string, index, char) {
  if (string[index] !== char && index >= 0) {
    return isLastIndex(string, index - 1, char);
  }

  return index < 0 ? -1 : index;
}

function resultSymbol(expected, actual) {
  return expected === actual ? "👍" : "👎🏻";
}

function actualFragment(string, char) {
  return " '" + string + "' , '" + char;
}

function outputFragment(expected, actual) {
  return "' expected : " + expected + " actual : " + actual;
}

function testFindLastIndex(string, char, expected) {
  const actual = findLastIndex(string, char);
  const message = resultSymbol(expected, actual) + actualFragment(string, char);
  const finalMessage = message + outputFragment(expected, actual);

  console.log(finalMessage);
}

function allTestCases() {
  testFindLastIndex("hello", "l", 3);
  testFindLastIndex("hello world", "l", 9);
  testFindLastIndex("hello", "a", -1);
  testFindLastIndex("hello", "e", 1);
  testFindLastIndex("hello", "", -1);
  testFindLastIndex("", "l", -1);
  testFindLastIndex("", "", -1);
}

allTestCases();