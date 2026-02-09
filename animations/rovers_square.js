const makeScreen = (rows, cols) => {
  let screen = [];
  let line = 0;
  while (line < rows) {
    screen.push(" ".repeat(cols).split(""));
    line++;
  }
  return screen;
};

const screen = makeScreen(5, 9);

const drawOnScreen = (screen, x, y, character) => {
  screen[x][y] = character;
  return screen.map((e) => e.join("")).join("\n");
};

// const dbg = function (x) {
//   console.log("value>>>>>", x);
//   return x;
// };

const movement = {
  N: (vector) => vector.yAxis += 1,
  E: (vector) => vector.xAxis += 1,
  S: (vector) => vector.yAxis -= 1,
  W: (vector) => vector.xAxis -= 1,
};

const directionChange = function (cuurentDirection, turn) {
  const directions = ["E", "S", "W", "N", "E"];
  const finalDirection = {
    left: directions[directions.lastIndexOf(cuurentDirection) - 1],
    right: directions[directions.indexOf(cuurentDirection) + 1],
  };
  return finalDirection[turn];
};

const checkInstruction = {
  M: (vector) => {
    movement[vector.direction](vector);
    return vector;
  },

  L: (vector) => {
    vector.direction = directionChange(vector.direction, "left");
    return vector;
  },

  R: (vector) => {
    vector.direction = directionChange(vector.direction, "right");
    return vector;
  },
};

// const finalDirection = ({ xAxis, yAxis, direction, status }) =>
//   `${xAxis} ${yAxis} ${direction}${status}`;

const outOfBound = (value, maxValue, minValue = 0) =>
  value > maxValue || value < minValue;

let instructions = "MMMMLMMMMLMMMMLMMMM".split();
let ranges = {
  maxOfX: 5,
  maxOfY: 5,
  minOfX: 0,
  minOfy: 0,
};

let vector = { xAxis: 0, yAxis: 0, direction: "E" };
let i = 0;
let max = instructions.length;

const squareID = setInterval(() => {
  console.clear();
  let navigation = instructions[i];
  let currentStatus = { ...vector };
  checkInstruction[navigation](vector);
    if (
      outOfBound(vector.xAxis, ranges.maxOfX, ranges.minOfX) ||
      outOfBound(vector.yAxis, ranges.maxOfY, ranges.minOfy)
    ) {
      currentStatus["status"] = " RIP";
      console.log("RIP")
    }
    currentStatus = { ...vector };
  console.log(drawOnScreen(screen, currentStatus.xAxis, currentStatus.yAxis, "*"));
  i = i < max ? i + 1 : clearInterval()
}, 500);