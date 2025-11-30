const makeScreen = (rows, cols) => {
  let screen = [];
  let line = 0;
  while (line < rows) {
    screen.push(" ".repeat(cols).split(""));
    line++;
  }
  return screen;
};

const screen = makeScreen(5, 20);

const screenClear = (screen) => {
  for (const i in screen) {
    for (const j in screen[i]) {
      screen[i][j] = " ";
    }
  }
};

const drawOnScreen = (screen, x, y, character) => {
  // console.log(x,y,character)
  let i = 20;
  while (i > 0) {
    screen[x][i] = screen[x][i - 1];
    i--;
  }
  screen[x][i] = character;
  return screen.map((e) => e.join("")).join("\n");
};

let str = "hello";
str = " ".repeat(10 - str.length) + str;
let i = str.length - 1;

let x1 = 0;
const firstString = setInterval(() => {
  console.clear();
  console.log(drawOnScreen(screen, 0, x1, str.charAt(i)));
  i = (x1 >= 19) ? str.length - 1 : i - 1;
  x1 = (x1 >= 19) ? 0 : x1 + 1;
}, 200);

let x2 = 0;
let str2 = "welcome";
str2 = " ".repeat(10 - str2.length) + str2;
let i2 = str2.length - 1;
const SecondString = setInterval(() => {
  console.clear();
  console.log(drawOnScreen(screen, 1, x2, str2.charAt(i2)));
  if (x2 >= 9) {
    i2 = str2.length - 1;
    x2 = 0;
  } else {
    i2 = i2 - 1;
    x2 = x2 + 1;
  }
}, 100);
