// - Iterate over lines of text
//   "this\nis\ngood" => ['this','is','good']

function* line_generator(text) {
  let index = 0;
  let lineIndex = 0;
  while (lineIndex >= 0) {
    lineIndex = text.indexOf("\n", index);
    yield text.slice(index, lineIndex < 0 ? text.length : lineIndex);
    index = lineIndex + 1;
  }
}

const text = "this\nis\ngood"
const iterateLine = line_generator(text);