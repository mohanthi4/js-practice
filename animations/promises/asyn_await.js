const tasks = (value,time) => {
  const start = Date.now();

  return new Promise((res) => {
    setTimeout(() => {
      const end = Date.now();
      console.log(value, start, end);
      res(value)
    }, time);
  });
};

const dataGet = async () => {
  const d = await Promise.resolve(10).then(()=>tasks(20, 1000))
  console.log(d);
}

dataGet();  
console.log("start the work");

// const r = await 