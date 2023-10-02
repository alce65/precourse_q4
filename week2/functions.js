// Declaración

function fooDeclared() {}

// Asignación

const fooArrow = () => {};

const foo = function () {
  console.log(`Soy foo`);
};

foo.user = "Pepe";

console.log(foo);
foo();

const push = (array, value) => {
  array[array.length] = value;
  return array.length;
};

const data = [1, 5];
console.log(push(data, 20));
console.log(data);
