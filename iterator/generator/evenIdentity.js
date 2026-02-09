//  isEven: [1,3,1,2,2,1,1,3,5,2] => [[1,3,1],[2,2],[1,1,3,5],[2]]

// function* generateIdentities(elements) {
//   let index = 0;
//   while (index < elements.length) {
//     const data = elements[index];
//     const group = [];
//     const value = data & 1;

//     while (index < elements.length && (elements[index] & 1) === value) {
//       group.push(elements[index]);
//       index++;
//     }

//     yield group;
//   }
// }

// const data = [1, 1, 1, 2, 2, 1, 1, 3, 5, 2];
// const iterateIdentity = generateIdentities(data);


function* generateIdentities(elements) {
  let group = [];
  for (let index = 0; index < elements.length; index++) {
    const data = elements[index];
    group.push(data);
    const value = data & 1;

    if(index === elements.length - 1 ||  (elements[index + 1] & 1) !== value) {
      yield group;
      group = [];
    }
  }
}

const data = [1, 1, 1, 2, 2, 1, 1, 3, 5, 2];
const iterateIdentity = generateIdentities(data);