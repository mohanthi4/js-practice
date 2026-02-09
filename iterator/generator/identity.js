// - partition by
//   identity: [1,1,1,2,2,1,1,3,3,2] => [[1,1,1],[2,2],[1,1],[3,3],[2]]

// function* generateIdentities(data) {
//   let index = 0;
//   while (index < data.length) {
//     const value = data[index];
//     const group = [];

//     while (data[index] === value) {
//       group.push(data[index]);
//       index++;
//     }

//     yield group;
//   }
// }

// const data = [1, 1, 1, 2, 2, 1, 1, 3, 3, 2];
// const iterateIdentity = generateIdentities(data);



// function* generateIdentities(data) {
//   let index = 0;
//   while (index < data.length) {
//     const group = [data[index]];

//     while (data[index] === data[++index]) {
//       group.push(data[index]);
//     }

//     yield group;
//   }
// }

// const data = [1, 1, 1, 2, 2, 1, 1, 3, 3, 2];
// const iterateIdentity = generateIdentities(data);



function* generateIdentities(data) {
  let group = [];
  for (let index = 0; index < data.length;index++) {
    group.push(data[index]);

    if(index === data.length - 1 || data[index] !== data[index+1]) {
      yield group;
      group = [];
    }
  }
}

const data = [1, 1, 1, 2, 2, 1, 1, 3, 3, 2];
const iterateIdentity = generateIdentities(data);
