function alternatingRectanglePattern(row, coloum) {
  let pattern = ``;
  let patternSymbol = "*";
  for (let index = 1; index < row; index++) {
    if (index % 2 === 0) {
      patternSymbol = "*";
    }
    pattern = pattern + patternSymbol.repeat(coloum) + "\n";
    patternSymbol = "-";
  }

  pattern = pattern + patternSymbol.repeat(coloum);
  return pattern;
}


function spacedAlternatingRectanglePattern(row, coloum) {
  let pattern = ``;
  let count = 1;

  for (let index = 0; index < row; index++) {
  
    pattern = pattern + symbol.repeat(coloum);

    if (index < row - 1) {
      pattern = pattern + "\n";
    }
  }
}

const symbol = index % 2 === 0 ? "*" : "-";
    patternSymbol = index % 2 === 0 ? "-" : "*";


prom
