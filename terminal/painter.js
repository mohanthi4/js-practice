const display = (x, y, color) =>
  console.log(`\x1B[${y};${x}H\x1B[${color}m \x1B[0m`);

const isStart = (x, y) => startPosition.x === x && startPosition.y === y;
const isEnd = (x, y) => endPosition.x === x && endPosition.y === y;

const checkWinPosition = (x, y) => {
  if (isStart(x, y)) {
    return 2;
  }
  if (isEnd(x, y)) {
    return 3;
  }
  return 0;
};

const gameOver = () => {
  console.log(`\x1B[2J \x1B[5;10H wins 🏆`);
};

const gameRuns = async (reader, count = 0) => {
  const { value, done } = await reader.read();
  if (done) {
    return;
  }
  const [x, y] = value.slice(4, 6);
  const [positionX, positionY] = [x - 32, y - 32];
  display(positionX, positionY, "43");
  count = count + checkWinPosition(positionX, positionY);
  if (count === 5) {
    gameOver();
    return;
  }
  gameRuns(reader, count);
};

const activateMouse = async () => {
  Deno.stdin.setRaw(true, { cbreak: true });
  const writer = Deno.stdout.writable.getWriter();
  const mouseEnable = "\x1b[?1002h";
  const encoder = new TextEncoder();
  await writer.write(encoder.encode(mouseEnable));
};

const gameStarts = () => {
  const reader = Deno.stdin.readable.getReader();
  display(startPosition.x, startPosition.y, "42");
  display(endPosition.x, endPosition.y, "42");
  gameRuns(reader);
};

const startPosition = { x: 5, y: 10 };
const endPosition = { x: 10, y: 20 };

const main = () => {
  activateMouse();
  gameStarts();
};

main();
