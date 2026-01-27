// Estrucutura de una coficional 
// if  (true) {

// }



// Ejemplo 1
// const usuario = {
//     edad : 21,
//     pais : 'Mexico',
//     ticket : true
// };

// if (usuario.edad > 17 && usuario.ticket) {
//     console.log("asectado")
// } else {
//     console.log('no asectado')
// }



// Ejemplo 2 - condicionales anidados
// const usuario = {
//     edad : 21,
//     pais : 'Mexico',
//     ticket : true
// };


// if (usuario.edad >= 18) {

//     if (usuario.ticket) {
//         console.log('El usuario es mayor de edad y tiene ticket');
//     } else {
//         console.log('El usuario es mayor de edad pero no tiene ticket');
//     }
// } else {
//     console.log('El usuario no es mayor de edad');
// }


// Ejemplo 3 - else if
const usuario = {
    edad : 21,
    pais : 'argentia',
    ticket : true
};

if (usuario.pais === 'colombia') {
    console.log('El usuario es de COLOMBIA ');
} else if (usuario.pais === 'mexico') {
    console.log('El usuario es MEXICANO');
} else if (usuario.pais == 'argentina') {
    console.log('El usuario es ARGENTINO');
} else {
    console.log('El usuario es de otro pais')
}
