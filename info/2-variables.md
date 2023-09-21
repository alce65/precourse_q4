# Variables

## Sintaxis del código

**Sensible al caso** (distingue las mayúsculas y minúsculas), e.g. en los nombres de variables, funciones y operadores

Se define un carácter o caracteres que permiten introducir comentarios de una línea o de varias

```js
// Comentario en línea
/*
  Comentario en varias líneas
*/
```

## Palabras reservadas

`abstract`
`boolean` `break` `byte`
`case` `catch` `char` `class` `const` `continue`
`debugger` `default` `delete` `do` `double`
`else` `enum` `export` `extends`
`false` `final` `finally` `float` `for` `function`
`goto`
`if` `implements` `import` `in` `instanceof` `int` `interface`
`long`
`native` `new` `null`
`package` `private` `protected` `public`
`return`
`short` `static` `super` `switch` `synchronized`
`this` `throw` `throws` `transient` `true` `try` `typeof`
`var` `volatile` `void`
`while` `with`

No lo son, sorprendentemente `undefined`, `NaN`, `Infinity`

## Sentencias (statements)

**Sentencia**: cada instrucción o conjunto de instrucciones que se ejecuta de una vez.
Muchas veces equivale a una 'linea' de código.

No es necesario terminar cada sentencia con el carácter de **punto y coma**.
Si una sentencia comienza con (, el uso del ; se vuelve obligatorio

En todo caso es habitual y recomendable **terminar cada sentencia con punto y coma**: si instalamos Prettier (e.g. como plugin de VSC) lo hará por nosotros.

```js
const user = 'Pepe';
console.log('Hola ' + user);
```

## Declaración y asignación de variables

Las variables son **identificadores** (nombres) asociados a un determinado **valor**

```js
  let foo 
```

Declara la variable y le asigna implícitamente el valor undefined

Equivale a

```js
  let foo = undefined
```

La declaración suele incluir la asignación de un valor distinto de undefined
Para ello se utiliza el **operador de asignación**: el signo =

```js
  let x = 22;
  const user = 'Pepe'
```

Existen 2 palabras reservadas responsables de la declaración de variables [_🗓️ES2015_]

- **let** -> se puede reasignar más adelante
- **const** -> NO se puede reasignar posteriormente

```js
  let x = 22;
  const user = 'Pepe'
  x = 34
  // user = 'Juan' daría un error
```

En modo estricto ('use strict' o 'module') intentar usar variables sin declararlas da un error ReferenceError

## Expresiones

Lo que aparece a la **derecha** de la asignación es una **expresión**.
Las expresiones se evalúan a un **único valor**.
Dicho valor es asignado a la **variable** que aparece a la **izquierda** del operador.

```js
  let x = 22; // Expresión literal: vale 'literalmente' lo que dice
  x = 20 + 5; // Expresión aritmética 
  let z = x * 2 // Expresión aritmética que incluye una variable
                // Usando el valor de la variable, 
                // se evalúa al valor resultante (50)
  let foo = x === z // Expresión lógica
                    // se evalúa al boolean true o false (en este caso, false)
```

## Identificadores

Son los nombres de las variables, contantes, funciones...
Sólo puede estar formado por

- Letras
- Números
- el signo $ (dólar)
- el signo _ (guion bajo).

Los dos últimos solo se usan en algunos casos concretos

El primer carácter no puede ser un número.

Los identificadores se escriben en **camelCase** excepto
funciones constructoras, classes o elementos de algún framework (e.g. componentes de React) que utilizan **PascalCase**

Las constantes en sentido estricto (valores primitivos invariables) pueden seguir nombrándose en **mayúsculas**, como se hacia tradicionalmente

### Naming

Hace referencia a las buenas practicas en la elección de los identificadores de las variables

- siempre en inglés
- sin abreviaturas, a no ser que sean de uso universal o muy generalizado (Id, km, FAQ, PhD, CEO ...)
- deben ser auto-explicatorias, describiendo lo que almacenan con un valor semántico lo más completo posible
- para valores booleanos, es recomendable que empiecen por 'is' o 'has'
- para las funciones, es recomendable incluir un verbo relativo a la acción que representan

## Ejercicios

**Variables en una consola**: Abrimos la consola de un navegador (e.g. Chrome) apuntando a la dirección about:blank (página en blanco) y comprobamos como se pueden declarar e inicializar variables, para luego utilizarlas como parámetros de la función alert(), presentarlas en la parte superior de la pantalla con document.write() o mostrarlas en la propia consola.
