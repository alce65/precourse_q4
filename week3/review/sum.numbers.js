export function myForeach(array = [10, 24, 37], callback) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    callback(value);
  }
}

export const sumNumbers = (...rest) => {
  // console.log(rest);
  let result = 0;
  rest.forEach((item) => {
    if (Array.isArray(item)) {
      result += sumNumbers(...item);
    } else {
      result += item;
    }
  });

  //   let result = 0;
  //   for (const item of rest) {
  //     if (Array.isArray(item)) {
  //       for (const number of item) {
  //         result += number;
  //       }
  //     } else {
  //       result += item;
  //     }
  //   }
  return result;
};

export const shortSumNumbers = (...rest) => {
  let result = 0;
  rest.forEach((item) => {
    result += Array.isArray(item) ? sumNumbers(...item) : item;
  });
  return result;
};
