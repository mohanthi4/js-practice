// const encoder = new TextEncoder();

for await (const data of Deno.stdin.readable) {
  console.log(data);
}
