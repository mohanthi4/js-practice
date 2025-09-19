let value = 0;
const limit = 10;
while (value <= limit){
    const isOdd = (value % 2 );
    const justifiedValue =  isOdd ?  "is Odd" : "is Even";  
    console.log(value,justifiedValue);
    value = value + 1 ;
}  
