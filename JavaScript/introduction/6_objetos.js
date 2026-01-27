// ARREGLOS: Podemos guardar un monton de informacion pero no la podemos organizar.
const personaArreglo = ['Carlos', 27, 'correo@correo.com', true, true];
console.log(personaArreglo[0])

// OBJETOS: Con los objetos si podemos organizar la informacion con Propiedad: Valor.
const PersonaObjeto = {
    nombre: 'Ryan',         // a las variables dentro de objetos se les llama PROPIEDADES
    edad: '21',
    correo: 'correo@correo.com', 
    suscripciones: {
        web: true,
        correo: true
    },
    coloresFavoritos: ['Negro', 'Rojo'], 

    saludo: function(){     // a las funciones dentro de objetos se les llama METODOS
        alert('Hola')
    }
};

// 2 Formas de acceder a las propiedades.
console.log(PersonaObjeto.nombre);
console.log(PersonaObjeto['edad']) // para que no lo tome como variable, sino como propiedad usamos comillas 'edad'

const variable = 'suscripciones';
console.log(PersonaObjeto[variable]); // las variables, no se les pone commillas

// PARA ACCEDER A SUSCRIPCIONES-CORREO
console.log(PersonaObjeto.suscripciones.web)
console.log(PersonaObjeto.suscripciones["correo"])

// Agregregar al OBJETO, nuevos valores
PersonaObjeto.pais = 'Mexico';
PersonaObjeto.pais = 'Argentina'; // Se puede sobrescribir valores
console.log(PersonaObjeto)


// ACCEDER / EJECUTAR UN METODO DENTRO DE LA FUNCION
PersonaObjeto.saludo();