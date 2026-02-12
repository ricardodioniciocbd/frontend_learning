import Header from "./components/Header";
import Lista from "./components/Lista"; 
import LoginForm from "./components/Login";

import { useState } from "react";

function App() {
    const nombre = 'Ryan';

    //ARREGLOS
    // const amigos = ['Alex', 'Cesar', 'Manuel', 'Rafael'];
    // const lista = [<li>Alex</li>, <li>Cesar</li>, <li>Manuel</li>, <li>Rafael</li>];

    // creamos un arreglo y dentro del arreglo podemos crear objetos {}.map() para recorrer el arreglo
    const amigos = [
        {nombre: 'Carlos', telefono:'123-456-789'},
        {nombre: 'Alex', telefono:'123-456-789'},
        {nombre: 'Cesar', telefono:'123-456-789'},
        {nombre: 'Manuel', telefono:'123-456-789'},
    ];

    const famosos = [
        {nombre: 'Pessi', telefono:'123-456-789'},
        {nombre: 'Penaldo', telefono:'123-456-789'},
        {nombre: 'David Backanm', telefono:'123-456-789'},
        {nombre: 'Tomas Muller', telefono:'123-456-789'},
    ];

        // FORMA 2 - Operador Ternario 
    // const sesionIniciada = false;
    
    // PARA CAMBIAR EL ESTADO DINAMICAMENTE DEL VALOR DE sesionIniciada tenemos que trabajar con los estados de los componentes en REACT.. useState()
    // VA A PERMITIR TENER VARIABLES QUE CUANDO CAMBIEN, EL COMPONENTE SE VA A VOLVER A RENDERIZAR ES DECIR, VUELVE A CARGAR Y PREGUNTA NUEVAMENTE SI sesionIniciada es True o False
    const [sesionIniciada, setSesionIniciada] = useState(false); // QUE CAMBIE AL PULSAR EL button de btCerrarSesion

    const cerrarSesion = () => {
        setSesionIniciada(false);
    } // FUNCION PARA PODER CAMBIAR EL VALOR DE NUESTRA sesionIniciada

    return (
        <> 
            {sesionIniciada ? 
                <div className="contenedor">
                    <Header nombre = {nombre}/>
                    <Lista titulo = 'Lista de contactos' contactos = {amigos}/>
                    <Lista titulo = 'Lista de famosos' contactos = {famosos}/>
                    <button className="btnCerrarSesion" onClick={cerrarSesion}> Cerrar Sesión</button>
                </div>
            : 
            <LoginForm setSesionIniciada={setSesionIniciada}/>
            }
            
        </>
    );
    


            // FORMA 1 - Condicional if
    // const sesionIniciada = false;
    // if (sesionIniciada === true){
    //     return (
    //         <div className="contenedor">
    //             <Header nombre = {nombre}/>
    //             <Lista titulo = 'Lista de contactos' contactos = {amigos}/>
    //             <Lista titulo = 'Lista de famosos' contactos = {famosos}/>
    //             <button className="btnCerrarSesion"> Cerrar Sesión</button>
    //         </div>
    //     );
    // } else {
    //     return <LoginForm/>
    // }

 }



    

export default App
