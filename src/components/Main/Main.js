

import { printInicio } from '../../Funciones/inicio';
import { printBusqueda } from '../../Funciones/printBusqueda';
import { inputValue } from '../Header/Header';
import './Main.css'

export let page = 1

let newPage = page

export const printMain = () => {

    
    printInicio();
    window.addEventListener('scroll', function() {
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 200) {
            console.log('Se ha llegado al final de la página');
            if(inputValue == ''){ 
                printInicio()
            }else{
                console.log('segunda condicion')
                newPage++
                printBusqueda(inputValue, newPage)
            }
           
        }
    })
}
;


