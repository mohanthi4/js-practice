function slice(text, start, end) {
  let sliceStart = start;
  let sliceEnd = end;

  if (start <= 0) {
    sliceStart = 0;
  }
  if (end > text.length) {
    sliceEnd = text.length - 1;
  }
  if (start > end) {
    return "";
  }

  return text[sliceStart] + slice(text, sliceStart + 1, sliceEnd);
}

function resultSymbol(expected, actual) {
  return expected === actual ? "✅" : "❌";
}

function actualFragment(text, start, end) {
  return " '" + text + "' , '" + start + "', '" + end;
}

function outputFragment(expected, actual) {
  return "' expected : " + expected + " actual : " + actual;
}

function testSlice(text, start, end, expected) {
  const actual = slice(text, start, end);
  const message = resultSymbol(expected, actual) + actualFragment(text, start, end);
  const finalMessage = message + outputFragment(expected, actual);

  console.log(finalMessage);
}

function allTestCases() {
  testSlice("hello", 1, 3, "ell");
  testSlice("hello world", -1, 3, "hell");
  testSlice("hello world", 4, 8, "o wor");  
}

allTestCases();