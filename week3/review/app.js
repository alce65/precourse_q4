import main, { y as w, z } from './constants.js';
import { sumNumbers, shortSumNumbers } from './sum.numbers.js';
import { foo, bar, arrowBar, addMulti } from './tools.js';

const y = 3;
console.log(main);
console.log(w);
console.log(z);

foo(w);
foo(45);
bar();
arrowBar();
arrowBar(5);

console.log(addMulti(1, 2, 3, 4, 5)); // 15
console.log(addMulti([1, 2, 3], 4, 5)); // 15
console.log(addMulti([1, 2, 3])); // 6
console.log(addMulti('pepe'));

// console.log(addMulti([1, [2, [3, 4], 5]])); //
// console.log(addMulti());

console.log(sumNumbers(10, 24, 37)); // 71
console.log(sumNumbers([1, 2, 3], 4, [7])); // 17
console.log(sumNumbers([1, [2], 3], 4, [7]));

console.log(shortSumNumbers(10, 24, 37)); // 71
console.log(shortSumNumbers([1, 2, 3], 4, [7])); // 17
console.log(shortSumNumbers([1, [2], 3], 4, [7]));
