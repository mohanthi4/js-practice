const makeScreen = (rows, cols) => {
  let screen = [];
  let line = 0;
  while (line < rows) {
    screen.push(" ".repeat(cols).split(""));
    line++;
  }
  return screen;
};

const screen = makeScreen(5, 10);

const screenClear = (screen) => {
  for (const i in screen) {
    for (const j in screen[i]) {
      screen[i][j] = " ";
    }
  }
};

const drawOnScreen = (screen, x, y, character) => {
  // console.log(x,y,character)
  let i = y;
  while (i > 0) {
    screen[x][i] = screen[x][i - 1];
    i--;
  }
  screen[x][i] = character;
  return screen.map((e) => e.join("")).join("\n");
};

let horizontalX = 0;
let str = "hello";
str = " ".repeat(9 - str.length) + str;
let i = str.length - 1;

const horizontalid = setInterval(() => {
  console.clear();
  console.log(drawOnScreen(screen, 0, horizontalX, str.charAt(i)));
  if (horizontalX >= 9) {
    i = str.length - 1;
    horizontalX = 0;
  } else {
    i = i - 1;
    horizontalX = horizontalX + 1;
  }
}, 500);
