console.log('promesas');

console.log('inicio')

/*
* resolve : es el caso que la promesa sea positiva
* rejet : es la promesa resuelta con error.
*   */  /*
new Promise( (resolve, reject) => {
   console.log('cuerpo de la promesa');
   resolve('Promesa resuelte');
}).then( (msg) => console.log(msg+ ' Yeeey!!!!'))
    .catch((err)=> console.log(err))
//--------------------------------------------------  es la misma promesa resumida
new Promise( (resolve, reject) => {
   console.log('cuerpo de la promesa');
   resolve('Promesa resuelte');
}).then( console.log)
  .catch(console.log)
console.log('fin') */
// capitulo 20 continuacion de las promesas

const getHeroByIdAsync = (id) => {
   return new Promise((resolve, reject) => {
       setTimeout(() =>{

       },1000);

   });
}