/*
        Break
            La sentencia break nos sirve para salir de bloques de tipo Switch
            Pero tambien nos sirve para forzar la salida de un ciclo.
 */
// const nombres = ['Arturo', 'Andres', 'Alejandro', 'Roberto', 'Adrian', 'Antonio', 'Angel'];

// for(let i = 0; i < nombres.length; i++) {
//     if(nombres[i][0] !== 'A') { 
//         console.log('ALTO, hay un numero que no empieza por la letra A')
//         console.log(`${nombres[i]} no empieza por la letra A`)
//         break
//     } 
//     console.log(nombres[i])
// }




/*
        continue
            La sentencia continue nos sirve para saltar a la siguiete iteracion 
*/
const invitados = ['Carlos', 'Christian', 'Chistopher', 'Jorge', 'Estefania', 'Erika', 'Manuel'];
console.log('***Lista de personas aceptadas***')
for(let i = 0; i < invitados.length; i++){
    if(invitados[i] === 'Jorge') {
        // console.log(`${invitados[i]} no estas invitado chavo`)
        continue;
    }
    console.log(invitados[i])

}