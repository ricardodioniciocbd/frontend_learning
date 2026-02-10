/*
    Modificar estilos CSS mediante clases
*/
const primeraCaja = document.querySelector('#contenedor1 .caja');
console.log(primeraCaja.classList);



// classList.add() - Nos permite agrgar Clases a un elemento
const agregarClase = ( () => {
    primeraCaja.classList.add('activa'); 
});



//classList.remove() - Busca la clase 'activa' y la elimina
const eliminarClase = ( () => {
    primeraCaja.classList.remove('activa')

    
});


// Toggle Class - (Alternar clase) Nos permite alternar clases de un elemento, quita y pone el estilo
const toggleClase = ( () => {
    primeraCaja.classList.toggle('activa');
});



// classList() - Nos permite comprobart si el elemento contiene una clase
const comprobarClase = ( () => {
    if(primeraCaja.classList.contains('activa')){
        console.log('La caja tiene la clase "activa"');
    } else {
        console.log('La caja no tiene la clase "activa"')
    }

    console.log('Y contiene las siguientes clases: ');
    primeraCaja.classList.forEach( (clase) => {
        console.log(clase)
    })
})