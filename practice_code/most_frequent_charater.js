function frequentCharacter(string) {
  const stringSize = string.length;
  const index = 0;
  return mostFrequent(string, index, stringSize);
}

function mostFrequent(string,index, stringSize) {
  const count = countEachCharacter(string,index,stringSize )
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

function testFrequentCharacter(gist, string, expected) {
  const actual = frequentCharacter(string);
  const message = resultMessage(gist, string, expected, actual);

  console.log(message);
}

function allTestCases() {
  testFrequentCharacter("one word", "javascript", "a");
}

allTestCases();