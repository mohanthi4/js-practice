import { equal } from "jsr:@std/assert";

const decoder = new TextDecoder();
const encoder = new TextEncoder();
const gameRuns = async (reader, playerMoves) => {
  const { value, done } = await reader.read();
  if (done) {
    return;
  }
  const [e, x, y] = value.slice(3, 6);
  const [event, positionX, positionY] = [e - 32, x - 32, y - 32];
  if (event === 0) {
    playerMoves.push([positionX, positionY]);
  }
  console.log(`\x1B[${positionY};${positionX}H\x1B[43m \x1B[0m`);
  gameRuns(reader, playerMoves);
};

const main = async () => {
  Deno.stdin.setRaw(true, { cbreak: true });
  const reader = Deno.stdin.readable.getReader();
  const writer = Deno.stdout.writable.getWriter();
  const mouseEnable = "\x1b[?1002h";
  await writer.write(encoder.encode(mouseEnable));
  console.log(`\x1B[5;10H\x1B[42m \x1B[0m`, `\x1B[10;20H\x1B[42m \x1B[0m`);
  const winPositions = [[5, 10], [10, 20]];
  const playerMoves = [];
  gameRuns(reader, playerMoves);
};

main();
