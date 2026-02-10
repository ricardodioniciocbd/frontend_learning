// Creamos una funcion de tipo flecha la cual se va a ejecutar despues de hacer clic al boton con la funcion eleminarElemento()
const eliminarCaja = ( () => {
    const contenedorPadre = document.getElementById('contenedor1');
    const cajaAEliminar = contenedorPadre.querySelector(' .caja');
    console.log(cajaAEliminar);

    if(cajaAEliminar){
        contenedorPadre.removeChild(cajaAEliminar); // se agrega el condicional para que no marque error al momento de eleminar todas las cajas  
    }

});