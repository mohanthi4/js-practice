// const writer = Deno.stdout.writable.getWriter();
// const textEncoder = new TextEncoder();
// const data = textEncoder.encode("hello\n");

// await writer.write(data);

const writer = Deno.stdout.writable.getWriter();
await writer.write(new TextEncoder().encode("Hello\n"));
writer.releaseLock();
