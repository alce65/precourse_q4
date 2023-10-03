// Function Declaration

export function foo(p) {
  console.log('Desde foo:', p);
}

// Declaration + Assignation of a expression

const n = 12;

// Declaration + Assignation of a functional expression (anonymous function)

export const bar = function (p) {
  let a = 0;
  console.log('Desde bar:', p);
};

export const arrowBar = (p = 0) => {
  console.log('Desde arrowBar:', p);
};

const sumaArray = (data) => {
  let result = 0;
  data.forEach((item) => (result += item));
  return result;
};

export const addMulti = (...rest) => {
  const data = rest.map((item) => {
    if (Array.isArray(item)) {
      return sumaArray(item);
    } else {
      return item;
    }
  });

  return sumaArray(data);
};
