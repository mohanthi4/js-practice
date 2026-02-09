try {
  console.log("hi");
  throw "i am an error";
  console.log("hello");
} catch {
  console.error("oops");
  console.log("missing file");
}