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

// const t = Promise.resolve(10).then(() => tasks(100, 1000))
 
// const data = [200, 300].reduce((p, val) =>  p.then(()=>tasks(val, 1000))
// , Promise.resolve(10));

