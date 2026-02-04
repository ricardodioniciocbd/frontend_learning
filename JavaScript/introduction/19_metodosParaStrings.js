
// METODOS PARA TRABAJAR CON CADENAS DE TEXTO 

/*   PROPIEDAD: 
    .length -devulve el numero de caracteres de una cadena de texto.
*/
// const texto = 'Hola, soy ryan';
// console.log(`El numero de caracteres de la cadena de texto son ${texto.length}`)



/*
    .indexOf() .lastIndexOf() - Devuleve el index del primer/ultimo caracter especificado.
    -1: significa que no existe
*/
// const texto = 'Hola, soy ryan';
// console.log(texto.indexOf('a'));
// console.log(texto.lastIndexOf('a'));


/*
    .slice() - Devuelve un fragmento de una cadena de texto
    1er parametro - index desde donde cortar
    2do parametro (opcional) - index hasta donde queremos cortar
*/
// const texto = 'Hola, soy ryan"sn';
// const index = texto.indexOf('s');
// const lastIndex = texto.lastIndexOf('s')
// console.log(texto.slice(index,lastIndex))  // soy ryan


/*
        .replace() - devuelve una cadena de texto en donde remplaza un valor por otro
            1er parametro - el texto que queremos remplazar
            2do parametro - el texto que quremos poner
*/

// const texto = 'Hola soy Ryan';
// console.log(texto.replace('Ryan', 'Ricardo'));




/*
        .split() - convierte una cadena de texto en un arreglo
            Tenemos que especificar donde cortar cada elemento.

            1er parametro - el caracter que funcionara como separador
*/

const texto = 'Hola yo soy Ryan';
console.log(texto.split(' '));// pondemos dentro el parametro que queremos utilizar para separar el la cadena en un arreglo
