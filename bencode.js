function encode(data) {
  if (typeof (data) === "number") {
    return `i${data}e`;
  }

  let size = data.length;
  return `${size}:${data}`
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
testBencode("", "0:");
testBencode("hello", "5:hello");
