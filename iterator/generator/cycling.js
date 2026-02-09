// - Generate a cycle of elements
//   [1,2,3,4,5] => [1,2,3,4,5,1,2,3,4,5,...]

// function* generateCycle(data) {
//   let index = 0
//   while (true) {
//     yield data[index];
//     index = index + 1 > data.length-1 ? 0 : index + 1
//   }
// }


// const data = [1, 2, 3, 4, 5];
// const iterate = generateCycle(data);

function* generateCycle(data) {
  let index = 0
  while (true) {
    index = index > data.length-1 ? 0 : index
    yield data[index++];
  }
}


const data = [1, 2, 3, 4, 5];
const iterate = generateCycle(data);