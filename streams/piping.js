await Deno.stdin.readable.pipeTo(Deno.stdout.writable);

// async function main() {
//   const writer = Deno.stdout.writable.getWriter();
//   await writer.write("Hello\n");
//   writer.releaseLock();
// }

// main();