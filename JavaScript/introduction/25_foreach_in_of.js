/*
        ciclo forEach
            Es un metodo de los arreglos que podemos usar para recorrer los elementos.
            Es un metodo unicamente para arreglos.
*/

const amigos = ['Alejandro', 'cesar', 'manuel'];
amigos.forEach((amigo, index ) => {
    console.log(`El indice ${index}, es ${amigo} `);
});


/*
    Ciclo for in
        Nos permite recorrer las propiedades de un objeto.

*/

const persona = {
    nombre : 'Carlos',
    edad: 27, 
    correo: 'correo@correo.com'
}

for(propiedad in persona) {
    // console.log(persona[propiedad]);
    persona[propiedad] = ''; // valores vacios
}
console.log(persona);








/*
    Ciclo for of    
        Nos permite recorrer los valores de un objeto iterable
        sirva para colecciones
        Podemos recorrer: Arreglos, Cadenas de Texto, Mapas y listas de nodos, etc.
*/

// vamos a acceder a todas las etiquetas de muestro HTML
const etiquetas = document.head.children;
// console.log(etiquetas);
// etiquetas.forEach((etiqueta) => {
//     console.log(etiqueta)
// })

    // for( elemento of etiquetas){
    //     console.log(elemento)
    // }


// FORMA PARA NO TRABAJAR CON FOR OF
    // TOMAR LA COLECCION Y TRANSFORMARLA EN UN ARREGLO
    // UNA VEZ QUE SEA UN ARREGLO, TRABAJAR CON FOR EACH
    // 1. TOMAR LAS ETIQUETAS Y GUARDARLAS DENTRO DE UN ARREGLO TRABAJANDO CON EL ORPERADOR SPRED (...)


[...etiquetas].forEach( (elemento) => {
    console.log(elemento)
})



