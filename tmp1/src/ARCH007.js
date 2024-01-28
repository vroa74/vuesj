console.log('fetch API leccion 21');
console.log('-------------------------')
// API: WqP2DoP9sc18W7E4N8BSsksHYBZlYTho
// API: UymUs9O4HGiTZIEN6CEkJWUOECA4PAvM
//  WqP2DoP9sc18W7E4N8BSsksHYBZlYTho
const apiKey1 ='WqP2DoP9sc18W7E4N8BSsksHYBZlYTho'
const apiKey2 ='UymUs9O4HGiTZIEN6CEkJWUOECA4PAvM'
const urlh= `https://api.giphy.com/v1/gifs/random?api_key=${apiKey1}`
console.log(urlh)
fetch(urlh)
    .then(resp => resp.json())
    .then( ({data})=>{
        const { url } = data.images.original
        console.log(url)
        const img = document.createElement('img')
        img.src= url
        document.body.append(img)
    })



