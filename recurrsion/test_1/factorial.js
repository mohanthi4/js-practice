const limitNumber = 5;
let initialNumber = 1;
let multiplication = 1;

while(initialNumber <= limitNumber){
    multiplication = multiplication * initialNumber;
    initialNumber = initialNumber + 1;
}

console.log("factorial ",multiplication);
