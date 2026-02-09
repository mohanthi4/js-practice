// - Generate sequences of consecutive pairs
//   [1,2,3,4,5] => [[1,2],[2,3],[3,4],[4,5]]

function* generateConsecutives(data) {
  for (let index = 0; index < data.length - 1; index++) {
    yield [data[index], data[index + 1]];
  }
}

const data = [1, 2, 3, 4, 5];
const iterate = generateConsecutives(data);

// function* something() {
//   const arr = Array.from({ length: 10 }, (e, i) => 1 * i);
//   for (let index = 0; index < arr.length; index++) {
//     yield arr[index];
//   }
// }

// function* something1() {
//   const arr = Array.from({ length: 10 }, (e, i) => 1 * i);
//   for (let index = 0; index < arr.length; index += 2) {
//     yield arr[index];
//   }
// }

// const iterate1 = something();
// const iterate2 = something1();

// iterate1.map((ele) => ele ** 2).filter((ele) => !(ele & 1));
