import './Trabajos.css';
import { useState } from 'react';

import trabajos from '../data/trabajos';
import Modal from '../Modal';

const Trabajos = () => {

    //Crear un estado para GUARDAR LA CATEGORIA SELECCIONADA
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');
    const [trabajosFiltrados, setTrabajosFiltrados] = useState(trabajos);
    const [estadoModal, setEstadoModal] = useState(false);
    const [trabajoSeleccionado, setTrabajoSeleccionado] = useState(trabajos[0]);
    
    const handleChange = (e) => { // funcion para obtener el evento del radioB. al cual se le dio CLIC
        const categoria = e.target.id; // de esta manera obtenemos la categoria la cual queremos filtrar.
        setCategoriaSeleccionada(categoria);

        if(categoria === 'todos') {
        setTrabajosFiltrados(trabajos);

         } else {
                const nuevosTrabajos = trabajos.filter( (trabajo) => {
                    if (trabajo.categoria === categoria) {
                        return true;
                    }
                });
                setTrabajosFiltrados(nuevosTrabajos);
         }
    };

    const openModal = (e, id) => { 
        e.preventDefault();
        setEstadoModal(true)

        const trabajo = trabajos.find( (trabajo) => { // funcion para encontrar el trabajo abierto y compararlo y que nos devuleva un objeto
            if (trabajo.id === id){
                return true;
            }
        });

        setTrabajoSeleccionado(trabajo);

    };

    const closeModal = () => {
        setEstadoModal(false)
    }




    return (
        <>
            <section className="trabajos" id="trabajos"> 

                <div className="encabezado">
                    <h3 className="titulo">Mis trabajos</h3>
                    <p className="subtitulo">Estos son mis trabajos como freelace.</p>
                </div>
                <div className="filtros">
                    <label htmlFor="todos">                {/* El label encierra el input para poder darle clic al texto y seleccionar el radiobtton */}
                        <input type="radio" name="categoria" id="todos" onChange={handleChange} checked={categoriaSeleccionada === 'todos' }/>
                        <span className='opcion'>Todos</span>                 {/*span: para darle estilos al texto 'Todos' */}
                         <span className='opi'></span>
                    </label>
                    <label htmlFor="diseño-web">               
                        <input type="radio" name="categoria" id="diseño-web" onChange={handleChange} checked={categoriaSeleccionada === 'diseño-web' }/>
                        <span className='opcion'>Diseño Web</span>                  
                    </label>
                    <label htmlFor="desarrollo-web">               
                        <input type="radio" name="categoria" id="desarrollo-web" onChange={handleChange} checked={categoriaSeleccionada === 'desarrollo-web' }/>
                        <span className='opcion'>Desarrollo Web</span>                  
                    </label>
                    <label htmlFor="aplicaciones-moviles">                
                        <input type="radio" name="categoria" id="aplicaciones-moviles" onChange={handleChange} checked={categoriaSeleccionada === 'aplicaciones-moviles' }/>
                        <span className='opcion'>Aplicaciones Moviles</span>                  
                    </label>
                    <label htmlFor="desarrollo-software">                
                        <input type="radio" name="categoria" id="desarrollo-software" onChange={handleChange} checked={categoriaSeleccionada === 'desarrollo-software' }/>
                        <span className='opcion'>Desarrollo de software</span>                 
                    </label>
                </div>
                <div className="grid">
                    { trabajosFiltrados.map( (trabajo, index) => {
                        return (
                            <div className="trabajo" key={index}>
                                <a href="#" className="thumb" onClick={(e) => openModal(e, trabajo.id)}>
                                    <img loading="lazy" src={trabajo.thumb.url} alt={trabajo.thumb.alt} />
                                </a>
                                <div className="info">
                                    <div className="textos">
                                        <a href="#" className="nombre" onClick={(e) => openModal(e, trabajo.id)}>{trabajo.info.nombre}</a>
                                        <p className="categoria">{trabajo.info.categoria}</p>
                                    </div>
                                    <a href="#" className="btn-ir" onClick={(e) => openModal(e, trabajo.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 16 16">
                                            <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                                        </svg>
                                    </a>
                                </div>
                             </div>

                        );
                    })}
                  
             
                </div>

            </section>
           
            {estadoModal && <Modal closeModal={closeModal} trabajo={trabajoSeleccionado}/>}



        </>
    );
}

export default Trabajos;