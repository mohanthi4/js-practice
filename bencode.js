function simpleEncode(data) {
  if (typeof (data) === "number") {
    return `i${data}e`;
  }

  if (typeof (data) === "string") {
    return `${data.length}:${data}`;
  }

  return encode(data);
}

function encode(data) {
  if (typeof (data) !== "object") {
    return simpleEncode(data);
  }

  let encodeData = "";
  for (let index = 0; index < data.length; index++) {
    encodeData = encodeData + simpleEncode(data[index]);
  }

  return `l${encodeData}e`;
}

function decode(data) {
  return 0;
}

function message(data, expected, actaulBencode) {
  return `: ${data} expected :${expected} actaulBencode :${actaulBencode}`;
}

function resultMessage(gist, data, expected, actaulBencode) {
  const symbol = expected === actaulBencode ? "✅" : "❌";

  if (symbol === "❌") {
    const values = message(data, expected, actaulBencode);
    return symbol + gist + values;
  }

  return symbol + gist;
}

function testBencode(action, gist, data, expectedBencode) {
  const actaulBencode = action === "encode" ? encode(data) : decode(data);

  const finalMessage = resultMessage(gist, data, expectedBencode, actaulBencode);
  console.log(finalMessage);
}

function encodedTestCases() {
  let action = "encode";
  console.log("Encoded test cases:\n");

  testBencode(action, "number is 0 ", 0, "i0e");
  testBencode(action, "positive number", 123, "i123e");
  testBencode(action, "negative number", -42, "i-42e");
  testBencode(action, "empty string", "", "0:");
  testBencode(action, "normal string", "hello", "5:hello");
  testBencode(action, "string contains spaces", "hello wor2ld", "12:hello wor2ld");
  testBencode(action, "string contains special chars", "special!@#$chars", "16:special!@#$chars");
  testBencode(action, "empty list", [], "le");
  testBencode(action, "list contains numbers", [1, 23], "li1ei23ee");
  testBencode(action, "list contains string and numbers", [1, "hi"], "li1e2:hie");
  testBencode(action, "simple nested list", [1, ["hi"]], "li1el2:hiee");
  testBencode(action, "nested list", ["apple", 123, ["banana", -5]], "l5:applei123el6:bananai-5eee");
  testBencode(action, "nested list and empties", [0, "", ["test"]], "li0e0:l4:testee");
  testBencode(action, "empty nested list", ["", 0, []], "l0:i0elee");
  testBencode(action, "mutliple nested lists", ["one", ["two", ["three"]]], "l3:onel3:twol5:threeeee");
}

function decodedTestCases() {
  let action = "decode";
  console.log("\nDecoded test cases:\n");

  testBencode(action, "number is 0", "i0e",0);
}

function allTestCases() {
  encodedTestCases();
  decodedTestCases();
}

allTestCases();
