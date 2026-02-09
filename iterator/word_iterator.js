const myIterator = {
  data: "i want to know how\nyou are working ",
  index: 0,
  next() {
    const spaceIndex = this.data.indexOf(" ", this.index);
    if (spaceIndex < 0) {
      return { done: true };
    }
    const word = this.data.slice(this.index, spaceIndex);
    this.index = spaceIndex + 1;
    return { value: word, done: false };
  },
  [Symbol.iterator]() {
    return this;
  },
};


console.log([...myIterator]);