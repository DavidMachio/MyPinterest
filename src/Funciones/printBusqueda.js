import { getRandoms } from "./getRandoms"
import { createImages } from "./createImages"

export const printBusqueda = (word, page) => {
    getRandoms(word, page)
    .then((imageList) => {
        createImages(imageList)
    })
    }