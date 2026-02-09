
// unique function
export const unique = (data) =>
  data.flatMap(x => x).reduce((uniqueset, currentElement) => {
  if (!uniqueset.includes(currentElement)) {
    uniqueset.push(currentElement);
  }
  return uniqueset;
},[]);

// total function
export const total = (data) => 
  data.flatMap(x => x).reduce((finalValue, currentValue) => finalValue + currentValue,0);
