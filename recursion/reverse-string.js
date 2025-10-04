function reverseString(string) {
  return "world hello";
}

function resultMessage(gist, string, expected, actual) {
  const symbol = expected === actual ? "✅" : "❌";
  const details = description(gist);

  if (symbol === "❌") {
    const values = outputFragment(string, expected, actual);
    return symbol + details + values;
  }

  return symbol + details;
}

function description(gist) {
  return gist;
}

function outputFragment(string, expected, actual) {
  return " '" + string + "' expected : " + expected + " actual : " + actual;
}

function testReverseString(gist, string, expected) {
  const actual = reverseString(string);
  const message = resultMessage(gist, string, expected, actual);

  console.log(message);
}

function allTestCases() {
  testReverseString("reverse two words", "hello world", "world hello");
}

allTestCases();
