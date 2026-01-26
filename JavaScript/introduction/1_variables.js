// Son espacio en memoria donde podemos gurardar informacion...

/* Reglas
        Deben empezar por una letra, No numeros, No simbolos... a exepcion del _ y $
        Deben tener nombres unicos
        No usar nombres de palabras reservadas (var, for, const, etc)

    Tipos de datos que podemos guardar en las variables:
        string - Cadena de Texto
        nomber - Numero
        boolean - Booleano (verdadero o falso)
        object - Objeto
        function - Funciones

        null - Valor nulo
        undefined - Valor sin definir
 */

var edad = 27;
console.log(edad);

let nombre = 'Carlos';
console.log(nombre);

const PI = 3.1416;
console.log(PI);


// variables en una sola linea
let telefono = 23, pais = 'pepsi', id;
console.log(telefono);
console.log(pais);


// Hacer una suma y guardar el resultado en una variable
let num1 = 1;
let num2 = 2;
let num3 = num1 + num2;
console.log(num3);

const suma = 4 + 4;
console.log('La suma es: ',suma);

// Se puede reasignar valores a la misma variable..
let miVariable = 'texto';
miVariable = 7;