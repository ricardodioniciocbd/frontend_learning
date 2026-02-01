const colores = ['rojo', 'azul', 'verde', 'amarillo', 'rosa'];
console.log(colores);

/*  .length
    (propiedad) - Nos permite conocer la cantidad de elementos de un arreglo. * 
 */
console.log(colores.length)


/*  .toString()
        Nos permite transformar un arreglo a una cadena de texto
        Por ejemplo para poder mostrarlo en el navegador
*/
// ACCEDEMOS AL NAVEGADOR (document), DESPUES AL BODY Y MODIFICAMOS EL HTML (innerHTML)
// document.body.innerHTML = colores.toString(); // los transforma en una cadena de texto, y lo podemos mostrar en consola o en el navegador


/*   .join()
        Nos permite transformar un arreglo a una cadena de texto y separar cada elemento con el simbolo o letra que deseemos.
*/

console.log(colores.join('-')) // rojo-azul-verde-amarillo-rosa


/*     .sort()
         Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica.
         // tanto con letras como con numeros
         // Los acomoda en orden asendente.

*/
const letras = ["c", "b", "d", "z","a"]
console.log(letras.sort());

const numeros = [3,4,6,2,1,10];
console.log(numeros.sort());



/*      .reverse()
            Nos permite ordenar un arreglo de fomra desentente.
*/
const letras_reversa = ["c", "b", "d", "z","a"]
console.log(letras_reversa.reverse());

const numeros_reversa = [3,4,6,2,1,10];
console.log(numeros_reversa.reverse());




/*      .concat()
            Nos permite juntar dos arreglos en uno solo.
*/

const arreglo1 = [1,2,3];
const arreglo2 = ['A', 'B', 'C'];
const arreglo3 = arreglo1.concat(arreglo2);

console.log(arreglo3);


/* .push()
    Nos permite agregar un elemento al final de un arreglo
*/
colores.push('YELLOW');
console.log(colores);


/*      .pop()
            Nos permite eliminar el ultimo elemento de un arreglo
*/
colores.pop();
console.log(colores);




/*      .shift()
            Elimina el primer elemento de un arreglo y recorre los elementos
 */
// const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
// dias.shift(); // elimina el primer dia (lunes)
// console.log(dias[0]) // nuestra el primer dia (martes)

const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
const diaEliminado = dias.shift();
console.log(`El dia eliminado es: ${diaEliminado}`);
console.log(`El primer dia es: ${dias[0]}`) // nuestra el primer dia (martes)



/*      .unshift()
            Agrega un elemento al incio del arreglo y empuja los elementos.
*/
dias.unshift('Nuevo Dia');
console.log(dias);
console.log(dias[0]);


/*      .splice()
            Nos permite insertar elementos a un arreglo donde le especifiquemos.
                - 1er parametro - Posicion dende queremos comenzar a insertar los elementos.
                - 2do parametro - si queremos eliminar elementos del arreglo desde la posicion indicada 
                - Resto de parametros - Los elementos a insertar 
*/

const amigos = ['Alejandro', 'Cesar', 'Marco'];
amigos.splice(1,0,'Rafael','Ricardo');
console.log(amigos);



/*      .slice()
            Nos permite copiar una parte de un arreglo a 
            - 1er parametro - Posicion desde donde queremos copiar.
            - 2do parametro - Hasta antes de que elemento copias.
*/

const frutas = ['Fresa', 'Manzana', 'Uva', 'Piña', 'Mango', 'Naranja', 'Melon'];
const frutasFavoritas = frutas.slice(1,4);
console.log(frutasFavoritas)
