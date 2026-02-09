// Line 1: Simple variable declarations
const name = "mohanthi";
const version = 1.0;

// Line 4: Basic function
function greet(user) {
  const userName = "abcd";
  console.log("Hello, " + user);
}

// Line 8: Call the function
greet(name);

const array = [1,2,3,4]
for(const user of array){
  console.log(user);
}
// Line 11: Loop example
for (let i = 0; i < 5; i++) {
  console.log("Count: " + i);
}

// Line 16: Array with mixed items
const fruits = ["apple", "banana", "cherry", "banana", "banana"];

// Line 19: Search banana occurrences
function countBananas(list) {
  const tabVar = 5;
  return list.filter((x) => x === "banana").length;
}

// Line 23:
console.log("Bananas found:", countBananas(fruits));

// Line 26: Class definition
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(this.name + " says " + this.sound);
  }
}

// Line 36:
const dog = new Animal("Dog", "Woof");
dog.speak();

// Line 40: Object usage
const user = {
  id: 101,
  username: "test_user",
  role: "admin",
  active: true,
};

// Line 47: Log keys
Object.keys(user).forEach((key) => {
  console.log("Key:", key);
});

// Line 51: String operations
const msg = "Search this text with grep if you can";
console.log(msg.toUpperCase());

// Line 55: Regex test
const pattern = /test/;
console.log(pattern.test("This is a test line"));

// Line 59: Conditional
if (user.active) {
  console.log("User is active");
} else {
  console.log("User not active");
}

// Line 66: Map example
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map((n) => n * n);
console.log(squared);

// Line 71: Filter example
const even = numbers.filter((n) => n % 2 === 0);
console.log("Even:", even);

// Line 75: Reduce example
const sum = numbers.reduce((a, b) => a + b, 0);
console.log("Sum:", sum);

// Line 79: Multiple console logs for grep testing
console.log("INFO: System ready");
console.log("WARN: Low memory");
console.log("ERROR: Something went wrong");
console.log("INFO: Operation complete");
console.log("DEBUG: Testing debug line");

// Line 86: Random lines for grep complexity
const random1 = "alpha beta gamma";
const random2 = "delta epsilon zeta";
const random3 = "eta theta iota";
console.log(random1, random2, random3);

// Line 92: Function with same words for grep practice
function logger(level, message) {
  console.log(level + ": " + message);
}

logger("INFO", "This is a log message");
logger("ERROR", "Critical failure detected");
logger("INFO", "Restarting service");

// Line 100: End of file
console.log("END OF SCRIPT");
