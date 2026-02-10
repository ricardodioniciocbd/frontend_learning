/*
    Sirve para modificar los estilos sin necesidad de tener una clase
*/
const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
// console.log(ultimaCaja)
ultimaCaja.style.background = '#000';
ultimaCaja.style.color = '#fff';

const cajas = document.querySelectorAll('.caja');
// console.log(cajas)
let tamanio = 24;

const incrementarFuente = () => {
    cajas.forEach((caja) => {
        tamanio++;
        caja.style.fontSize = `${tamanio}px`;

    });

}


const decrementarFuente = () => {
    cajas.forEach((caja) => {
        tamanio--;
        caja.style.fontSize = `${tamanio}px`;

    });

}

