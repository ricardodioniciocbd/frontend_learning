//para crear un contador, creamos una funcion, accedemos a la imagen, y accedemos a la cuenta: 
const cargarContador = () => {
    const imagen = document.getElementById('imagen')    //queremos acceder a nuestra imagen, mediante un ID
    const cuenta = document.getElementById('cuenta')

    // quiero escuchar cuando hagan clic sobre la imagen
    imagen.addEventListener('click', () => {
        cuenta.innerHTML = parseInt(cuenta.innerText)+ 1;

    }); //cuando hagan 'clic', quiero ejecutar esta funcion

};

export default cargarContador; //exportamos la funcion, para poder usarla en otro archivo