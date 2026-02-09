function* line_generator() {
  const text = "i want to know how\nyou are working";
  let index = 0;
  let lineIndex = 0;
  while (lineIndex >= 0) {
    lineIndex = text.indexOf("\n", index);
    yield text.slice(index, lineIndex < 0 ? text.length : lineIndex);
    index = lineIndex + 1;
  }
}



function* word_generate(text) {
  let index = 0;
  let spaceIndex = 0;
  while (spaceIndex >= 0) {
    spaceIndex = text.indexOf(" ", index);
    yield text.slice(index,  spaceIndex < 0 ? text.length : spaceIndex);
    index = spaceIndex + 1;
  }
}

const iterateLine = line_generator();
const { line } = iterateLine.next()
const iterateWord = word_generate(line);

// function* word_generate() {
//   const text = "i want to know how\nyou are working";
//   let index = 0;
//   let spaceIndex = text.indexOf(" ", index);
//   let lineIndex = text.indexOf("\n", index);
//   while (spaceIndex >= 0 && spaceIndex < text.length) {
//     if (spaceIndex > lineIndex && lineIndex >=0) {
//       yield text.slice(index, lineIndex);
//       index = lineIndex + 1;
//       lineIndex = text.indexOf("\n", index);
//     } else {
//       yield text.slice(index, spaceIndex);
//       index = spaceIndex + 1;
//       spaceIndex = text.indexOf(" ", index);
//     }
//   }
// }

// const iteration = word_generate();
