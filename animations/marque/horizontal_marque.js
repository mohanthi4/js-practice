import { makeScreen } from "./screen.js"

const drawOnScreen = (screen, x, character) => {
  console.log(x,character,screen)
  let i = 19;
  while (i > 0) {
    screen.pixels[i][x] = screen.pixels[--i][x];
  }
  screen.pixels[i][x] = character;
  return screen.pixels.map((e) => e.join("")).join("\n");
};

const main = () => {
  let str = "hello";
  str = " ".repeat(19 - str.length) + str;
  let i = str.length - 1;
  const screen = makeScreen(20, 20);
  
  let str2 = "welcome";
  str2 = " ".repeat(19 - str2.length) + str2;
  let i2 = str2.length - 1;

  setInterval(() => {
    console.clear();
    console.log(drawOnScreen(screen, 0, str.charAt(i)));
    // console.log(drawOnScreen(screen, 1, str2.charAt(i2)));
    i = (i < 0) ? str.length - 1 : i - 1;
    // i2 = (i2 < 0) ? str2.length - 1 : i2 - 1;
  }, 200);



}

main();
// let x2 = 0;
// let str2 = "welcome";
// str2 = " ".repeat(10 - str2.length) + str2;
// let i2 = str2.length - 1;
// const SecondString = setInterval(() => {
//   console.clear();
//   console.log(drawOnScreen(screen, 1, x2, str2.charAt(i2)));
//   if (x2 >= 9) {
//     i2 = str2.length - 1;
//     x2 = 0;
//   } else {
//     i2 = i2 - 1;
//     x2 = x2 + 1;
//   }
// }, 100);


