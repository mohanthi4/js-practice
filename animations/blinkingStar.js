const screen = [
  "          ".split(),
  "          ".split(),
  "          ".split(),
  "          ".split(),
  "          ".split(),
];

const screenClear = (screen) => {
  for (const i in screen) {
    for (const j in screen[i]) {
      screen[i][j] = " ";
    }
  }
};

const drawOnScreen = (screen, x, y, character) => {
  screen[x][y] = character;
  return screen.map((x) => x.join("")).join(" ");
};

let x = 0;
let y = 0;

setInterval(() => {
  x = x < 4 ? x + 1 : 0;
  y = y < 4 ? y + 1 : 0;
  screenClear(screen);

  console.log(drawOnScreen(screen, x, y, `\x1B[5m*\x1B[0m`));
}, 500);
