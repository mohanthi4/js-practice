// - chunk
//   2: [1,2,3,4] => [[1,2],[3,4]];
// 3,1: [1,2,3,4,5] => [[1,2,3],[3,4,5]];
// 3,2: [1,2,3,4,5] => [[1,2,3],[2,3,4],[3,4,5]];

// function* chunkBy2(elements) {
//   for (let index = 0; index < elements.length; index = index +2) {
//     const group = [elements[index]];
//     if (index !== elements.length - 1) {
//       group.push(elements[index + 1])
//     }
//     yield group;
//   }
// }

function* chunkWithrepetion(elements, size,repeats=0) {
  const incrementBy = size - repeats;
  for (
    let index = 0; index < elements.length - repeats; index = index + incrementBy
  ) {
    yield elements.slice(index, index + size);
  }
}

const elements = [1, 2, 3, 4];

const iterate = chunkWithrepetion(elements, 2);
const iterateBy1 = chunkWithrepetion(elements, 3, 1);
const iterateBy2 = chunkWithrepetion(elements, 3, 2);