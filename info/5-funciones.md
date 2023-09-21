# Funciones

Son conjuntos de instrucciones,
generalmente asociados a un **identificador**,
gracias a lo cual pueden ser **invocadas** (ejecutadas)
con su propio espacio de memoria (**scope**)
En todos los casos, cuando concluyen la ejecución,
**retornan** (devuelven) un valor.
Si este es undefined la función se considera de tipo **void**.

## Creación y uso

En JS las funciones son también valores y su tipo es el de **objetos 'de pleno derecho**.
Esto determina que ademas de declararlas, sea posible asignarlas a una variable, como sucede con cualquier valor (incluidos los de tipo objeto)

### Declaración v. asignación

Se pueden crear funcione mediante **declaración**

En ella se incluye la implementación (cuerpo de la función): el conjunto de funciones que será ejecutado.

```js
  function foo() {
    // Implementación
    console.log('Soy foo');
  }
```

la alternativa es la **asignación** de una expresión functional (function expression) o función anónima a una variable

```js
  const bar = function () {
    // Implementación
  };
```

En ES6, la expresión funcional puede escribirse como **arrow function** [_🗓️ES2015_]

```js
  const arrow = () => {
    // Implementación
  };
```

Cuando las arrow functions son de una sola línea que directamente retorna una expresión, pueden omitirse las llaves ({}) y el return

```js
  const add = (a, b) => a + b;
```

Las arrow functions usan un **lexical scope**, a diferencia del **dynamic scope** de las funciones habituales.

Eso obliga a tener en cuenta algunas limitaciones en su uso

- no suelen usarse como **métodos**, ya que si lo son, no tendrán acceso al objeto mediante `this` ni al padre como `super`
- no pueden usarse como funciones **constructoras**
- no pueden usarse como **generadores** porque en su implementación no pueden usar el operador `yield`

### Ejecución, invocación o llamada

Cualquiera que sea la forma en que se a creado, la función se invoca o ejecuta usando su identificador + el **operador de invocación**, los paréntesis

```js
  identificador()
```

En ese momento, js crea un nuevo entorno de ejecución (**execution scope**) en el que existen las variables locales de la función (incluidos los parámetros)

Cuando la ejecución concluye, la función devuelve el valor que corresponda (puede ser undefined), y el entorno de ejecución desaparece, con todas las variables locales que incluya

### Re-asignación

Usando el identificador de una función, sin el operador de invocación (los paréntesis), puede asignarse su valor a otra variable.

Tendremos así dos identificadores diferentes que hacen referencia a una misma función (bloque de código)

```js
  const countWeekDays = function () {
    return 7;
  };

  const weekDays = countWeekDays;
  console.log(weekDays);

  console.log(countWeekDays());
  console.log(weekDays());
```

### Hoisting

La llamada (o invocación) a la función declarada como función puede ser anterior a su declaración.
Esto se debe al proceso conocido como alzamiento (**hoisting**) o visibilidad sintáctica: las declaraciones de variables con var y las funciones declaradas con function son alzadas al principio por el interprete de JS

```js
foo(); // Ejemplo de Hoisting
// ReferenceError bar();
// ReferenceError arrow();

function foo() {
  // Implementación
}

const bar = function () {
  // Implementación
};

const arrow = () => {
  // Implementación
};
```

Cuando una función se crea mediante asignación a una variable, el proceso de alzamiento no se produce

## Ámbito (scope) de las variables

Las variables declaradas directamente fuera de cualquier función tienen un ámbito global o del módulo en que existen.

Las variables declaradas como parámetros o dentro de una función tienen un ámbito local a la función.

- no pueden ser accedidas desde fuera de la función
- desaparecen cuando concluye la ejecución de la función

Cuando el identificador de una variable local es el mismo que el de una de ámbito (scope) superior, ensombrece (shadow) a esta última, de modo que no puede ser accedida.

```js
  let text1 = 'Valor inicial';
  let text2 = 'Valor inicial';

  function foo() {
    var text1;
    text1 = 'Cambio desde dentro';
    text2 = 'Cambio desde dentro';
  }

  foo();
  console.log(text1); // "Valor inicial"
  console.log(text2); // "Cambio desde dentro
```

Al contrario de lo que sucede en el ejemplo, una función **no debe** acceder a las variables globales, para evitar que quede **acoplada** al código principal

## Parámetros v. argumentos

Al invocar una función se incluyen los **argumentos** (también denominados parámetros reales) necesarios: valores obtenidos al evaluar la expresión que se envían a la función

La función recibe esos valores en variable locales denominadas **parámetros** (o parámetros formales) que se utilizan como parte de las operaciones llevadas a cabo en el cuerpo (implementación) de la función.

```js
  const add = (x, y) => {
    const r = x + y;
    return r;
  };
```

La función tiene 3 variable locales:
r y los parámetros x e y, que se inicializarán con los valores recibidos como argumentos.

```js
  const x = 5;
  console.log('Add', add(x)); // NaN
  console.log('Add', add(x, 4)); // 9
  console.log('Add', add(x, 4, 8)); // 9
```

La función se invoca con diferente número de argumentos

- si hay menos argumentos que parámetros, los que no reciben argumento se inicializan con valor undefined
- si hay más argumentos que parámetros, los que sobran se ignoran

En ES6 es fácil definir los **valores por defecto**, de los parámetros, de forma que se inicialicen con esos valores en caso de no recibir ningún valor como argumento

```js
  const add = (x = 0, y = 0) => {
    const r = x + y;
    return r;
  };

  const x = 5;
  console.log('Add', add()); // 0
  console.log('Add', add(x)); // 5
```

En VSC los valores por defecto se utilizan para inferir el tipo de los parámetros, aunque ello no signifique que se fija ese tipo, como ocurriría en TypeScript

### Argumentos de tipo primitivo

Si los argumentos son valores primitivos, lo que reciben los parámetros es el **valor**.

La función nunca cambia el valor de la variable que se usa como argumento, a no ser que la manipule directamente y esto último no debería ocurrir nunca.

```js
  const foo = (x) => {
    x = x + 1;
    console.log('Valor de x local a foo', x); // 3
    return x;
  };

  const x = 2;
  console.log('Valor inicial de x global', x); // 2
  foo(x);
  console.log('Valor finas de x global', x); // 2
```

### Argumentos de tipo referenciado

Si los argumentos son objetos (valores primitivos), lo que reciben los parámetros es la **referencia** a la instancia del objeto.

Si la función **muta el objeto**, el cambio afecta a la instancia original, que es la única que existe

```js
  const foo = (x) => {
    x.user = 'Juan';
    console.log('Valor de x local a foo', x); //  { user: 'Juan' }
    return x;
  };

  const x = { user: 'Pepe' };
  console.log('Valor inicial de x global', x); //  { user: 'Pepe' }
  foo(x);
  console.log('Valor finas de x global', x); //  { user: 'Juan' }
```

## Carácter funcional: funciones como objetos

Ya sabemos que en JS las funciones son también valores y su tipo es el de **objetos 'de pleno derecho**.

Entre otras cosas

- pueden tener propiedades
- pueden ser asignadas a una variable
- pueden ser incluidas (anidadas) en otra función
- pueden ser recibidas como parámetros
- pueden ser devueltas por otra función

### Funciones con propiedades 'extra'

Aunque no suele hacerse, una función puede tener propiedades como cualquier otro objeto

```js
 const foo = () => {
    console.log('Soy foo');
  };

  foo.date = new Date();

  console.log(foo); 
  // [Function: foo] { date: 2023-08-16T11:23:04.205Z }
```

### Funciones anidadas

```js
  function addSquares(a, b) {
    function square(x) {
      return x * x;
    }

    return square(a) + square(b);
  }

  console.log(addSquares(4, 5)); // 41
```

La función 'interna' square solo existe en el scope de la otra y solo puede ser utilizada dentro de ella

### Funciones de orden superior y callbacks

Una función de orden superior (**hight order function**) es la que

- recibe una función como parámetro
- devuelve una función

La función recibida como parámetro se denomina **callback**

```js
  const hof = (callback) => {
    console.log(callback());
  };

  hof(() => 'Soy un callback');
```

Los callback pueden ser indistintamente funciones con nombre o anónimas, aunque esta segunda opción es muy habitual, como lo es en ese caso el uso de las arrow functions

Entre los usos más habituales de los callbacks:

- permitir asignar funciones como manejadores de eventos asíncronos
- asignar funciones a timeouts, como otra forma de asincronía

### Funciones auto-invocadas

Después de la declaración de una función anónima (expresión funcional), es posible que ésta se invoque a si misma para ser ejecutada inmediatamente

El patrón de esta práctica se denomina IIFE (**Immediately Invoked Function Expression**)

```js
  (() => {
    console.log('Ejemplo de una IIFE');
  })();
```

La creación de su propio espacio de memoria en las funciones hace que se puedan utilizar para aislar un código fuente y evitar colisiones de variables o espacios de nombres en general: El código se ejecuta directamente, como si no hubiera función, pero en su propio espacio de memoria

### Closures

Una función que encapsula un conjunto de definiciones locales : 

- variables, 
- otras funciones (por extensión objetos).

Se basa por tanto en el anidamiento de funciones.

- permite que la función interna "escape" de la función padre: se hace accesible desde fuera
- la función interna sigue teniendo acceso al ámbito (scope) de la función padre después de que ésta haya retornado

El ámbito de visibilidad de la función externa se utiliza para crear el equivalente a un módulo

Las funciones internas pueden ser setters y getters de variables locales, no accesibles directamente desde fuera

Se pueden utilizar varios patrones para conseguir un closure: 

- una función incluye una función interna y la devuelve
- una función incluye una función interna y se la asigna a una variable del nivel superior

```js
  const closureCount = () => {
    let counter = 0;
    return () => counter++;
  };

  const extCounter = closureCount();

  console.log(extCounter()); // 0
  console.log(extCounter()); // 1
  console.log(extCounter()); // 2
```

En el primero de los patrones puede añadirse una IIFE

```js
  const closureCount = (() => {
    let counter = 0;
    return () => counter++;
  })();

  console.log(closureCount()); // 0
  console.log(closureCount()); // 1
  console.log(closureCount()); // 2
```
