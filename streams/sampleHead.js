export const encode = (data) => new TextEncoder().encode(data);

export async function writeWholeData(data) {
  const writer = Deno.stdout.writable.getWriter();
  await writer.write(data);
  writer.releaseLock();
}

export const main = () => {
  const input = "1\n2\n3\n4\n5";
  const encodedData = encode(input);
  writeWholeData(encodedData);
};

main();
