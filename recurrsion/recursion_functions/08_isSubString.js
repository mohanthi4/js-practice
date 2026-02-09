function isSubString(string, otherString) {
  let index = 0;
  let stringIndex = 0;

  return isSubstringFound(string, stringIndex, otherString, index);
}

function stringFound(string, index, otherString, stringSize) {
  console.log(index);

  if (string[index] !== otherString && index < stringSize) {
    return stringFound(string, index + 1, otherString, stringSize);
  }

  return index === stringSize ? false : index;
}

function isSubstringFound(string, stringIndex, otherString, index) {
  const otherStringSize = otherString.length;
  const stringSize = string.length;
  console.log(index);

  let nextStringIndex = stringIndex;
  console.log(stringIndex);

  if (otherString[index] !== string[stringIndex] && index < otherStringSize) {
    nextStringIndex = stringFound(string, stringIndex, otherString[0], stringSize);
    console.log(nextStringIndex);
    
    if (nextStringIndex === false) {
      return false;
    }

    if (otherString[index] === string[nextStringIndex + 1]) {
      if (index === otherStringSize - 1) {
        return true;
      }

      return isSubstringFound(string, nextStringIndex + 1, otherString, index + 1);
    }

  }

  if (otherString[index] === string[stringIndex]) {
    if (index === otherStringSize - 1) {
      return true;
    }
    
    return isSubstringFound(string, nextStringIndex + 1, otherString, index + 1);
  }
  return isSubstringFound(string, nextStringIndex + 1, otherString, index + 1);
}

function resultSymbol(expected, actual) {
  return expected === actual ? "👍" : "👎🏻";
}

function actualFragment(string, otherString) {
  return " '" + string + "' , '" + otherString;
}

function outputFragment(expected, actual) {
  return "' expected : " + expected + " actual : " + actual;
}

function testIsSubString(string, otherString, expected) {
  const actual = isSubString(string, otherString);
  const message = resultSymbol(expected, actual) + actualFragment(string, otherString);
  const finalMessage = message + outputFragment(expected, actual);

  console.log(finalMessage);
}

function allTestCases() {
  testIsSubString("hello", "ll", true);
  testIsSubString("o world", "orld", true);
}

allTestCases();