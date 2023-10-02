"use strict";

const foo = () => {
  throw new Error("Probando errores");
  x = 22;
  return x;
};

try {
  console.log(foo());
} catch (error) {
  console.log(error.name, error.message);
}

const add = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("Parámetros inválidos");
  }

  return x + y;
};

try {
  console.log(add(3, "Pepe"));
  console.log(add(3, 6));
} catch (error) {
  console.log(error.message);
}

console.log("Fin de la aplicación");
