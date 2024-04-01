import { inputValue } from "../components/Header/Header";
import { printProfile } from "../components/Profile/Profile";
import { printInicio } from "./inicio";
import { primeraBusqueda, printBusqueda } from "./printBusqueda";



export let page = 1



export const printScroll = async () => {
    if(printProfile){
        return
    }else{
        window.addEventListener('scroll', function() {
            if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
                console.log('Se ha llegado al final de la página');
                if(inputValue){ 
                    console.log('1')
                    if(primeraBusqueda === false){
                        console.log('2')
                        page++
                    printBusqueda(inputValue, page++)
                    }else{
                        console.log('3')
                        printBusqueda(inputValue, page++)
                    }
                }else{
                    console.log('4')
                    console.log('segunda condicion')
                    printInicio()
                }
               
            }
        })
    }
}