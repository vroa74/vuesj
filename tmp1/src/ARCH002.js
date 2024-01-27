
console.log('Hola Mundo !!!')
const arreglo = [];
const arreglo1 = new Array(100);
const arraglo2 = [1,2,3,4];

const arreglo3 = [...arraglo2]
const arreglo4 = arraglo2.map( function ( n ) {
    return n * 2;
    })

arreglo3.push(5);
arreglo3.push(6);
console.log(arreglo);
console.log(arreglo1);
console.log(arraglo2);
console.log(arreglo3);
console.log(arreglo4);

