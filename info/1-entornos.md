# Entornos JS

## Instalaciones

- VSC
- Node
- Chrome - ver Herramientas del navegador

## JS en Web (HTML files)

- in line

```html
<p onclick="alert('Un mensaje de prueba')">párrafo</p>
```

- script

```html
<script>
  // Código JavaScript 
</script> 
```

- js files

```html
  <script src="sample.js"></script>
```

```js
// file sample.js
// Código JavaScript
```

Posición en el documento HTML

- al final del head (preferible)

```html
  <script src="sample.js" defer></script>
```

- al final del body

## JS en el navegador (consola)

- consola -> herramientas de desarrollo en el navegador

```js
let x = 22 // enter
x // enter
```

## Node

- instalación

[https://nodejs.org/es](https://nodejs.org/es)

- linea de comandos

```shell
node -v
node sample.js
```

## Entrada y salda en el navegador

funciones (métodos) del Web API [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)

- Salida de datos

```js
  alert(' Hola Mundo ');
  confirm('Escribe tu nombre')
```

- Entrada de datos

```js
  prompt('Escribe tu nombre')
```
