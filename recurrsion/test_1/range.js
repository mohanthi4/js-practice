let startOfRange = 1;
const endOfRange = 10;
while(startOfRange <= endOfRange){
    if((startOfRange % 3 === 0) && (startOfRange % 7  !== 0)){
        console.log(startOfRange);
    }
    startOfRange = startOfRange + 1;
}