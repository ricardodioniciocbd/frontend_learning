import cargarContador from './contador' // importamos la funcion de contador.js
import imagen from '../assets/bosque.png';
console.log("Hello Ryan!");
console.log("hola")

document.querySelector('#app').innerHTML = `
  <h1> Hola mundo </h1>
  <img src="${imagen}" alt="Imagen de un bosque" id="imagen"/>
  <h2>Veces clickeado: <span id="cuenta">0</span> </h2>
  
`;

cargarContador(); //ejecutamos la funcion