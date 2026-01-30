// SCOPE tambien se le puede llamar ALCANCE o Ambito de las variables, y significa> desde que punto de nuestro codigo nos va a permitir acceder a nuestras variables.

/*
    Global Scope o Variables Globales\
     - Son las variables declaradas fuera de una funcion
     - Podemos acceder a ellas desde cualqueir parte del codigo.
     - Podemos usar const, var, y let.
*/

let nombre = 'ryan'; // variable global

const saludo = () => {
    console.log('Hola ', nombre); 

    nombre = 'ricardo';
    console.log('El nuevo nombre es: ', nombre);
  
};

saludo();