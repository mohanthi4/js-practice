function repeat(string, n) {
  if (n <= 0) {
    return "";
  }
  if (n === 1) {
    return string;
  }
  return string + repeat(string, n - 1);
}

function resultSymbol(expected, actual) {
  return expected === actual ? "✅" : "❌";
}

function actualFragment(string, n) {
  return " '" + string + "' , '" + n;
}

function outputFragment(expected, actual) {
  return "' expected : " + expected + " actual : " + actual;
}

function testRepeat(string, n, expected) {
  const actual = repeat(string, n);
  const message = resultSymbol(expected, actual) + actualFragment(string, n);
  const finalMessage = message + outputFragment(expected, actual);

  console.log(finalMessage);
}

function allTestCases() {
  testRepeat("hi", 3, "hihihi");
  testRepeat("hello world", 4, "hello worldhello worldhello worldhello world");
  testRepeat("", 3, "");
  testRepeat(" ", 5, "     ");
  testRepeat("hi", 0, "");
  testRepeat("welcome", -3, "");
}

allTestCases();