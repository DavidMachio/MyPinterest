import { getRandoms } from "./getRandoms"
import { createImages } from "./createImages"
import { printInicio } from "./inicio";
import { printMensaje } from "./printMensaje";
import { inputValue } from "../components/Header/Header";
import { buscador } from "../components/Header/Header";

export let primeraBusqueda = false

export const printBusqueda = (word, page) => {
    let valor = inputValue
    console.log(primeraBusqueda)
    

    getRandoms(word, page)
    .then((imageList) => {
        if (imageList == 0) {
            console.log('este es el valor de ' + buscador)
            console.log(valor)
            valor = ''
            buscador.value = ''
            buscador.textContent = ''
            console.log(valor)
            console.log(buscador.value)
            primeraBusqueda = true
            console.log(primeraBusqueda)

             printMensaje('No se han encontrado resultados', 'Pero...¿que te parece esto?')
        printInicio()
        } else {
            console.log('else')
            createImages(imageList);
        }
    })
}