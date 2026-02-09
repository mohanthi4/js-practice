try {
  setInterval(() => {
    console.log("i am inside time")
    throw "my world is error" 
  }, 1000)

  console.log("welcome");
  throw "error no1";

} catch {
  console.log("haha i came");
  // throw "error no2";
}
