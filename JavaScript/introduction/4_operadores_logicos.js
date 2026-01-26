/* OPERADORES LOGICOS 
    &&  And
    ||  or 
    !   Not

*/

const nombre = 'Carlos';
const edad = 19;
const tieneEntrada = false;
const tienePermiso = true;

// const permitirAcceso = edad >= 18 ? 'Acceso Permitido' : 'Acceso Denegado';
// console.log(permitirAcceso);

//      AND (&&) - Todos los valores deben ser true para que el resultado sea true
// const perimitirAcceso = edad >= 18 && tieneEntrada;
// console.log('Acceso permitido al conciero: ' + perimitirAcceso)


//      OR (||) - Solo un valor debe ser true para que el resultado sea true
// const perimitirAcceso = (edad >= 18 && tieneEntrada) || (tienePermiso && tieneEntrada);
// console.log('Acceso permitido al conciero: ' + perimitirAcceso)


//      NOT (!) - Invierte el valor de la condicion
const variable = true;
console.log(!variable)