console.log("Tipos primitivos");
let x;
console.log(x, typeof x);
x = "Alfredo 😍";
console.log(x, typeof x);
x = 29;
console.log(x, typeof x);
x = true;
console.log(x, typeof x);
x = null;
console.log(x, typeof x, "mentira, es null");
x = 29n;
console.log(x, typeof x);
x = Symbol("");
console.log(x, typeof x);

console.log("Objetos");
x = {};
console.log(x, typeof x);
x = [];
console.log(x, typeof x);
x = () => {};
console.log(x, typeof x);

const obj = {
  name: "",
};
obj.name = "Pepe";
obj.age = 23;
console.log(obj);
obj = { name: "Pepe", age: 23 };
