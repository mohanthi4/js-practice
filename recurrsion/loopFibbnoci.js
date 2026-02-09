const series = (start, end) => {
  let element = 1;
  const fibbnociSeries = [];

  while (start <= end) {
    element = element + start;
    fibbnociSeries.push(start);
    start = element + start;
    fibbnociSeries.push(element);
  }
  return fibbnociSeries;
};

const rangeOfFibbnoci = (startOfRange, endOfRange) => {
  console.log("fibbnoci series :");
  return series (startOfRange,endOfRange);
};
