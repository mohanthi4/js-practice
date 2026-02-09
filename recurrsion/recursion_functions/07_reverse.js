function reverse(string) {
  if (string === "") {
    return "";
  }

  return reverse(restString(string)) + firstString(string);
}

function firstString(string) {
  let firstCharacter = string[0];
  return firstCharacter;
}

function restString(string) {
  let rest = "";

  for (let index = 1; index < string.length; index++) {
    rest = rest + string[index];
  }

  return rest;
}

function resultSymbol(expected, actual) {
  return expected === actual ? "👍" : "👎🏻";
}

function actualFragment(string) {
  return " " + string;
}

function outputFragment(expected, actual) {
  return " expected : " + expected + " actual : " + actual;
}

function testReverse(string, expected) {
  const actual = reverse(string);
  const message = resultSymbol(expected, actual) + actualFragment(string);
  const finalMessage = message + outputFragment(expected, actual);

  console.log(finalMessage);
}

function allTestCases() {
  testReverse("abc", "cba");
  testReverse("", "");
  testReverse("a", "a");
  testReverse("hello world2", "2dlrow olleh");
}

allTestCases();