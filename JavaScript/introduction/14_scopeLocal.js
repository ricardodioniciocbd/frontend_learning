/*
    Local Scope o variables locales
    - Son las variables declaradas dentro de una funcion 
    - solo podemos acceder a ellas dentro de una funcion 
*/ 

let obtenerNumeroLetras = (nombre) => {
    let numeroLetas = nombre.length;
    console.log(`${nombre} es el nombre y tiene ${numeroLetas} letras`)

     // una variable local dentro de una funcion, puede ser accedido por otras funciones que esten dentro de la funcion Principal xd.
    let funcionAnidada = () => { 
        console.log(numeroLetas);
    }
    funcionAnidada();
    

};

obtenerNumeroLetras('Ryan');

