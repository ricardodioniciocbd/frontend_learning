// LA SENTENCIA RETURN
// Es una palabra que podemos usar dentro de las fuciones para RETORNAR O DEVOLVER INFORMACION HACIA AFUERA DELA FUNCION


// NOTA: LA FUNCION DE UNA FUNCION xd, es que solo haga una sola cosa... Nos es buena idea que las funciones hagan mas de 1 cosas.
// Por lo que se recomienda que haga una sola cosa xd.
// entonces lo que vamos hacer que la funcion haga uns sola cosa.

// en este caso la tarea de esta funcion es hacer una OPERACION , UNA SUMA O UNA RESTA ETC. Y ESTA FUNCION ESTA HACIENDO LA SUMA Y MOSTRANDO LA SUMA
    // if (tipo === 'suma') {
    //     console.log(`${numero1 + numero2}`);






    // FORMA 1

const operaciones = (tipo, numero1, numero2) => {
    
    //3return // una ves que se ejecute el reurn, la funcion se va a detener hasta ese punto y devolver lo que tenga. en caso de tener codigo faltante lo ignora.
    if (tipo === 'suma') {
        // console.log(`${numero1 + numero2}`);
        return numero1 + numero2
    } else if (tipo === 'resta') {
        console.log(`${numero1 - numero2}`);
    } else if (tipo === 'multiplicacion'){
        console.log(`${numero1 * numero2}`);
    }

    return 'hola'

};


const miVariable = operaciones('suma',2, 5);
console.log(miVariable); // Nos permite devolver informacion afuera de la funcion, para luego guardarla dentro de una variable






        // FORMA 2
// const operaciones = (tipo, numero1, numero2) => {
//     let resultado;
    
//     if (tipo === 'suma') {
//         resultado = numero1 + numero2;
        
//     } else if (tipo === 'resta') {
//         resultado = numero1 - numero2;
//     } else if (tipo === 'multiplicacion'){
//         resultado = numero1 * numero2;
//     }

//     return resultado;

// };

// const miVariable = operaciones('resta', 10, 5);
// console.log(miVariable)