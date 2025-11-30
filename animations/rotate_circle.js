const makeScreen = (rows, cols) => {
  let screen = [];
  let line = 0;
  while (line < rows) {
    screen.push(" ".repeat(cols).split(""));
    line++;
  }
  return screen;
};

const screen = makeScreen(20, 20);

const screenClear = (screen) => {
  for (const i in screen) {
    for (const j in screen[i]) {
      screen[i][j] = " ";
    }
  }
};

const points = (radius,angle) => {
  let x = Math.floor((radius * Math.cos(angle * 0.0174) + radius));
  let y = Math.floor((radius * Math.sin(angle * 0.0174) + radius));
  return [x, y];
}

const drawCircle = (screen, x, y, character) => {
  screen[x][y] = character;
  return screen.map((e) => e.join("")).join("\n");
};

let radius = 8;
let angle = 1;
  
setInterval(() => {
  console.clear();
  // screenClear(screen);
  const [x, y] = points(radius, angle++);
  console.log(drawCircle(screen, x, y, "*"));
  
},10)