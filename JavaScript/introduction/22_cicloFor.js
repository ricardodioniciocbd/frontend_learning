// const nombres = ['Carlos', 'Christian', 'Christopher', 'Estefania', 'Erika', 'Manuel'];
// nombres.forEach( (nombre) => {
//     console.log(nombre);
// });


/*
        Ciclo for
            Repite un bloque de código mientras se cumpla una condicion 

            Exprecion 1: Se ejeucta una sola vez antes de comenzar a repetir el bloque de codigo
            Exprecion 2: Una condicion, mientras se cumpla se ejecutara el bloque de codigo
            Exprecion 3: Esta expresion se ejecuta siempre y despues de que se ejecute el bloque de codigo
*/

// for(let numero = 1; numero < 11; numero++) {
//     console.log(numero);
// }

// for(let numero = 50; numero >= 0; numero = numero - 1) {
//     console.log(numero);
// }

const nombres = ['Carlos', 'Christian', 'Christopher', 'Estefania', 'Erika', 'Manuel'];
for(nombre = 0; nombre <= nombres.length; nombre++) {
    console.log(nombres[nombre]);

}