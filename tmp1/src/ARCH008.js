console.log('axios leccion 22');
console.log('-------------------------')
// import axios from '../node_modules/axios/dist/axios.js'
import axios from 'axios'

//  WqP2DoP9sc18W7E4N8BSsksHYBZlYTho
const apiKey1 ='WqP2DoP9sc18W7E4N8BSsksHYBZlYTho'
const apiKey2 ='UymUs9O4HGiTZIEN6CEkJWUOECA4PAvM'
const http= `https://api.giphy.com/v1/gifs/random?api_key=${apiKey1}`

//instacia de  axios previamente configurada
const giphyApi=axios.create({
    baseurl:'https://api.giphy.com/v1/gifs',
    params:{
        api_key: apiKey1

    }
})

giphyApi.get('/random')
    .then(console.log)


