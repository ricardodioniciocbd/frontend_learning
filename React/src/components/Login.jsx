const LoginForm = ({setSesionIniciada}) => {

    const iniciarSesion = () => {
        setSesionIniciada(true);
    }
    return (
        <div className="contenedor">
            <form className="login">
                <h3>Inicia Sesión</h3>
                <input type="text" placeholder="Usuario"/>
                <input type="text" placeholder="Contraseña" />
                <button onClick={iniciarSesion}>Iniciar Sesión</button>
            </form>
        </div>
    );

};

export default LoginForm;