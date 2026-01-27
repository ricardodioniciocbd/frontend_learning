// TAMBIEN SE PUEDEN SOBRESCRIBIR LOS VALORES DE UN ARREGLO...

const arreglo = ['Texto', 456.10, false, {propiedad: 'valor'}, [1,2,3,4]];
console.log(arreglo);
//1
const amigos = ['Alejandro', 'Cesar', 'Manolo'];
console.log(amigos[0]);

//2
const colores = [];
colores[0] = 'rojo';
colores[1] = 'azul';
colores[2] = "morado";
colores[3] = 'amarillo';
colores[4] = 'rosa'
console.log('El arreglo tiene: ', colores.length, 'colores los cuales son:', colores  );

// FUNCION PUSH: sirve para  agregar mas colores al final de nuestro arreglo
colores.push('WHITE');
console.log('El arreglo tiene: ', colores.length, 'colores los cuales son:', colores  );