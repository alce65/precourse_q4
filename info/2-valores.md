# Valores

Son los datos con los que trabajan los programas o las partes de ellos que llamaremos funciones

Típicamente una función

- recibe datos
- hace operaciones con ellos
- si es necesario devuelve un resultado (nuevamente un dato)

```js
 function addIVA(a) {
  return a * 1.22
 }

  console.log(addIVA(100))
  
```

## Tipos de datos: primitivos v referenciados

### Tipos primitivos

- simples elementos "atómicos" de información
- se manipulan "por valor"
- son inmutables

1. undefined
2. null (por error, typeof lo refiere como 'object')
3. number
4. string
5. boolean
6. bigint [_🗓️ES2020_]
7. symbol [_🗓️ES2015_]

### Tipos referenciados

- objetos formados por múltiples elementos de información
- se manipulan por referencia
- son mutables: sus propiedades cambian de forma dinámica

8. object

Las funciones son también object, aunque typeof las refiere como function

```js
  console.log(undefined, typeof undefined); // undefined undefined
  console.log(12, typeof 12); // 12 number
  console.log('pepe', typeof 'pepe'); // pepe string
  console.log(true, typeof true); // true boolean
  console.log(null, typeof null, 'mentira, es null'); // null object mentira, es null
  console.log(0n, typeof 0n); // 0n bigint
  console.log(Symbol(''), typeof Symbol('')); // Symbol() symbol
  console.log({}, typeof {}); // {} object
  console.log(() => {}, typeof (() => {}), 'también es object');
  // [Function (anonymous)] function también es object
```

## Mutabilidad de los objetos

NOTA: Para explicar estos conceptos, asociamos los datos a **variables**, tema en el que profundizaremos a continuación

Las propiedades de los objetos cambian de forma dinámica, lo que se conoce como mutabilidad

```js
  const obj = {
    name: 'Pepe',
    age: 22
  }
  // Añadimos propiedades
  obj.lastName = 'Perez'
  // Modificamos propiedades
  obj.name = 'Jose'
  // Eliminamos propiedades
  delete obj.age
  console.log(obj)
```

Existen diferentes 'variaciones' del tipo objeto, con peculiaridades que veremos

Especialmente importante es el caso de los **arrays**, objetos en los que nos referimos a las distintas propiedades por su índice numérico, empezando desde 0

```js
  const aData = [1, 3, 5, 2, 8]
  console.log(aData, typeof aData) // ..., object
```

Igual que otros objetos, los arrays también pueden mutar, añadiendo nuevos items, cambiando el valor de los que tienen o perdiendo alguno de ellos

```js
  const data = [10, 20, 30];
  console.log(data); // [ 10, 20, 30 ]
  data[1] = 22;
  console.log(data); // [ 10, 22, 30 ]
  data[3] = 43;
  console.log(data); // [ 10, 22, 30, 43 ]
  data.length = 2;
  console.log(data); // [ 10, 22 ]
```
