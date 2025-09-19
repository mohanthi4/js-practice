const value = "1234";
const length = value.length;
let duplicateValue = "";
let initial = 1;
while (initial <= length){
  duplicateValue = duplicateValue + value[value.length - initial];
  console.log(duplicateValue);
  initial = initial + 1;
}
(value === duplicateValue) ? console.log(value,"is a palindrome") : console.log(value,"is a not palindrome");
