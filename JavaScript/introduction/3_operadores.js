/* 
 * Operadores en JavaScript:
 * 
 * 1. Aritmeticos
 * 2. Asignacion
 * 3. Comparacion
 * 4. Logico
 * 5. Bitwise
 * 6. Unary
 * 7. Ternary
 */


// 1. Aritmeticos: + suma, - resta, * multiplicacion, / div, % modulo, ++ aumento, -- decremento

const resultado = 10 - 10;
const resultado2 = 10 % 3;

let numero = 1;
numero++;

console.log(numero);


/* 2. Operadores de asignación
        += Suma un nuemro al valor de una variable.
        -= Resta un numero al valor de una varible.
        *= multiplica un numero al valor de una variable
        /= divide un numero al valor de una variable
        %= Obtiene el sobbrante de una divicion y lo asigna a la variable
*/

let numero2 = 10; // Aumentamos 5 unidades a este valor
numero2 -= 5;
console.log(numero2)



/*Operadores de comparacion 

        ==   Igual que
        ===  Igual en valor y typo de valor
        !=   Diferente que
        !==  Diferente en va?lor y diferente typo
        >    Mayor que 
        <    Menor que 
        >=   Mayor o igual que 
        <=   Menor o igual que
        ?    Operador ternario, nos va a permitir hacer comparaciones y ejecutar un codigo si se cumple una CONDICION

*/

// const resultado3 = 5 > 1; // True 
// const resultado3 = 20 <= 20; // True
// const resultado3 = 10 == 10; // True
// const resultado3 = 10 == '10'; // True (Solo compara el valor)
// const resultado3 = 10 === '10' // False (Compara valor si es igual y si el tipo de dato es igual)

// Si la condicion se cumple, se ejecuta el codigo de la izquierda, si no, se ejecuta el codigo de la derecha
const resultado3 = 0 > 1 ?  'El primer valor es mayor que el segundo' : 'El segundo valor es mayor que el primero';
console.log(resultado3);

