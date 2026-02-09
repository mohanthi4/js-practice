// - Flipped consecutive elements
//   [1,2,3,4] => [2,1,4,3];

function* consecutiveFlip(elements) {
  for (let index = 0; index < elements.length; index = index + 2) {
    if (index !== elements.length - 1) {
      yield elements[index + 1];
    }

    yield elements[index];
  }
}

const elements = [1, 2, 3, 4];
const iterate = consecutiveFlip(elements);
