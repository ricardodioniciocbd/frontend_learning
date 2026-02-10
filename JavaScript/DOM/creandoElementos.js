// funcion para agregar Caja

const agregarCaja = ( () => {
    /*
        1. Creamos el elemento
            createElement - Recibe como parametro una cadena de texto con la etiqueta que queremos crear.
    */
   const nuevaCaja = document.createElement('div'); // cuando le damoc clic, crea una NUEVA CAJA y la guarda en esta variable> nuevaCaja

   /*
        2. Agregamos texto y atributos (id, clase)
   */

    nuevaCaja.innerText = 'Nueva Caja!';
    nuevaCaja.setAttribute = ('id', 'nuevo-id')// y Querio que tenga un ID, (agrega propiedades con setAttribute)
    nuevaCaja.setAttribute = ('class', 'caja activa') // y quiero que ocupe la clase caja activa

    /*
        3. Agregamos el elemento al DOM, para agregar un elemento, necesitamos saber a cual contenedor y obtener ese contenedor con getElementById
    */

    const contenedor = document.getElementById('contenedor1');

    contenedor.appendChild
    

});