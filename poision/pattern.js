
function filledRectanglePattern(row, coloum) {
  let pattern = [];

  for (let index = 0; index < row; index++) {
    pattern.push("*".repeat(coloum));
  }

  return pattern;
}

function hollowRectanglePattern(row, coloum) {
  let pattern = [];

  if (row < 3 || coloum < 3) {
    return filledRectanglePattern(row, coloum);
  }

  pattern.push("*".repeat(coloum));

  for (let rowIndex = 1; rowIndex < row - 1; rowIndex++) {
    pattern.push("*" + " ".repeat(coloum - 2) + "*");
  }

  pattern.push("*".repeat(coloum));
  return pattern;
}

function generateSymbol(number, char) {
  return char[number % char.length];
}

function alternatingRectanglePattern(row, coloum, char = "*-") {
  let pattern = [];

  for (let index = 0; index < row; index++) {
    const symbol = generateSymbol(index, char);
    pattern.push(symbol.repeat(coloum));
  }
  return pattern;
}

function spacedAlternatingRectanglePattern(row, coloum) {
  return alternatingRectanglePattern(row, coloum, "*- ");
}

function patternStyles(style, row, coloum) {
  if (style === "filled-rectangle") {
    return filledRectanglePattern(row, coloum);
  }

  if (style === "hollow-rectangle") {
    return hollowRectanglePattern(row, coloum);
  }

  if (style === "alternating-rectangle") {
    return alternatingRectanglePattern(row, coloum);
  }

  if (style === "spaced-alternating-rectangle") {
    return spacedAlternatingRectanglePattern(row, coloum);
  }

  if (style === "triangle") {
    return spacedAlternatingRectanglePattern(coloum);
  }
}

function generatePattern(style, dimensions) {
  const row = dimensions[1];
  const coloum = dimensions[0];
  let pattern = [];

  if (coloum === 0 || row === 0) {
    return pattern.join("");
  }

  pattern = patternStyles(style, row, coloum);
  return pattern.join("\n");
}


// function outputFragment(style, dimensions, expected, actual) {
//   return `${style} ${dimensions} expected :\n${expected}\nactual :\n${actual}`;
// }

// function resultMessage(gist, style, dimensions, expected, actual) {
//   const symbol = expected === actual ? "✅" : "❌";

//   if (symbol === "❌") {
//     const values = outputFragment(style, dimensions, expected, actual);
//     return symbol + gist + values;
//   }

//   return symbol + gist;
// }


function testGeneratePattern(gist, style, dimensions, expected) {
  const actual = generatePattern(style, dimensions);
  const message = resultMessage(gist, style, dimensions, expected, actual);

  console.log(message);
}

// function filledRectangleTestCases() {
//   console.log("filled-rectangle:");

//   testGeneratePattern("coloum is zero ", "filled-rectangle", [0, 5], "");
//   testGeneratePattern("row is zero ", "filled-rectangle", [7, 0], "");
//   testGeneratePattern("2 * 4", "filled-rectangle", [2, 4], `**\n**\n**\n**`);
//   testGeneratePattern("5 * 3", "filled-rectangle", [5, 3], `*****\n*****\n*****`);
// }

// function hollowRectangleTestCases() {
//   console.log("\nhollow rectangle:");

//   testGeneratePattern("coloum is zero ", "hollow-rectangle", [0, 5], "");
//   testGeneratePattern("row is zero ", "hollow-rectangle", [4, 0], "");
//   testGeneratePattern("row is one ", "hollow-rectangle", [5, 1], "*****");
//   testGeneratePattern("coloum is one ", "hollow-rectangle", [1, 5], "*\n*\n*\n*\n*");
//   testGeneratePattern("3 * 4", "hollow-rectangle", [4, 3], "****\n*  *\n****");
//   testGeneratePattern("4 * 5", "hollow-rectangle", [5, 4], "*****\n*   *\n*   *\n*****");
//   testGeneratePattern("2 * 6", "hollow-rectangle", [6, 2], "******\n******");
// }

// function alternatingRectangleTestCases() {
//   console.log("\nalternating-rectangle");

//   testGeneratePattern("coloum is zero ", "alternating-rectangle", [0, 5], "");
//   testGeneratePattern("row is zero ", "alternating-rectangle", [5, 0], "");
//   testGeneratePattern("row is one ", "alternating-rectangle", [4, 1], "****");
//   testGeneratePattern("row is two", "alternating-rectangle", [4, 2], "****\n----");
//   testGeneratePattern("3 * 3", "alternating-rectangle", [3, 3], "***\n---\n***");
//   testGeneratePattern("row is 4 ", "alternating-rectangle", [5, 4], "*****\n-----\n*****\n-----");
// }

// function spacedAlternatingRectangleTestCases() {
//   console.log("\nspaced alternating rectangle:");

//   testGeneratePattern("coloum is zero ", "spaced-alternating-rectangle", [0, 5], "");
//   testGeneratePattern("row is zero ", "spaced-alternating-rectangle", [2, 0], "");
//   testGeneratePattern("3 * 4", "spaced-alternating-rectangle", [3, 4], "***\n---\n   \n***");
// }
// function triangleTestCases() {
//   console.log("\ntriangle:");

//   testGeneratePattern("zero triangle", "triangle", [0], "");
// }

// function allTestCases() {
//   filledRectangleTestCases();
//   // hollowRectangleTestCases();
//   // alternatingRectangleTestCases();
//   // spacedAlternatingRectangleTestCases();
//   // triangleTestCases();
// }

// allTestCases();

function test(args) {
 const pattern = patternStyles(args[0], args[2], args[1]);
 console.log(pattern.join("\n"));
 
}

test(Deno.args);
