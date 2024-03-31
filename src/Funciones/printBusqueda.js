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
            valor = ''
            buscador.value = ''
            buscador.textContent = ''
            primeraBusqueda = true

             printMensaje('No se han encontrado resultados', 'Pero...¿que te parece esto?')
        printInicio()
        } else {
            createImages(imageList);
        }
    })
}