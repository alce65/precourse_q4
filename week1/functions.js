// declaration

function foo() {
  const message = "Hola soy foo";
  console.log("Dentro de foo", message);
  return message;
}

// assignation
const bar = function () {
  console.log("Hola soy bar");
};

const arrow = () => {
  console.log("Hola soy arrow");
};

const add = (a = 0, b = 0, ...rest) => {
  if (rest.length) {
    console.log("Demasiados Argumentos");
    return;
  }
  const result = a + b;
  return result;
};

const x = foo();
bar();
arrow();
console.log("Esto es x, fuera de foo:", x);
console.log("Add vacío", add());
console.log("Add 4", add(4));
console.log("Add 5 y 6", add(5, 6));
