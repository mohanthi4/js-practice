const x = 5;
const y = 0;
const z = -2;
if(x > 3 && (y || z + x)){
    console.log("branch1");
}else if(x === 5 && !y){
    console.log("branch2");
}else{
    console.log("branch3");
}