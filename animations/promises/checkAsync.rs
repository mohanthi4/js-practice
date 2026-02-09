async function delay() {
  return await setTimeout(() => {
    return "done";
  }, 100);
}

const result = await delay();
console.log(result,"hi");