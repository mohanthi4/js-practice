function encode(data) {
  return `i${data}e`;
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
testBencode(123, "i123e");
testBencode(-42, "i-42e");
