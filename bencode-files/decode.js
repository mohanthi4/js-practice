function decode(data) {
  const decodeArray = [];

  if (data[0] === "i") {
    const end = data.indexOf("e");
    const decodedNumber = parseInt(data.slice(1, end));
    return decodedNumber;
  } 

  if (data[0] === "l") {
    const slicedArray = data.slice(1, data.length - 1);
    console.log(slicedArray);
    decodeArray.push(decode(slicedArray));
    return decodeArray;
  }

  return decodeArray;
}
