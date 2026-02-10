/*
        Supongamos que queremos seleccionar la primera caja de nuemro contenedor y queremos modificarle el texto>
*/






/*
        elemento.innerHTML (propiedad)
            Nos permite cambiar el contenido HTML  de un elemento
            forma para poder modificar un elemento
*/
const primeraCaja = document.querySelector('.caja');
primeraCaja.innerHTML = '<b> Hola</>';






/*
        elemento.attribute
            Nos permite acceder y cambiar atributos del elemento
            Modificar atributos del elemento 
*/

primeraCaja.id = 'nuevo-id'; // al atributo caja le asignamos un ID








/*
    elemento.setAttribute()
        Nos permite agregar o establecer el valor de un atributo del elemento.

*/
primeraCaja.setAttribute('class', 'caja activa');
primeraCaja.setAttribute('data-id', '123-456-789')// atributos personalizados se agregan con 'data-...'





/*
    elemento.style.property
        Nos permite cambiar los estilos css de un elemento
*/
const contenedor2Caja1 = document.querySelector('#contenedor2 .caja');
//  // console.log(contenedor2Caja1);
contenedor2Caja1.style.background = '#000'
contenedor2Caja1.style.color = '#fff'
contenedor2Caja1.style.textTransform = 'uppercase'; // transformamos a mayuzculas con la propiedad text-transform... recordemos que aqui no podemos usar el (-) sino que pasar la propiedad en estilo camelCase.
