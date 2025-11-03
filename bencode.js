function encode(data) {
  if (typeof(data) !== "object") {
    return simpleEncode(data);
  }

  let encodeData = "";
  for (let index = 0; index < data.length; index++) {
    encodeData = encodeData + simpleEncode(data[index]);
  }

  return `l${encodeData}e`;
}

function simpleEncode(data) {
  if (typeof(data) === "number") {
    return `i${data}e`;
  }

  if (typeof(data) === "string") {
    return `${data.length}:${data}`;
  }

  return encode(data);
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
testBencode("hello world", "11:hello world");
testBencode("special!@#$chars", "16:special!@#$chars");
testBencode([], "le");
testBencode([1, 23], "li1ei23ee");
testBencode([1, "hi"], "li1e2:hie");
testBencode([1, ["hi"]], "li1el2:hiee");
testBencode(["apple", 123, ["banana", -5]], "l5:applei123el6:bananai-5eee");
testBencode([], "le");
testBencode([0, "", ["test"]], "li0e0:l4:testee");
testBencode(["", 0, []], "l0:i0elee");
testBencode(["one", ["two", ["three"]]], "l3:onel3:twol5:threeeee");
