let i = 1;
let j = 2;
let k = 3;
if((i++ + ++j) === (k + --i)){
    console.log("equal");
}else if((j-- - i) > (k++ - j)){
    console.log("second");
}else{
    console.log("third");
}