let input = "hi";
console.log("outside",input);
if(true){
    let input = 15;
    console.log("1st inner loop",input);
    if(true){
        console.log("2nd innr loop",input);
    }
}
console.log("outside",input);
