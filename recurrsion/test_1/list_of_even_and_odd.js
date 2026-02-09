const limitNumber = 10;
const initialNumber = 1;
console.log("even number :");
for(let count = initialNumber;count <= limitNumber;count++){
    if(count % 2 === 0){
        console.log(count);
    }    
}

console.log("odd number :");
for(let count = initialNumber;count <= limitNumber;count++){
    if(count % 2 !== 0){
        console.log(count);
    }    
}