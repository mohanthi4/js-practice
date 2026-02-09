const generator = function* () {
  console.log("hi");
  yield 1;
  console.log("hello");
};

const i = generator();
