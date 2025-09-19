const value = "radha";
const length = value.length;
let duplicateValue = "";
let initial = 1;

while (initial <= length){
  let reverseValue = value[length - initial];
  duplicateValue = duplicateValue + reverseValue ;
  initial = initial + 1;
}

const outcome = (value === duplicateValue) ? "is a palindrome" : "is a not palindrome";
console.log(value,outcome);
