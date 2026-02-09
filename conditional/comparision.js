const number = 65 ;
const subString = "00" ;
let sequenceCount = 0;
let binaryNumber = "";
let duplicateNumber = number ;
let value ;
let duplicateBinaryNumber = binaryNumber;

while (duplicateNumber > 0){
    value = duplicateNumber % 2 ;
    // duplicateBinaryNumber = duplicateBinaryNumber + value ;
    binaryNumber = value  + binaryNumber ;
    console.log("duplicateBinaryNumber ",duplicateBinaryNumber);
    
    if (subString === duplicateBinaryNumber){
        sequenceCount = sequenceCount + 1;
        console.log("sequenceCount",sequenceCount);
    }
    duplicateNumber = (value === 0) ? (duplicateNumber / 2) :((duplicateNumber / 2) - 0.5);
}
console.log("number ",number)
console.log("substring ",subString)
console.log("binaryNumber ",binaryNumber)
console.log("sequenceCount ",sequenceCount)