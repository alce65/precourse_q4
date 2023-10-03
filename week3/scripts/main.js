export const main = () => {
  console.log('Soy main');

  // El DOM
  const dom = document;
  console.dir(dom);
  const h1 = dom.children[0].children[1].children[0].children[0];
  console.dir(h1);
  h1.textContent = 'Nuevo título';

  // Accesos directos a elementos del dom

  const h1Element = document.querySelector('h1');
  const pElements = document.querySelectorAll('p');
  const pElement = document.querySelector('p');

  console.dir(h1Element);
  console.dir(pElements);

  pElements[0].textContent = 'Nuevo párrafo';

  // Modificar su contenido

  setTimeout(() => {
    h1Element.textContent = 'Segundo nuevo titulo';
  }, 2000);

  // Responder al usuario

  const handleButtonClick = (event) => {
    console.log('Hiciste click, canalla');
    console.log(event);

    const parentElement = h1Element.parentNode;
    console.dir(parentElement);
    parentElement.innerHTML += `
      <div>
        <h2>Título canalla</h2>
        <p>Hiciste click</p>
      </div>
      `;
  };

  document.querySelector('button').addEventListener('click', handleButtonClick);
};
