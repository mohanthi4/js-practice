function sort(data) {
  let sortedData = data;

  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (sortedData[i] > sortedData[j]) {
        const duplicate = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = duplicate;
      }
    }
  }

  return sortedData;
}

function median(data) {
  const sortedData = sort(data);
  const index = sortedData.length - 1;
  const upperNumber = sortedData[Math.floor(index/2)];
  const lowerNumber = sortedData[Math.ceil(index/2)];
  return (upperNumber + lowerNumber) / 2;
}
