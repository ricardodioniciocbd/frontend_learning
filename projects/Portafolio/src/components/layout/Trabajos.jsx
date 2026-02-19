import './Trabajos.css';
const Trabajos = () => {
    return (
        <>
            <section className="trabajos" id="trabajos"> 

                <div className="encabezado">
                    <h3 className="titulo">Mis trabajos</h3>
                    <p className="subtitulo">Estos son mis trabajos como freelace.</p>
                </div>
                <div className="filtros">
                    <label htmlFor="todos">                {/* El label encierra el input para poder darle clic al texto y seleccionar el radiobtton */}
                        <input type="radio" name="categoria" id="todos" />
                        <span className='opcion'>Todos</span>                 {/*span: para darle estilos al texto 'Todos' */}
                         <span className='opi'></span>
                    </label>
                    <label htmlFor="diseño-web">               
                        <input type="radio" name="categoria" id="diseño-web" />
                        <span className='opcion'>Diseño Web</span>                  
                    </label>
                    <label htmlFor="desarrollo-web">               
                        <input type="radio" name="categoria" id="desarrollo-web" />
                        <span className='opcion'>Desarrollo Web</span>                  
                    </label>
                    <label htmlFor="aplicaciones-moviles">                
                        <input type="radio" name="categoria" id="aplicaciones-moviles" />
                        <span className='opcion'>Aplicaciones Moviles</span>                  
                    </label>
                    <label htmlFor="Desarrollo-software">                
                        <input type="radio" name="categoria" id="Desarrollo-software" />
                        <span className='opcion'>Desarrollo de software</span>                 
                    </label>
                </div>
                <div className="grid">
                    <div className="trabajo">
                        <a href="#" className="thumb">
                            <img loading="lazy" src="./assets/trabajos/diseño-1.png" alt="Trabajo de diseño web" />
                        </a>
                        <div className="info">
                            <div className="textos">
                                <a href="#" className="nombre">Trabajo 1</a>
                                <p className="categoria">Diseño web</p>
                            </div>
                            <a href="#" className="btn-ir">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                     <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="trabajo">
                        <a href="#" className="thumb">
                            <img loading="lazy" src="./assets/trabajos/diseño-1.png" alt="Trabajo de diseño web" />
                        </a>
                        <div className="info">
                            <div className="textos">
                                <a href="#" className="nombre">Trabajo 1</a>
                                <p className="categoria">Diseño web</p>
                            </div>
                            <a href="#" className="btn-ir">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                     <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="trabajo">
                        <a href="#" className="thumb">
                            <img loading="lazy" src="./assets/trabajos/diseño-1.png" alt="Trabajo de diseño web" />
                        </a>
                        <div className="info">
                            <div className="textos">
                                <a href="#" className="nombre">Trabajo 1</a>
                                <p className="categoria">Diseño web</p>
                            </div>
                            <a href="#" className="btn-ir">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                     <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="trabajo">
                        <a href="#" className="thumb">
                            <img loading="lazy" src="./assets/trabajos/diseño-1.png" alt="Trabajo de diseño web" />
                        </a>
                        <div className="info">
                            <div className="textos">
                                <a href="#" className="nombre">Trabajo 1</a>
                                <p className="categoria">Diseño web</p>
                            </div>
                            <a href="#" className="btn-ir">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                     <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="trabajo">
                        <a href="#" className="thumb">
                            <img loading="lazy" src="./assets/trabajos/diseño-1.png" alt="Trabajo de diseño web" />
                        </a>
                        <div className="info">
                            <div className="textos">
                                <a href="#" className="nombre">Trabajo 1</a>
                                <p className="categoria">Diseño web</p>
                            </div>
                            <a href="#" className="btn-ir">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                     <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="trabajo">
                        <a href="#" className="thumb">
                            <img loading="lazy" src="./assets/trabajos/diseño-1.png" alt="Trabajo de diseño web" />
                        </a>
                        <div className="info">
                            <div className="textos">
                                <a href="#" className="nombre">Trabajo 1</a>
                                <p className="categoria">Diseño web</p>
                            </div>
                            <a href="#" className="btn-ir">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                     <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>


            </section>
        </>
    );
}

export default Trabajos;