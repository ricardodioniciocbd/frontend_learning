import Contacto from "./Contacto"

const Lista = ({titulo = 'Contactos de Contactos (Title Default)', contactos = [] }) => {
    return (
        <section className="lista">
                <h3>{titulo}</h3>
                {contactos.map( (contacto , index) => { 
                    return <Contacto key={index} nombre={contacto.nombre} telefono={contacto.telefono}/>
                    

                })}
            </section>

    );
};

export default Lista;