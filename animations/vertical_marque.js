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
screen[x][9] = screen[x][9].slice(0, y - 1);

// const drawOne = (screen, x, y, character) => {
//   console.log(x, y, character);
//   let i = y;
//   while (i > 0) {
//     screen[x][i] = screen[x][i - 1];
//     i--;
//   }
//   screen[x][i] = character;
//   return screen.map((e) => e.join("")).join("\n");
// };

const drawOnScreen = (screen, x, y, character) => {
  console.log(x, y, character);
  screen[x][y] = character;
  if (y === 9) {
    return screen.map((e) => e.join("")).join("\n");
  }
};

let x = 0;
let y = 0;

let str = "hello";
str = " ".repeat(9 - str.length) + str;
let i = str.length - 1;

setInterval(() => {
  console.clear();
  screenClear(screen);
  console.log(drawOnScreen(screen, x, y, "hello"));
  y = y < 9 ? y + 1 : 0;
}, 500);
