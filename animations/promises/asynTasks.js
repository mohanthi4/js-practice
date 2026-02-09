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


const TASKS = [
  [{task1:()=> tasks(20,100)}],
  [{task2:()=> tasks(30,100)}]
]

 
const data = TASKS.reduce((p, val) =>  p.then(()=>tasks(val, 1000)), Promise.resolve(10));
