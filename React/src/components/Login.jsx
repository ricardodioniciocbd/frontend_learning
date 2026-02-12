import { useState } from "react";

const LoginForm = ({setSesionIniciada}) => {

    const [usuario, setUsuario] = useState(''); // Vamos a guardar el valor que el usuario escriba en una cadena de texto vacia.
    const [contraseña, setContraseña] = useState('');


    // const iniciarSesion = () => {
    //     setSesionIniciada(true);
    // }

    const handleUsuario = (e) => { // Esta funcion se encarga de guardar en un Estado lo que escriba el usuario de los inputs // onChange se ejeucuta cada que haya un cambio en el input
        // console.log(e.target.value)//  De esta forma se accede al contenido del input cada valor lo VAMOS A GUARDAR EN UN ESTADO useState()
        setUsuario(e.target.value)
    }

    const handleContraseña = (e) => {
        // console.log(e.target.value);
        setContraseña(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Previene que cuando se envia el form, la pagina se refresque 

        if (usuario === 'ryan' & contraseña === '123') {
            setSesionIniciada(true);
        } else {
            console.log('Datos incorrectos')
        }

    }

    return (                     // onSubmit en el form> Cuando el form intente ser enviado, queremos ejecutar una funcion
        <div className="contenedor" onSubmit={handleSubmit}> 
            <form className="login">
                <h3>Inicia Sesión</h3>
                <input type="text" placeholder="Usuario" onChange={handleUsuario} value={usuario}/> 
                <input type="password" placeholder="Contraseña" onChange={handleContraseña} value={contraseña}/>
                <button>Iniciar Sesión</button>
            </form>
        </div>
    );

};

export default LoginForm;