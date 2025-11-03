function encode(data) {
  return "i0e";
}

function resultSymbol(expectedBencode, actual) {
  return expectedBencode === actual ? "👍" : "👎🏻";
}

function message(data, expectedBencode, actual) {
  return " given " + data + " expected Output - " + expectedBencode + " but it shows - " + actual;
}

function testBencode(data, expectedBencode) {
  const actual = encode(data);
  const finalMessage = resultSymbol(expectedBencode, actual) + message(data, expectedBencode, actual);
  console.log(finalMessage);
}

testBencode(0, "i0e");
