let NUMBER_OF_TIMES = 0;

function sum(data) {
  let sumOfData = 0;

  for (let index = 0; index < data.length; index++) {
    sumOfData = sumOfData + data[index];
  }

  return sumOfData;
}

function average(data) {
  return sum(data) / data.length;
}

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

const data = [50, 0, 25, 25];
const averageValue = average(data);
console.log(averageValue);
const sortedData = sort(data);
console.log(sortedData);

