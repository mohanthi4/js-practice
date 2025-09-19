let startOfRange = 0;
const endOfRange = 15;
let series = 1;
console.log("fibbnoci series :");

while (startOfRange <= endOfRange){
    series = series + startOfRange;
    console.log(startOfRange);
    startOfRange = series + startOfRange;
    console.log(series);
}
