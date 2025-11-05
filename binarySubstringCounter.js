const number = 65  ;
const subString = "10" ;
let sequenceCount = 0;
let binaryNumber = "";
let duplicateNumber = number ;
let value ;

while (duplicateNumber > 0){
    value = duplicateNumber % 2 ;
    binaryNumber = value + binaryNumber;
    duplicateNumber = (value === 0) ? (duplicateNumber / 2) :((duplicateNumber / 2) - 0.5);
}

console.log("number ",number)
console.log("substring ",subString)
console.log("binaryNumber ",binaryNumber)
console.log("sequenceCount ",sequenceCount)
