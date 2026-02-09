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

const drawHorizontal = (screen, x, y, character) => {
  // console.log(x,y,character)
  let i = 20;
  while (i > 0) {
    screen[x][i] = screen[x][i - 1];
    i--;
  }
  screen[x][i] = character;
  return screen.map((e) => e.join("")).join("\n");
};

const drawVertical = (screen, x, y, character) => {
  let i = 9;
  // console.log(i,x,y,character)
  while (i > 0) {
    screen[i][y] = screen[i-1][y];
    i--;
  }
  screen[i][y] = character;
  return screen.map((e) => e.join("")).join("\n");
};

let str = "hello";
str = " ".repeat(19 - str.length) + str;
let i = str.length - 1;

let y1 = 0;
const firstString = setInterval(() => {
  console.clear();
  console.log(drawHorizontal(screen, 0, y1, str.charAt(i)));
  i = (y1 >= 19) ? str.length - 1 : i - 1;
  y1 = (y1 >= 19) ? 0 : y1 + 1;
}, 200);

let x1 = 0;
let str2 = "welcome";
str2 = " ".repeat(9 - str2.length) + str2;
let i2 = str2.length - 1;
const SecondString = setInterval(() => {
  console.clear();
  console.log(drawVertical(screen, x1, 2, str2.charAt(i2)));
  i2 = (x1 >= 9) ? str2.length - 1 : i2 - 1;
  x1 = (x1 >= 9) ? 0 : x1 + 1;
}, 100);



