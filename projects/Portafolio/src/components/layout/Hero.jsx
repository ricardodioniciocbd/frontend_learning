import { useState } from 'react'; // Importamos el hook useState para manejar el estado del componente
import './Hero.css';

const Hero = () => {
    // Declaramos una variable de estado 'videoLoaded' iniciada en false.
    // Esto nos servirá para saber si el video ya terminó de cargar sus datos iniciales.
    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <>
            <section className="hero">
                <div className="contenido">

                    <h3 className="titulo">
                        <span>Hola!</span>Soy Ricardo
                    </h3>

                    <p className="subtitulo"> 
                        Estudiante de Ingeniería en Sisistemas Computacionales <br />y Desarrollador Web
                    </p>

                    <div className='botones'>
                        <a href="#trabajos" className="boton transparente">
                        Ver trabajos
                        <div className="icono">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
                            </svg>
                        </div>
                    </a>

                    <a href="#contacto" className="boton">
                        Mandame un mensaje
                        <div className="icono">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
                            </svg>
                        </div>
                    </a>
                    </div>

                </div>

                {/* 
                   Contenedor del video.
                   Usamos una plantilla literal para agregar la clase 'loaded' dinámicamente.
                   Si videoLoaded es true, la clase final será "video-container loaded".
                   Si es false, será solo "video-container".

                   // Si videoLoaded es false, la clase es solo "video-container" (invisible en CSS).
// Si                 videoLoaded es true, la clase es "video-container loaded" (visible en CSS).
                */}
                <div className={`video-container ${videoLoaded ? 'loaded' : ''}`}>
                    <video 
                        src="https://www.pexels.com/download/video/5495784/" 
                        loop 
                        autoPlay 
                        muted 
                        className='video'
                        // Evento que se dispara cuando el navegador ha cargado suficientes datos para reproducir el video.
                        // Al dispararse, actualizamos nuestro estado a true.
                        onLoadedData={() => setVideoLoaded(true)}
                    ></video>

                </div>



            </section>
        
        </>
    );
}

export default Hero;