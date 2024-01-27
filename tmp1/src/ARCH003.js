
console.log('Hola Mundo !!!')

function saludar(){
    return 'saludar';
}
const saludarx = function (xyz){
    return `Hola ${xyz}`
}

const saludary =(xyz = 'victor') => {
    return `Hola ${xyz}`
}


console.log( saludar() );

const heroes = [{
    id: 1,
    name: 'baman'
},{
    id: 2,
    name: 'superman'
}]

const filtro = heroes.some( (heroe)=> heroe.id === 1);
const filtrox = heroes.find( (heroe)=> heroe.id === 1);


console.log(`El heroe con id  1  existe ??? ${filtro}`);