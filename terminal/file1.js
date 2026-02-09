import { equal } from "jsr:@std/assert";

const display = (x, y, color) =>
  console.log(`\x1B[${y};${x}H\x1B[${color}m \x1B[0m`);

const isStart = (x, y) => startPosition.x === x && startPosition.y === y;
const isEnd = (x, y) => endPosition.x === x && endPosition.y === y;

const checkWinPosition = (x, y) => {
  if (isStart(x, y)) {
    return 2;
  }
  if (isEnd(x, y)) {
    return 1;
  }
};

const gameRuns = async (reader, playerMoves) => {
  const { value, done } = await reader.read();
  let count = 0;
  if (done) {
    return;
  }
  const [e, x, y] = value.slice(3, 6);
  const [event, positionX, positionY] = [e - 32, x - 32, y - 32];
  if (event === 0) {
    playerMoves.push([positionX, positionY]);
  }
  display(positionX, positionY, "43");
  // count = count + checkWinPosition(positionX, positionY);
  if (count === 3) {
    return;
  }
  gameRuns(reader, playerMoves);
};

const mouseActivation = async () => {
  const writer = Deno.stdout.writable.getWriter();
  const mouseEnable = "\x1b[?1002h";
  const encoder = new TextEncoder();
  await writer.write(encoder.encode(mouseEnable));
};

const gameStarts = () => {
  const playerMoves = [];
  const reader = Deno.stdin.readable.getReader();
  gameRuns(reader, playerMoves);
};

const startPosition = { x: 5, y: 10 };
const endPosition = { x: 10, y: 20 };

const main = () => {
  Deno.stdin.setRaw(true, { cbreak: true });

  mouseActivation();
  display(startPosition.x, startPosition.y, "42");
  display(endPosition.x, endPosition.y, "42");
  gameStarts();
};

main();
