
const limitedNumbers = (start,limit) => {
  const range = [];
  while (start <= limit) {
    range.push(start);
    start = start + 1 ;
  }
  return range;
}
