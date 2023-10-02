const obj = {
  age: 22,
  name: "Pepe",
  surname: "Perez",
  isAlumno: true,
  greetings: function () {
    console.log(`Hola, soy ${this.name}`);
  },
  address: {
    street: "c/ del Pez",
    number: 12,
    city: "Cádiz",
  },
};

// Mutabilidad

obj.age = 23;
obj.height = 178;
delete obj.isAlumno;
console.log(obj);

// Acceso a propiedades

console.log(obj.name);
console.log(obj.address.city);
console.log(obj.pets);
console.log(obj.pets?.dog);

const user = "Anita";

const x = "22";
console.log(x / 3);
typeof x;

console.log(user.toUpperCase());
// Error user.height = 178;

console.log(typeof null);
// Error console.log((null.x = 22));

function myConcat(str, ...others) {
  const result = str;

  for (const iterator of others) {
    result += iterator;
  }
  return result;
}

myConcat("Pepe", "a", "b", "e");

console.log("Pepe", "a", "b", "e");

const text = "Esto es una frase no muy larga";

text.split(" ").reverse().join("").toUpperCase();

const t = String(22);
String.fromCharCode();

const n = 22;

n.toFixed(2);
n.isInteger();
Number.isInteger(n);
Boolean;
