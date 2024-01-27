
console.log('Hola Mundo !!!')

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    address :{
        city: 'New York',
        zip: 24234,
        lat:23.45542,
        lng: 32.234212
    }
}
 const persona2 = persona;
persona2.nombre = 'Peter';
const persona3 = {...persona}
persona3.nombre = 'Clark';
console.log( persona.nombre +' '+ persona.apellido +' '+ persona.edad  );
console.log(persona.address.city)
console.log(persona)
console.log(persona2)
console.log(persona3)
