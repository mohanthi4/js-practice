function findIndex(string, char) {
  let index = 0;
  const stringSize = string.length;

  return isIndexFound(string, index, char, stringSize);
}

function isIndexFound(string, index, char, stringSize) {
  if (string[index] !== char && index < stringSize) {
    return isIndexFound(string, index + 1, char, stringSize);
  }

  return index === stringSize ? -1 : index;
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

function testFindIndex(string, char, expected) {
  const actual = findIndex(string, char);
  const message = resultSymbol(expected, actual) + actualFragment(string, char);
  const finalMessage = message + outputFragment(expected, actual);

  console.log(finalMessage);
}

function allTestCases() {
  testFindIndex("hello", "l", 2);
  testFindIndex("hello world", "r", 8);
  testFindIndex("hello", "a", -1);
  testFindIndex("", "a", -1);
  testFindIndex("hello", "", -1);
  testFindIndex("", "", -1);
}

allTestCases();