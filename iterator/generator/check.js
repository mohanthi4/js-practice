export const legalDoubling = (digit) => {
  const doubledDigit = Number(digit) * 2;

  if (doubledDigit > 9) {
    const doubledDigitString = String(doubledDigit);
    return Number(doubledDigitString[0]) + Number(doubledDigitString[1]);
  }

  return doubledDigit;
};

export const valueDoubling = (numberString) => {
  const number = numberString.split("").reverse();
  const doubledValue = number.map((digit, index) => {
    return index % 2 !== 0 ? legalDoubling(digit) : digit;
  });

  return doubledValue.reverse().join("");
};

export const sum = (numberString) => {
  return numberString.split("").reduce((sum, digit) => sum + Number(digit), 0);
};

export const checkMultiple = (validFormat) => {
  const doubledValues = valueDoubling(validFormat);
  const sumOfDigits = sum(doubledValues);

  return sumOfDigits % 10 === 0 ? "Valid" : "Invalid";
};

export const checkDigitCount = (number) => {
  return number.length === 12;
};

export const cleanNumber = (number) => {
  const digits = number.split("").filter((digit) => digit !== " ");

  return digits.join("");
};

export const validateCard = (cardNumber) => {
  const validFormat = cleanNumber(cardNumber);
  const hasTwelveDigits = checkDigitCount(validFormat);

  return hasTwelveDigits ? checkMultiple(validFormat) : "Invalid";
};
