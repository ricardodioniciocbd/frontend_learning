import './Modal.css';

const Modal = () => {
    return(
        <>
            <div className="overlay active" id="overlay">
                <div className="modal">
                    <button className="boton-cerrar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                    <div className="grid">
                        <div className="thumb">
                            <img src="./assets/trabajos/1.png" alt="Trabajo 1" />
                        </div>
                        <div className="info">
                            <div className="head">
                                <h3 className="titulo">Trabajo 1</h3>
                                <span className="categoria">Categoria 1</span>
                            </div>
                            <div className="body">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque enim esse hic saepe necessitatibus veritatis, natus repudiandae accusantium fuga excepturi, voluptatibus quia similique dolores quidem soluta temporibus voluptates maxime praesentium!</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>

    );
};

export default Modal;