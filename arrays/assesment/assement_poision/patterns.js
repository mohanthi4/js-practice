const filledRectanglePattern = (row, coloum) => {
  let pattern = [];

  for (let index = 0; index < row; index++) {
    pattern.push("*".repeat(coloum));
  }

  return pattern;
}

const hollowRectanglePattern = (row, coloum) => {
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

const generateSymbol = (number, char) =>
  char[number % char.length];


const alternatingRectanglePattern = (row, coloum, char = "*-") => {
  let pattern = [];

  for (let index = 0; index < row; index++) {
    const symbol = generateSymbol(index, char);
    pattern.push(symbol.repeat(coloum));
  }
  return pattern;
}

const spacedAlternatingRectanglePattern = (row, coloum) =>
  alternatingRectanglePattern(row, coloum, "*- ");


const patternStyles = (style, row, coloum) => {
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

export const generatePattern = (style, dimensions) => {
  const row = dimensions[1];
  const coloum = dimensions[0];
  let pattern = [];

  if (coloum === 0 || row === 0) {
    return pattern.join("");
  }

  pattern = patternStyles(style, row, coloum);
  return pattern.join("\n");
}

