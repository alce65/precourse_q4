# Expresiones y operadores

## Instrucciones o sentencias (statements)

- simples
  - declaración de variables
  - asignación de valores: assignment: A:= A + 5
  - assertion: assert(ptr != NULL);
  - llamada a funciones y métodos: call…
  - devolución de valores y del control: return …

- complejas (control de flujo)
  - creación de bloques de código: block: begin … end
  - bifurcaciones en función de condiciones: if  / switch
  - iteraciones en bloques de código (bucles): while / do / for:

Las instrucciones (statements) no tienen que devolver resultados.
Muchas veces son ejecutadas únicamente por los efectos que tienen (side effects).

## Expresiones (Expressions)

Siempre se evalúan (devuelven) a un único resultado.
A menudo no tienen efectos (side effects) en si mismas

Se componen de

- valores literales
- variables o constantes
- operadores

Según el uso de estos elementos tendremos distintos tipos de expresiones

- expresiones literales: valores
- expresiones de identificador (variables)
- expresiones de asignación y de los diversos tipos de operadores (aritméticas, de comparación, lógicas)
- expresiones de ejecución (llamadas a funciones)

La mayoría de las expresiones están en realidad compuestas de múltiples expresiones:

- Expresión de asignación basada en una expresión literal

```js
const a = 22
```

- Expresión de asignación basada en una expresión aritmética, que a su vez utiliza un literal y una expresión de identificador

```js
const b = a + 22
```

## Operadores

Los operadores pueden ser de diversos tipos

### Operadores primarios

Son palabras clave básicas y expresiones con la máxima precedencia frente a otros operadores:

- literales
- `[]`, `{}`, `//`, `()`
- `function`
- `this`
- ` `` ` [_🗓️ES2015_]: template strings
- `class` [_🗓️ES2015_]: clases en ES6
- `async` [_🗓️ES2017_]: funciones asíncronas

### Operadores del lado izquierdo (left-hand-side)

Ayudan a definir la parte izquierda de una asignación

- accessors de las propiedades:
  - punto (`.`) y corchetes (`[]`)
  - optional chaining (`?.`) [_🗓️ES2019_]
- `new`
- `super` [_🗓️ES2015_]: referencia a la clase padre en ES6 
- `import`() [_🗓️ES2020_]: imports dinámicos en los módulos ESM
- `import.meta` [_🗓️ES2020_]: metadatos en los módulos

Como veremos al hablar de los objetos, El optional chaining (`?.`) devuelve undefined en lugar de causar un error si la referencia es **nullish** (null or undefined).

```js
  let x;
  console.log(x.address); // undefined
```

### Operadores de asignación

```js
  let x = 22;
  console.log(x); // 22
```

### Operadores de incremento y decremento

```js
  let x = 22;
  console.log(++x); // 23
  console.log(--x); // 22
  x = 30;
  console.log(x++); // 30
  console.log(x); // 31
  x = 30;
  console.log(x--); // 30
  console.log(x); // 29
```

### Operadores aritméticos

- Los símbolos de las cuatro operaciones aritméticas básicas: `+`, `-`, `*`, `/`
- El módulo o resto de la división entera: `%`
- El operador exponente (`**`) [_🗓️ES2016_]

```js
  const a = 5;
  const b = 2;
  console.log(a + b); // 7
  console.log(a - b); // 3
  console.log(a * b); // 10
  console.log(a / b); // 2.5
  console.log(a % b); // 1 (módulo o resto)
  console.log(a ** b); // 25 (exponente)
```

### Operadores aritméticos + asignación

```js
  let x = 2;
  x += 2;
  console.log(x); // 4
  x -= 2;
  console.log(x); // 2
  x *= 2;
  console.log(x); // 4
  x /= 2;
  console.log(x); // 2
  x **= 2;
  console.log(x); // 4
  x %= 2;
  console.log(x); // 0
```

### Operadores unarios

- operadores de signo (`+`, `-`)
- `delete`, `void`, `typeof`, `await`
- logical NOT (`!`)

```js
  let x = 2;
  let y = -2;
  console.log(+x, -x);
  console.log(+y, -y);
```

### Operadores relacionales y de igualdad

- símbolos de comparación
- `instanceof`
- `in`

Devuelven en todos los casos el valor booleano resultante de la operación

```js
  const a = 2;
  const b = 3;
  console.log(a == b); // false
  console.log(a != b); // true
  console.log(a >= b); // false
  console.log(a <= b); // true
  console.log(a > b); // false
  console.log(a < b); // true
  console.log(a === b); // false
  console.log(a !== b); // true
  console.log([] instanceof Array); // true
  console.log(3 in [1, 2]); // false
```

### Operador ternario

```js
  let age = 15;
  console.log(age >= 18 ? 'Mayor de edad' : 'Menor');
  age = 23;
  console.log(age >= 18 ? 'Mayor de edad' : 'Menor');
```

### Operadores de cadena

El operador de concatenación tiende a dejar de ser utilizado debido al empleo de template strings

```js
  const a = 'Pepe';
  const b = 'Perez';
  console.log(a + ' ' + b); // Pepe Perez
  console.log(`${a} ${b}`); // Pepe Perez
```

### Operadores lógicos

- AND (`&&`), OR (`||`)
- el operador unario logical NOT (`!`)
- nullish coalescing (`??`) [_🗓️ES2019_]: evalúa el segundo término sólo si el primero es **nullish** (null or undefined)

```js
  const a = 22;
  const b = 'Pepe';

  console.log(a && b); // Pepe
  console.log(a || b); // 22
  console.log(!a && b); // false
  console.log(a ?? b); // 22
  console.log(null ?? b); // 'Pepe'
  console.log(undefined ?? b); // 'Pepe'
```

### Operadores lógicos + asignación

[_🗓️ES2021_] Logical Assignment Operators

- `||=` (Or Or Equals): solo si el operando de la izquierda es falsy, evalúa el operando de la derecha y lo asigna
- `&&=` (And And Equals): solo si el operando de la izquierda es truthy, evalúa el operando de la derecha y lo asigna
- `??=` (QQ Equals): solo si el operando de la izquierda es nullish, evalúa el operando de la derecha y lo asigna

```js
  let x = 1;
  let y = 2;
  x ||= y; // x || (x = y);
  console.log(x); // 1

  x &&= y; // x && (x = y);
  console.log(x); // 2

  x = 1;
  x ??= y; // x ?? (x = y);
  console.log(x); // 1
  x = null;
  x ??= y; // x ?? (x = y);
  console.log(x); // 2
```

### Otros Operadores

- operador `,`
- operador spread/rest (`...`) [_🗓️ES2015_]

No se recogen los diversos tipos de operadores binarios, que no usaremos.

Lo mismo sucede con el operador `yield`, usado en los generadores, que tampoco veremos [_🗓️ES2015_]
