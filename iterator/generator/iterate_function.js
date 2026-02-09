// - iterate(f,x) => f(x), f(f(x)), f(f(f(x)))

const increment = (element) => element + 1;

function* functionIterate(method, element) {
  let data = element
  while (true) {
    data = method(data)
    yield data;
  }
}


// function* functionIterate(method, element) {
//   let data = element
//   while (true) {
//     yield data;
//     data = method(data);
//   }
// }

const iterate = functionIterate(increment,0)