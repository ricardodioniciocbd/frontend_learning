/*
        .indexOf()
            obtenemos el primer index de un elemento.
            si no hay elementos nos retorna -1
            util cuando no sabemos el index de algun arreglo.. basta con colocar su valor o nombre y si lo encuentra nos retorn 1
            Nos retorna el primer index que encuentra.
*/

const nombres = ['Carlos', 'Rafael', 'Sara', 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara'];
console.log(nombres.indexOf('Sara')); // index: 2
console.log(nombres.indexOf('Ricardo')); // -1



/*
        .lastIndexOf()
            Obtenemos el ultimo index de un elemento.
*/
console.log(nombres.lastIndexOf('Sara')); // 8





/*
        .forEach()
            Nos permite ejeuctar una funcion por cada elemento de un arreglo por ejemplo.
*/
nombres.forEach((nombre, index) => { // cada elemento de una funcion tiene un parametro (nombre)
    console.log(`Hola mi nombre es ${nombre} (${index})`); // podemos llamar cada nombre con el forEach del arrglo nombres
});         // ESTO SE LE LLAMA RECORRER UN ARREGLO, DE CADA UNO DE LOS ELEMENTOS QUE NOSOTROS TENEMOS EN EL ARREGLO.




/*
        .find()
        Nos permite recorrer un arreglo y devuelve el PRIMER ELEMENTO que retornemos.
        A diferencia de forEach, .find podemos hacer uso de un RETURN

        POR EJEMPLO QUEREMOS ENCONTRAR EL PRIMER NOMBRE QUE EMPIEZE CON LA LETRA 'E'
*/

const resultado = nombres.find( (nombre) => {
    letra = 'E';
    //console.log(nombre[0]); // obtenemos la primera letra de cada nombre del arreglo
    if (nombre[0] === letra) {
        return nombre
    }
});

console.log(` El nombre que empiza con la letra ${letra} es: ${resultado}`)





/*
        .map()
            Nos permite ejecutar una funcion por cada elemento y crear un nuevo arreglo
            en base a los resultados de esa funcion
*/
const nombresMayusculas = nombres.map( (nombre) => { // el arreglo nombres
    return nombre.toUpperCase();
});
console.log(nombresMayusculas)


/*
        .filter()
            Nos permite ejecutar una funcion por cada elemento
            y luego crera un arreglo en una base a los resultado de esa funcion 

            Es lo mismo que map pero la diferencia es que en map se crea un nuebo arreglo de todos los elementos
            y con filter crea un arreglo pero con los elementos que cumplan una condicion

            Buscar un nombre con 4 letras
*/

const nombre4Letas = nombres.filter( (nombre) => {
    if (nombre.length === 4) {
        return nombre;
    }
});
console.log(`El nombre con 4 letras es: ${nombre4Letas.join(', ')}`);






/* 
        .includes()
        Nos permite saber si el arreglo contiene un elemento especificado 
        Nos arroja true o false
*/
console.log(nombres.includes('Sara')); // true
console.log(nombres.includes('Ryan')); // false



/*
        .every()
            Nos permite ejecutar un codicional sobre cada elemento y 
            nos devuelve true si todos los elementos cumpliero la condicion 

            // Por cada elemento ejeuctas una funcion 
            // Every nos va permitir devolver verdadero o falso si todos los elementos son de tipo string
            en caso de que exista algun otro valor que no sea str, nos retorna FALSE.
*/

const esString = nombres.every((nombre) => {
    if (typeof nombre === 'string'){
        return true
    } else {
        return false
    }
});

console.log(`Los nombres son strigs? ${esString}`);



/*
        .some()
            Nos permite ejecutar un condicional sobre cada elemento y 
            nos devuelve TRUE SI ALGUN elemento cumplio la condicion.
*/
const esStringsome = nombres.some((nombre) => {
    if (typeof nombre !== 'string'){
        return true
    } else {
        return false
    }
});

console.log(`El arreglo es valido? ${esStringsome}`);
// true - si hay un valor invalido
// false - si no hay un valor invalido