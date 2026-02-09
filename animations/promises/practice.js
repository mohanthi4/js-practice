// async function test() {
//   try {
//     console.log("1");
//     await Promise.reject("X");
//     console.log("2");
//   } catch (e) {
//     console.log("3");
//     return "Y";
//   } finally {
//     console.log("4");
//   }
// }

// console.log("A");

// test()
//   .then((v) => console.log("then:", v))
//   .catch((e) => console.log("catch:", e));

// console.log("B");

async function test() {
  try {
    console.log("1");
    return Promise.reject("X");
  } catch (e) {
    console.log("2");
  } finally {
    console.log("3");
  }
}

console.log("A");

test()
  .then(v => console.log("then:", v))
  .catch(e => console.log("catch:", e));

console.log("B");