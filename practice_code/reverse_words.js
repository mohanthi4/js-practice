function reverseString(string) {
  const stringSize = string.length;
  const reverse = "";

  if (stringSize === 0) {
    return reverse;
  }
  
  return reverseWord(string, stringSize, reverse);
}

function reverseWord(string, stringSize, reverse) {
  let count = 0;

  if (stringSize >= 0) {
    const startIndexRange = isStart(string, stringSize - 1);

    if (reverse !== "") {
      count = 1;
    }

    let word = "";
    word = oneWord(startIndexRange, string, stringSize, word, count);
    reverse = reverse + word;

    return reverseWord(string, startIndexRange - 1, reverse);
  }

  return reverse;
} 

function oneWord(startIndexRange, string, stringSize, word, count) { 
  if (count !== 0) {
    word = word + " ";
  }

  if (startIndexRange < stringSize) {
    let extraCount = 0;
    word = word + string[startIndexRange];
    word = oneWord(startIndexRange + 1, string, stringSize, word,extraCount);
  }

  return word ;
}

function isStart(string, stringSize) {
  if (stringSize === 0) {
    return stringSize;
  }
  if(string[stringSize] === " ") {
    return stringSize + 1;
  }
  return isStart(string, stringSize - 1);
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
  return " '" + string + "' expected : " + expected + " actual : '" + actual + "'";
}

function testReverseString(gist, string, expected) {
  const actual = reverseString(string);
  const message = resultMessage(gist, string, expected, actual);

  console.log(message);
}

function allTestCases() {
  testReverseString("empty string", "", "");
  testReverseString("reverse one word", "hello", "hello");
  testReverseString("reverse two words", "hello world", "world hello");
  testReverseString("reverse three words", "JavaScript is fun", "fun is JavaScript");
  testReverseString("reverse single 3 letters", "a b c", "c b a");
}

allTestCases();