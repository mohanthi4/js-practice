function isPrime(primeCandidate) {
  const divisor = 2;

  if (primeCandidate <= 1) {
    return false;
  }
  if (primeCandidate === 2) {
    return true;
  }
  return testprime(primeCandidate, divisor);
}

function testprime(primeCandidate, divisor) {
  let count = 0;
  if (primeCandidate % divisor === 0 && divisor < primeCandidate) {
    count = count + 1;
    return false;
  }
  if (count === 0 && divisor === primeCandidate - 1) {
    return true;
  }
  console.log(count);
  return testprime(primeCandidate, divisor + 1);
}

function resultSymbol(expectedBoolean, actualBoolean) {
  return expectedBoolean === actualBoolean ? "👍" : "👎🏻";
}

function actualFragment(primeCandidate) {
  return " " + primeCandidate;
}

function outputFragment(expectedBoolean, actualBoolean) {
  return " expectedBoolean : " + expectedBoolean + " actualBoolean : " + actualBoolean;
}

function testIsPrime(primeCandidate, expectedBoolean) {
  const actualBoolean = isPrime(primeCandidate);
  const message = resultSymbol(expectedBoolean, actualBoolean) + actualFragment(primeCandidate);
  const finalMessage = message + outputFragment(expectedBoolean, actualBoolean);

  console.log(finalMessage);
}

function allTestCases() {
  testIsPrime(1, false);
  testIsPrime(2, true);
  testIsPrime(3, true);
  testIsPrime(4, false);
  testIsPrime(5, true);
  testIsPrime(6, false);
  testIsPrime(0, false);
}

allTestCases();