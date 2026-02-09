export const makeScreen = (height, width) => {
  return {
    width,
    height,
    pixels: Array.from({ length: height }, x => Array.from({ length: width }, y => " "))
  }
};

export const putCharAt = ()
