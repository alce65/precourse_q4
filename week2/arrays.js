const obj = {
  name: "Pepe",
  age: 33,
};

const data = ["Pepe", 33];
data[data.length] = 88;
data[3] = "Raul";
console.log(data);
console.log(typeof data);
data.name = "Array";
console.log(data);
console.log(data.length);
data[30] = "Paco";
console.log(data);
console.log(data[13]);
console.log(data[139]);
data.length = 3;
delete data.name;
console.log(data);

const items = ["", "", ""];

console.log(items.push(2));
console.log(items);

const newArray = items.concat([1, 4, 6]);
console.log(items);
console.log(newArray);
