/* 
    Tipos de datos que podemos guardar en las variables:
        string - Cadena de Texto
        nomber - Numero
        boolean - Booleano (verdadero o falso)
        object - Objeto
        function - Funciones

        null - Valor nulo
        undefined - Valor sin definir
 */

// Cadena de texto
const nombre = 'ryan';
const parrafo = "Esto es un 'parrafo' ";
const parrafo1 = 'Esto es un "parrafo" ';
const parrafo2 = "Esto es un "/parrafo/" ";

// numero
const numero = 4;
const numero1 = -4.11;

// Booleano - condicionales (true / false)
const usuarioConectado = false

const mayorQue = 1 > 4;
console.log(mayorQue); //false


// Arrays - Arreglos
const arreglo = ['texto', 456, true, {propiedad: 'valor'}, [1 , 2, 3]];
console.log(arreglo);


// Objetos - Colecciones de datos en parejas.. como los diccionarios en python (clave: valor)
const persona = {
    nombre: 'ryan',
    edad: '21',
    carro: {
        marca: 'bmw',
        color: 'negro',
    },
}
console.log(persona.edad); // accedemos al objeto y a un valor especifico.
console.log(persona.carro.color);


//Function
function hola() {
    console.log('Hola, esto es una funcion en JS');
}

hola();


// Null 
// Normalmente lo usamos cuando queremos especificar que un valore sea nulo.
const miVarible = null;


// Undefined
// undefined se usa para indicarnos que un valor no esta definido.. normalmente no lo ocupamos, sino que JS lo asigna.
const miVariable1 = undefined;