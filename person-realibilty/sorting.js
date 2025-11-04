let NUMBER_OF_TIMES = 0;

function sort(data) {
  let sortedData = data;
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      NUMBER_OF_TIMES++;
      if (sortedData[i] > sortedData[j]) {
        const duplicate = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = duplicate;
      }
    }
  }
  return sortedData;
}

function benchmark(data) {
  console.log(`\n| ${data.length} | - | ${NUMBER_OF_TIMES} |`);
}

const data = [0, 50, 2, 2];
console.log(`${data}  -  ${sort(data)}`);
benchmark(data);
