# Tipos de datos

El tipado de las variables en JS es

- débil: el tipo no se declara explícitamente, sino que se infiere del valor
- dinámico: el tipo de una variable puede cambiar, según cambia el valor

Por tanto los posibles tipos de las variables son los que ya vimos al hablar de los datos

```js
  let foo;
  console.log(foo, typeof foo);
  foo = 12;
  console.log(foo, typeof foo);
  foo = 'pepe';
  console.log(foo, typeof foo);
  foo = true;
  console.log(foo, typeof foo);
  foo = undefined;
  console.log(foo, typeof foo);
  foo = null;
  console.log(foo, typeof foo, 'mentira, es null');
  foo = 0n;
  console.log(foo, typeof foo);
  foo = Symbol('');
  console.log(foo, typeof foo);
  foo = {};
  console.log(foo, typeof foo);
  foo = () => {};
  console.log(foo, typeof foo, 'también es object');
```

## Tipos primitivos

1. undefined
2. null (por error, typeof lo refiere como 'object')
3. number
4. string
5. boolean
6. bigint [_🗓️ES2020_]
7. symbol [_🗓️ES2015_]

### Tipo string

```js
let cadena1 = 'Una cadena de caracteres';
let cadena2 = "Otra cadena de caracteres"; 
```

Las **dobles comillas** ("") son válidas, pero la configuración de Prettier las sustituye por simples comillas ('')

En ES6 aparece la posibilidad de utilizar las comillas francesas (``) para crear un **template string** o **template literals** [_🗓️ES2015_]

```js
let user = 'Pepe';
let cadena3 = `Saludos ${user}`;
```

En los template strings  es posible incluir expresiones, mediante ${}, para que sean evaluadas como parte de la expresión literal

### Tipo number

Los números se forman con dígitos del 0 al 9 y el punto de los decimales.
Además, desde [_🗓️ES2021_], puede usarse el guion bajo (_) como separador de miles

```js
  const n1 = 1_000_000
  const n2 = 10.65
```

Números válidos

```js
  console.log(Number.MAX_VALUE); // 1.7976931348623157e308;
  console.log(Number.MIN_VALUE); // 5e-324
```

Para valores mas grandes / pequeños existen los números Infinity

```js
console.log(Number.MAX_VALUE * 2); // Infinity
console.log(-Number.MAX_VALUE * 2); // -Infinity
```

Números en los que la precisión es correcta

```js
console.log(Number.MAX_SAFE_INTEGER); // 9_007_199_254_740_991
console.log(Number.MIN_SAFE_INTEGER); // -9_007_199_254_740_991
console.log(9_007_199_254_740_991 + 2); // 9_007_199_254_740_992 : Imprecision
```

La solución a este problema es el uso de un nuevo tipo, los bigint

```js
console.log(9_007_199_254_740_991n + 2n); // 9_007_199_254_740_993n;
```

Los números **`NaN`** representan las indeterminaciones matemáticas

```js
console.log(1 / 0); // Infinity
console.log(0 / 2); // 0
console.log(0 / 0); // NaN

console.log(Number('pepe')); // NaN
```

Las funciones isNaN ayudan a detectar estos valores.

En un caso realizan un casting a number; en el otro no

```js
  console.log('Con casting', n, isNaN(n)); // true
  console.log('Sin casting', n, Number.isNaN(n)); // false
```

### Tipo boolean

Dos valores posibles: `true` y `false`

Cualquier valor de cualquier tipo puede hacer casting a boolean si se incluye en una expresión de tipo lógico. Los valores pueden ser falsy o truly según se convierten a false o a true

Los **Valores falsy** son

false, 0, -0, 0n, '', NaN, undefined, null

## Tipos referenciados (objetos)

La referencia a las propiedades de los objetos puede ser

- mediante . seguido del nombre literal de la propiedad
- mediante [] que incluyen una expresión (e.g. variable) que se evalúa para devolver el nombre de la propiedad

```js
  obj['name'] = 'Pepe';
  console.log(obj);

  const property = 'name';

  console.log(obj.lastName);
  console.log(obj[property]);
  console.log(obj.name);
```

## Casting o coercion

La conversión de tipos (Type Conversion) puede ser implícita o explicita.

- **Conversión implícita**: se desencadena automáticamente durante la ejecución del código, como consecuencia de los requerimientos de las expresiones. Habitualmente denominada **coerción** (**coercion**)

Por ejemplo una operación de resta, multiplicación o división fuerza la conversión a number de las variables al evaluar la expresión. En ningún caso se cambia realmente el tipo de las variables

```js
  const a = 12;
  const b = '2';

  console.log('a - b', a - b); // 10
  console.log('a * b', a * b); // 24
  console.log('a / b', a / b); // 6
  console.log(typeof b); // string
```

Si la operación es una suma (+) la coerción es a string, porque el operador de concatenación tiene preferencia sobre el de suma

```js
  console.log('a + b', a + b); // '122'
```

- **Conversión explicita** (responde a instrucciones incorporadas por el desarrollador para desencadenar la conversión) también llamada **type casting**

Por ejemplo se puede forzar que la operación entre strings y numbers dea una suma en lugar de una concatenación

```js
  console.log('a + b', a + Number(b)); // 14
  console.log('a + b', a + +b); // 14
  console.log('a + b', a + parseInt(b)); // 14
```

En general, el casting explícito puede lograrse 

- con las funciones 'constructoras' de los tipos primitivos: Number(), String() y Boolean().

```js
  const s = '22';
  console.log(s, typeof s, Number(s), typeof Number(s)); 
  // 22 string 22 number
  const num = 33;
  console.log(num, typeof num, String(num), typeof String(num));
  // 33 number 33 string
  console.log(num, typeof num, Boolean(num), typeof Boolean(num));
  // 33 number true boolean
```

- con algunos operadores o funciones: +, !!, parseInt()

```js
console.log(num, typeof num, !!num, typeof !!num);
  // 33 number true boolean
```

- con los métodos específicos de algunos tipos: toString() disponible en  numbers, booleans, objects

```js
  const number = 22;
  const boolean = true;
  const object = { name: 'Pepe' };

  console.log(number.toString()); // 22
  console.log(boolean.toString()); // true
  console.log(object.toString()); // [object Object]
```

### Reglas de conversión

- to String

```js
  console.log(22, String(22)); // 22
  console.log(true, String(true)); // true
```

- to Number: NaN

```js
  console.log('22', Number('22')); // 22
  console.log('any', Number('any')); // NaN
  console.log(undefined, Number(undefined)); // NaN
  console.log(true, Number(true)); // 1
  console.log(false, Number(false)); // 0
  console.log('', Number('')); // 0
  console.log(null, Number(null)); // 0
```

- to Boolean: falsies y trulies
