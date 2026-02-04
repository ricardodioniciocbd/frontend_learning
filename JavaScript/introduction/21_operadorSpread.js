/*
        Operador Spread
            - Permite tomar los elementos de un arreglo u objetos y expandirlos en otro sitio..
 */
// const frutas = ['Manzana', 'Pera', 'Pinia', 'Melon'];
// const comidaFavorita = ['Pizza', 'GOrditas de chicharron', ...frutas];
// console.log(comidaFavorita);

// const datosLogin = {
//     nombre: 'ricardo',
//     correo: 'correo@correo.com',
//     password: '123',
// }
// const usuario = {
//     nombre: 'Ryan',
//     edad: 21,
//     ...datosLogin // operador spread... expande elementos de un objeto a otro.
// }
// console.log(usuario)






/*
    Parametro Rest
        Permite que una funcion contenga un numero indefinido de argumentos
        Los argumetos extra que encuentre los convertira en un arreglo
*/

// const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
//     console.log(nombre, correo, datosAdicionales)
// }

// registrarUsuario('ryan', 'ryan@correo.com');
// registrarUsuario('alex', 'ale@correo.com', 27, 'Mexico'); // Los datos adicionales los convierte en un arreglo






/*
        Destrucutración de objetos
            Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable
*/
        //arreglos
const amigos = ['Alejandro', 'Cesar', 'Manuel'];
// console.log(amigos[0]);
const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;
console.log(tercerAmigo);

        // objetos
const persona = {
    nombre: 'ryan',
    edad: 21,
    pais: 'republica dominicana'
}
const {nombre, pais} = persona;
console.log(nombre, pais)

const mostrarEdad = ({nombre, edad}) => {
    console.log(`${nombre} tiene ${edad} años`);
}
// mostrarEdad(persona.nombre, persona.edad)
mostrarEdad(persona)