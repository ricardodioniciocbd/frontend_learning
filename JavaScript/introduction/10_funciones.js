// LAS FUNCIONES:
//               Son bloques de codigo que nosotros podemos definir para poder llamar cuando nosotros queramos.
//               De momento hemos visto el codigo que escribirmos en pantalla y en cuanto lo escribimos y lo ejecutamos en el navegador ese codigo automaticamente se ejecuta
//               Pero que pasa si yo quiero que no se ejecute imediatamente.. Por ejemplo queiro que se ejecute cuando precionamos un boton.

//               Tambien nos a reutilizar codigo.



// FORMA 1
// function saludar() {
//     console.log('Hola soy la funcion saludar!!!');
// }
// saludar();

// FORMA EN QUE UNA VARIABLE GUARDA UNA FUNCION Y LA EJECUTA:
// const variable = saludar;
// console.log(variable);



// FORMA 2
// Asignando una funcion a una variable
// const saludar = function() {
//     console.log('Hola desde variable!')
// }
// saludar();


// FORMA 3 
const saludar = () => {
    console.log('Hola desde la Funcion de tipo flecha () => ');
}
saludar();



