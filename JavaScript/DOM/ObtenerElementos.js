

            // ACCEDIENDO Y SELECCIONANDO LOS ELEMENTOS 

            
/*
    getElementById
        Nos permite obtener un elemento en base a su atributo id
*/
// const contenedor1 = document.getElementById('contenedor1');
// console.log(contenedor1);






/*
    children
        Nos permite obtener los ejementos hijo
*/
// console.log(contenedor1.children);






/*
    parentElement
        Nos permite obtener el elemento padre de un elemento 
*/

// console.log(contenedor1.parentElement);





/*
    getElementsByTagName
        Nos permite obtener una coleccion de elementos en base a la etiqueta 
        Nota: Devuelve una coleccion HTML, una coleccion no es un arreglo.
*/

// const divs = document.getElementsByTagName('div');
// console.log(divs)





/*
    getElementsByClassName
        Nos permite obtener una coleccion de elementos en base a su clase css
        Nota> devuelve una coleccion HTML 
*/
// const contenedores = document.getElementsByClassName('contenedor')
// console.log(`Los las clases de contenedores: ${contenedores}`);







/*
    querySelector
        Nos devuelve el primer elemento que concida con un selector estilo CSS
        Nota: Devuelve un nodelist
        nos devuelve el primer elemento que coincida. en este caso si tenemos varias .caja nos retorna el primero
 */
// const caja = document.querySelector('#contenedor1 .caja');
// console.log(caja);



/*
     querySelectorAll
        Nos permite obtener una coleccion de elementos en base a un selector estilo css
        Nota> Devuelve un nodelist - Los nodos si se pueden iterar con foreach
        Entonces si queremos que nos muestre todas las clases, pues usamos este metodo

*/
// const cajas = document.querySelectorAll(`#contenedor1 .caja`)
// console.log(cajas)

// cajas.forEach((caja) =>{
//     console.log(caja)
// })






/*
    closest
        Nos permite buscar de adentro hacia afure en busca de un elemento
            Por ejemplo si queremos obtener la utlima caja del primer contenedor>>>
            desde ultimaCaja hijo, vamos a buscar el elemento padre contenedor1 ...
*/

// const ultimaCaja = document.querySelector( `.caja:last-child`);
// console.log(ultimaCaja);
// console.log(ultimaCaja.closest('.contenedor-principal'));







/*
    Pdomemos encadenar todos los metodos para obtener elementos.
*/

const contenedor2 = document.getElementById('contenedor2');
console.log(contenedor2.querySelector('.caja')); // Tomamos el contenedor2 y apartir de ahi toma el primer elemento de la clse caja