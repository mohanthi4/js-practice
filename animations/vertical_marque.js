const makeScreen = (rows, cols) => {
  let screen = [];
  let line = 0;
  while (line < rows) {
    screen.push(" ".repeat(cols).split(""));
    line++;
  }
  return screen;
};

const screen = makeScreen(10, 20);

const screenClear = (screen) => {
  for (const i in screen) {
    for (const j in screen[i]) {
      screen[i][j] = " ";
    }
  }
};

const drawVertical = (screen, y, character) => {
  let i = 9;
  // console.log(i,x,y,character)
  while (i > 0) {
    screen[i][y] = screen[i-1][y];
    i--;
  }
  screen[i][y] = character;
  return screen.map((e) => e.join("")).join("\n");
};

// let str1 = "welcome";
// str1 = " ".repeat(9 - str1.length) + str1;
// let i1 = str1.length - 1;
// const firstString = setInterval(() => {
//   console.clear();
//   console.log(drawVertical(screen,2, str1.charAt(i1)));
//   i1 = (i1 < 0) ? str1.length - 1 : i1 - 1;
// }, 200);

let str2 = "thanks";
str2 = " ".repeat(9 - str2.length) + str2;
let i2 = str2.length - 1;
const secondString = setInterval(() => {
  console.clear();
  console.log(drawVertical(screen, 8, str2.charAt(i2)));
  i2 = (i2 < 0) ? str2.length - 1 : i2 - 1;
}, 300);


