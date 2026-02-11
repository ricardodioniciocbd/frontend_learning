const boton1 = document.getElementById('boton1');
// console.log(boton1);
const primeraCaja  = document.querySelector('#contenedor1 .caja');
// console.log(primeraCaja);

boton1.addEventListener('click', (e) => {  // quedate escuchando cuando nosotros le demos clic al boton1
    // console.log(e)
    primeraCaja.classList.toggle('activa') // toggle > alterna la clase 
});


/*
    Agregando el evento a multiples elementos
        Podemos agregar el evento a multiplies elementos recorriendolos mediante un ciclo
        Nota> esta no es la forma optima, en la sig. leccion se muestra una mejor forma
*/
const cajas = document.querySelectorAll('.caja');

cajas.forEach( (caja) => {
    caja.addEventListener('click', (e) => {
        // console.log(e)
        console.log(`Has echo clic a la caja ${e.target.innerHTML} `)
    });
})
