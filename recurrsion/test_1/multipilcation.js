const number =  2;
let initialNumber = 1;
const finalNumber = 10;
let multiplication ;
while(initialNumber <= finalNumber){
    multiplication = number * initialNumber;
    console.log(number,"*",initialNumber,"=",multiplication);
    console.log(number,"* -",initialNumber,"= -",multiplication);
    console.log("---------------------------");
    initialNumber = initialNumber + 1;
}