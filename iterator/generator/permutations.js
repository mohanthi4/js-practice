// - Generate sequences of consecutive pairs
//   [1,2,3,4,5] => [[1,2],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5],[3,4],[3,5],[4,5]]

function* generatePermutation(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length - 1; j++) {
      yield [data[i], data[j], data[j + 1]];
    }
  }
}

const data = [1, 2, 3, 4, 5];
const iterate = generatePermutation(data);
