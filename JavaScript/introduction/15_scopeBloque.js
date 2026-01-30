/*
    Block Scope / Alcance de tipo bloque
    -   Pertenecen las variables declaradas con const  o let dentro de un bloque {todo el codiog que se encuentre dentro de llaves. como funciones, sentencias, objetos, etc.}
    -   Solo podemos acceder a ellas dentro del bloque.
*/

// Ejemplo 1 - variable de tipo bloque dentro de la condicional if {}

const edad = 19;
if (edad >= 18) {
    const accesoPermitido = true; // variable de tipo bloque

    if (true) {
        console.log(accesoPermitido);
    }
    const miFuncion = () => {
        console.log(accesoPermitido);
    
    }
    miFuncion();
}

// console.log(accesoPermitido); // Nos dice que la variable accesoP.. no esta definido. Porque solo esta definido dentro del bloque

