const isReverseEqual = (string, reverse) =>
  (string === reverse)
    ? `${string} is a palindrome`
    : `${string} is not palindrome`;

const isPalindrome = (string) => {
  const reverse = string.split("").reverse().join("");
  return isReverseEqual(string, reverse);
};
