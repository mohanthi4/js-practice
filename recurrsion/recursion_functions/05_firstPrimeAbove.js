function firstPrimeAbove(number) {
  let term = number + 1;
  const prime = isPrime(term);

  if (prime) {
    return term;
  }
  return firstPrimeAbove(number + 1);
}

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
  return testprime(primeCandidate, divisor + 1);
}

function resultSymbol(expected, actual) {
  return expected === actual ? "👍" : "👎🏻";
}

function actualFragment(number) {
  return " " + number;
}

function outputFragment(expected, actual) {
  return " expected : " + expected + " actual : " + actual;
}

function testFirstPrimeAbove(number, expected) {
  const actual = firstPrimeAbove(number);
  console.log(actual);

  const message = resultSymbol(expected, actual) + actualFragment(number);
  const finalMessage = message + outputFragment(expected, actual);

  console.log(finalMessage);
}

function allTestCases() {
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(2, 3);
  testFirstPrimeAbove(4, 5);
  testFirstPrimeAbove(11, 13);
}

allTestCases();