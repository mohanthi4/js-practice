const makeScreen = (xAxix, yAxix) => {
  let screen = [];
  let i = 0;
  while (i < xAxix) {
    screen.push(" ".repeat(yAxix).split(""));
    i++;
  }
  return screen;
};

const screen = makeScreen(5, 9);

const drawOnScreen = (screen, x, y, pattern) => {
  screen[x][y] = pattern;
  return screen.map((e) => e.join("")).join("\n");
};

let verticalX1 = 0;
// vertical - at front:
const verticalUp = setInterval(() => {
  console.clear();
  console.log(drawOnScreen(screen, verticalX1, 0, "*"));
  verticalX1 = verticalX1 < 4 ? verticalX1 + 1 : clearInterval(verticalUp);
}, 500);

let horizontalY1 = 0;
//horizontal - at top:
const horizontalTop = setInterval(() => {
  console.clear();
  console.log(drawOnScreen(screen, 0, horizontalY1, "* "));
  horizontalY1 = horizontalY1 < 4
    ? horizontalY1 + 1
    : clearInterval(horizontalTop);
}, 500);

let vertcailX2 = 3;
// vertical - at back:
const verticalDown = setInterval(() => {
  console.clear();
  console.log(drawOnScreen(screen, vertcailX2, 8, "*"));
  vertcailX2 = vertcailX2 > 1 ? vertcailX2 - 1 : clearInterval(verticalDown);
}, 500);

let horizontalY2 = 4;
// horizontal - at bottom:
const horizontalBottom = setInterval(() => {
  console.clear();
  console.log(drawOnScreen(screen, 4, horizontalY2, "* "));
  horizontalY2 = horizontalY2 > 0
    ? horizontalY2 - 1
    : clearInterval(horizontalBottom);
}, 500);
