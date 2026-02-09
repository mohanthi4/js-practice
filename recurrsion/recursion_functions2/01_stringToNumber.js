function stringToNumber(string) {
  const stringSize = string.length;
  let index = 0;
  let finalNumber = 0;

  if (index === 0 && string[index] === "-") {
    const output = oneChar(string, index + 1, stringSize, finalNumber);
    return ("-" + output) * 1;
  }

  const output = oneChar(string, index, stringSize, finalNumber);
  return output;
}

function oneChar(string, index, stringSize, finalNumber) {
  let singleDigit = finalNumber;

  if (index < stringSize) {
    singleDigit = (singleDigit * 10) + (1 * string[index]);
    return oneChar(string, index + 1, stringSize, singleDigit);
  }

  return singleDigit;
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

function testStringToNumber(gist, string, expected) {
  const actual = stringToNumber(string);
  const message = resultMessage(gist, string, expected, actual);

  console.log(message);
}

function allTestCases() {
  testStringToNumber("String contains zero", "0", 0);
  testStringToNumber("Single finalNumber one", "1", 1);
  testStringToNumber("String consists of two numbers", "12", 12);
  testStringToNumber("Multilpe numbers", "1234456", 1234456);
  testStringToNumber("Negative finalNumber", "-1", -1);
}

allTestCases();