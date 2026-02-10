// funcion para agregar Caja

const agregarCaja =  () => {
    /*
        1. Creamos el elemento
            createElement - Recibe como parametro una cadena de texto con la etiqueta que queremos crear.
    */
   const nuevaCaja = document.createElement('div'); // cuando le damoc clic, crea una NUEVA CAJA y la guarda en esta variable> nuevaCaja

   /*
        2. Agregamos texto y atributos (id, clase)
   */

    nuevaCaja.innerText = 'Nueva Caja!'; // accedemos al texto interno de la  caja
    nuevaCaja.setAttribute('id', 'nuevo-id');
    nuevaCaja.setAttribute('class', 'caja activa');

    /*
        3. Agregamos el elemento al DOM
        para agregar un elemento, necesitamos saber a cual contenedor 1 0 2 y obtener ese contenedor con getElementById
    */

    const contenedor = document.getElementById('contenedor1');

    //  FORMAS DE AGREGAR ELEMENTOS

        // 1
    // .appendChild() - Agrega un elemento al final (significa adjuntar un hijo)
    // contenedor.appendChild(nuevaCaja); // se lo agregamos al elemnto nuevaCaja al final del contenedor1


        // 2
    /*
        .insertAdjacentElement() - Nos permite agregar un elemento
        Valores:
            afterbegin - como primer elemento
            beforebegin - antes del elemento padre
            beforeend - como ultimo elemento 
            afterned - despues del elemento padre
    */
    // contenedor.insertAdjacentElement('afterbegin', nuevaCaja); // agrega la caja como primer elemento


        //3
    /*
            .replaceWith() - nos permite remplazar el elemento por otra
    */
   document.querySelector('#contenedor1 .caja').replaceWith(nuevaCaja);




    

};