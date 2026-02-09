function oneIncrement(twoValues) {
  twoValues[0] = twoValues[0] + 1;
  twoValues[1] = twoValues[1] + 1;
  return twoValues;
}

function testOneIncrement(value1,value2) {
  const values = [value1, value2];
  oneIncrement(values);
  console.log(values);
  
}

testOneIncrement(2,4);