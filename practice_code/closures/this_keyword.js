// const add = (x, y) => x + y;
// const adder = (x) => (y) => x + y;
// const c1 = adder(0);
// const c2 = adder(0);

// // closures
// const makeCounter = function (start = 0) {
//   let i = start;
//   return () => ++i;
// };

// const c1 = makeCounter;

// // closures as objets
// const increment = function () {
//   console.log(this.i, this.name);
// };

// const counter = function (start = 0) {
//   let i = start;
//   let name = "sona";
//   return { i, name };
// };

// const d1 = counter();

// // call based functions
// const animal = function () {
//   let i = this;
//   return i;
// };

// // bind and apply based functions
// const add = function (x, y) {
//   return x + y;
// };

// // const adder = add;

// const add = (a, b) => {console.log(this.a, this.b); return a + b;}
// const add5 = add.bind(null, 5);
// console.log(add5(4));

// // console.log(this.a);

// console.log = console.log.bind({ a: 2 }, "abcd");
// console.log(this.a);

// const colors = ["red","green","blue"];
// colors.map = colors.map.bind([...colors].reverse());


// const ff = function (a,b) {
//   this.a += b;
//   return this;
// }

// const rf = ff.bind({a:2});
// console.log([1,2,3].reduce(rf));


const ff = function (b,a) {
  this[b] += a;
  return this;
}

const rf = ff.bind({a:2});
console.log([1,2,3].reduce(rf));