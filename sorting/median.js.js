function median(data) {
  let index = data.length - 1;
  let upperNumber = data[Math.ceil(index / 2)];
  let lowerNumber = data[Math.floor(index / 2)];
  return (upperNumber + lowerNumber) / 2;
}