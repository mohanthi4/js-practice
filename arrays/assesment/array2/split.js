function split(sentence, delimiter) {
  const splittedArrayStrings = [];
  let accumulateString = "";

  for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] === delimiter) {
      splittedArrayStrings.push(accumulateString);
      accumulateString = "";
    }

    if (sentence[index] !== delimiter) {
      accumulateString = accumulateString + sentence[index];
    }
  }

  splittedArrayStrings.push(accumulateString);
  return splittedArrayStrings;
}

function outputFragment(sentence, delimiter, expected, actual) {
  return `${sentence} ${delimiter} expected :${expected} actual :${actual}`;
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

function resultMessage(gist, sentence, delimiter, expected, actual) {
  const symbol = isEqual(expected, actual) ? "✅" : "❌";

  if (symbol === "❌") {
    const values = outputFragment(sentence, delimiter, expected, actual);
    return symbol + gist + values;
  }

  return symbol + gist;
}


function testSplit(gist, sentence, delimiter, expected) {
  const actual = split(sentence, delimiter);
  const message = resultMessage(gist, sentence, delimiter, expected, actual);

  console.log(message);
}

function allTestCases() {
  testSplit("split by ','", "a,b,c", ",", ["a", "b", "c"]);
  testSplit("split by ':'", "one:two:three", ":", ["one", "two", "three"]);
  testSplit("no delimiter in string", "hello", ":", ["hello"]);
  testSplit("direct string into array", "a,b,c d,e,f", " ", ["a,b,c", "d,e,f"]);
  testSplit("empty string", "", ",", [""]);
  testSplit("consicutive delimiter are present", "apple", "p", ["a", "", "le"]);
  testSplit("string consits starting deliminator", ",hi", ",", ["", "hi"]);
  testSplit("string ends with deliminator", "hi,", ",", ["hi", ""]);
  testSplit("string is deliminator", ",", ",", ["", ""]);

}

allTestCases();