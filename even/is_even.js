const isOdd = (element) => element % 2 !== 0;

const justifiedValue = (element) => isOdd(element) ?  "is Odd" : "is Even"; 

const limitedEvenOdd = (start,limit) =>{
  const validData = {}
  while (start <= limit) {
    validData[start] = justifiedValue(start);
    start = start + 1 ;
  } 
  return validData;
}
