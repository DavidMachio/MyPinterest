import { getRandoms  } from "./getRandoms"
import { createImages } from "./createImages";


const wordRandom = [
    'wild', 'star wars', 'ny', 'america', 'volcano', 'water', 'calavera'
]






 export const printInicio = () => {
    
    let randomNumber = Math.floor(Math.random()*7);
    let randomPage = Math.floor(Math.random()*7);
    getRandoms(wordRandom[randomNumber], randomPage)
    .then((imageList) => {
        createImages(imageList)
    })
    
    }

    
    
    
    


