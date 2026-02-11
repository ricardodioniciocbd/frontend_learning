const slideshow = document.getElementById('sliedeshow')
const slides = document.getElementById('slides')
const indicadores = document.getElementById('indicadores')
const btnCambiar = document.getElementById('cambiar')
let slideActual = 1;

const siguienteSlide = () => {
    // console.log('cambio de slide')
    const primerSlide = slides.children[0]; // Accedemos al primer elemento hijo y nos regresa un arreglo
    const ancho = primerSlide.offsetWidth; //obtemos el ancho de la primera imagen del slide
    // console.log(ancho) // los 495px son lo que nosotros queremos para desplazar todo nuestro contenedor.
    const velocidad = 200;

    slides.style.transition = `ease-out ${300}ms all`
    slides.style.transform = `translateX(-${ancho}px)`

    setTimeout( () => {
        slides.appendChild(primerSlide);
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(0)';
    }, velocidad);

    // Cambiamos los indicadores 
    if(slideActual < slides.children.length){
        slideActual++;
    } else {
        slideActual = 1;
    }
    
    indicadores.querySelector('.active').classList.remove('active');
    indicadores.children[slideActual-1].classList.add('active');

};

// btnCambiar.addEventListener('click', () => {   
// });


// setInterval - nos va a permitir pasarle una funcion que se queire que se ejecute cada determinado tiempo
setInterval( () => {
    siguienteSlide();

}, 4000)