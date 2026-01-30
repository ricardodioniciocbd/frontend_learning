
// **************** PARAMETOS ARGUMENTOS DE UNA FUNCION ****************
// sobre los parentesis de una funcion, nosotros podemos trabajar con Parametos
// los parametros nos van a permitir pasarle informacin a la funcion, para que la funcion luego pueda hacer operaciones con esos valores.

//  - Parametos: los valores especificados en la definicion
//  - Argumentos: Los valores que le pasamos a la funcion cuando las invocamos
const saludo = (nombre = 'valorPorDefecto') => {
    console.log(`Hola ${nombre}!`)

};

saludo('Ryan');
saludo('Alex');
saludo('rin');
saludo();  // undefined



//      Multiples parametros
// Supongamos que queremos hacer varios tipos de operaciones, usando 3 parametos, tipo y numeros... y que cuando se invoque la funcion, se realize deacuerdo al tipo de operacion

const operaciones= (tipoDeOperacion, num1, num2) => {
    // console.log(`: ${num1 + num2}`);

    if (tipoDeOperacion === 'suma') {
        console.log(`La suma es: ${num1 + num2}`)
    } else if (tipoDeOperacion === 'resta') {
        console.log(`La resta es: ${num1 - num2}`)

    } else {
        console.log(`La multiplicación es ${num1 * num2}`)
    }
}

operaciones('suma',2, 5);
operaciones('resta',2, 97);
operaciones('multiplicacion',2, 97);