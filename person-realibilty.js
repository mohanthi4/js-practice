function sum(data, power = 1) {
  let sumOfData = 0;

  for (let index = 0; index < data.length; index++) {
    sumOfData = sumOfData + Math.pow(data[index], power);
  }

  return sumOfData;
}

function average(data, power = 1) {
  return sum(data, power) / data.length;
}

function deviationElements(data) {
  let elements = [];
  const averageValue = average(data);

  for (let index = 0; index < data.length; index++) {
    elements.push(data[index] - averageValue);
  }

  return elements;
}

function standardDeviation(data) {
  const elements = deviationElements(data);
  return Math.sqrt(average(elements, 2));
}

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

function middleElement(data) {
  return data[Math.floor(data.length / 2)];
}

function median(data) {
  return middleElement(sort(data));
}

function main() {
  const data = [0, 0, 0, 100];
  const medianValue = median(data);
  const standardDeviationValue = standardDeviation(data);
  console.log(standardDeviationValue);

}

main();
