// const boleto = 'VIP';
// let codigoAcceso; 

// if (boleto === 'VIP') {
//     codigoAcceso = 'VIP-123-456';
// } else {
//     codigoAcceso = 'REGULAR-456-789';
// }

// console.log(codigoAcceso);


//          #1

// LO MISMO QUE EL ANTERIOR PERO CON OPERADOR TERNARIO ?
const boleto = 'vip' ;
const codigoAcceso = (boleto === 'vip') ? 'VIP-123-456' : 'REGULAR-456-789'; 
// console.log(codigoAcceso)



//          #2
// otra forma
boleto === 'vip' ? console.log('Tu boleto es de tipo VIP') : console.log('Tu boleto es de tipo REGULAR');



