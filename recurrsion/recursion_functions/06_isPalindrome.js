function isPalindrome(palindromeCandidate) {
  const reversePalindromeCandidate = reverse(palindromeCandidate);
  return palindromeCandidate === reversePalindromeCandidate;
}

function reverse(string) {
  if (string === "") {
    return "";
  }

  return reverse(restString(string)) + firstString(string);
}

function firstString(string) {
  let firstCharacter = string[0];
  return firstCharacter;
}

function restString(string) {
  let rest = "";

  for (let index = 1; index < string.length; index++) {
    rest = rest + string[index];
  }

  return rest;
}

function resultSymbol(expected, actual) {
  return expected === actual ? "👍" : "👎🏻";
}

function actualFragment(palindromeCandidate) {
  return " " + palindromeCandidate;
}

function outputFragment(expected, actual) {
  return " expected : " + expected + " actual : " + actual;
}

function testIsPalindrome(palindromeCandidate, expected) {
  const actual = isPalindrome(palindromeCandidate);
  const message = resultSymbol(expected, actual) + actualFragment(palindromeCandidate);
  const finalMessage = message + outputFragment(expected, actual);

  console.log(finalMessage);
}

function allTestCases() {
  testIsPalindrome("mom", true);
}

allTestCases();