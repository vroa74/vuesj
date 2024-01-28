//console.log('hola mundo')
import superHeroes, {owners} from "./data/heroes.js";
//console.log(superHeroes)
//console.log('-----------------')

 export const getHeroById = ( id ) => superHeroes.find( hero => hero.id === id )
 export const getHeroesByOwner = (owner) => superHeroes.filter( (hero) => hero.owner === owner)
 export const getHeroesByOwnerx = ( owner ) => superHeroes.filter( hero => hero.owner === owner )
/*

console.log( getHeroById(2) ) // Spiderman

console.log(getHeroesByOwner('Marvel'));
console.log('-----')
// console.log( getHeroById(2) ) // Spiderman

 console.log( getHeroesByOwnerx('Marvel') ) // []

 */