const data = Deno.stdin.readable.getReader();
await data.read();
data.releaseLock();