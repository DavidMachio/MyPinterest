import { printBusqueda } from '../../Funciones/printBusqueda';
import { printInicio } from '../../Funciones/inicio';
import { printMensaje } from '../../Funciones/printMensaje';
import {  printProfile } from '../Profile/Profile';




import './Header.css'
import { printColection } from '../../Funciones/printColection';
const app = document.querySelector('#app')
const header = document.querySelector('#header')
const containerFotos = document.querySelector('#containerFotos')
export let inputValue = ''
export let profile;
export const buscador = document.createElement('input');

export const clearSearchInput = () => {
    buscador.value = '';
};

export const printHeader = () => {

    
    const logo = document.createElement('img');
    const contenedorBotones = document.createElement('div')
    const inicio = document.createElement('button');
    const explorar = document.createElement('button');
    const barraBusqueda = document.createElement('div');
    
    const buscar = document.createElement('button');
    const contenedorIconos = document.createElement('div')
    const likeList = document.createElement('img');
    profile = document.createElement('img');
    
    
    logo.classList = 'logo';
    contenedorBotones.classList.add('contenedorBotones')
    inicio.classList.add('inicio')
    explorar.classList = 'explorar'
    barraBusqueda.classList = 'barraBusqueda'
    buscador.classList = 'buscador'
    buscar.classList.add('buscar')
    contenedorIconos.classList.add('contenedorIconos')
    likeList.classList.add('likeList')
    profile.classList.add('profile')


    logo.src = '/iconoPinterest.png'
    inicio.textContent = 'Inicio'
    explorar.textContent = 'Explorar'
    buscador.placeholder = '🔍   Hoy quiero ver...'
    buscar.textContent = 'Buscar'
    likeList.src = '/favourite.png'
    profile.src = '/profile.png'


    header.append(logo)
    contenedorBotones.append(inicio, explorar)
    header.append(contenedorBotones)
    barraBusqueda.append(buscador)
    barraBusqueda.append(buscar)
    header.append(barraBusqueda)
    contenedorIconos.append(likeList, profile)
    header.append(contenedorIconos)


    logo.addEventListener('click', () => {
        containerFotos.innerHTML = '';
        app.innerHTML = ''
        inputValue = '';
        buscador.value = '';
        printInicio(),
    inicio.classList.remove('active')
    explorar.classList.remove('active')
    profile.classList.remove('iconoActive')
}
    )
    inicio.addEventListener('click', () => {
        containerFotos.innerHTML = '';
        app.innerHTML = ''
        inputValue = '';
        buscador.value = '';
        printInicio();
    inicio.classList.add('active')
    buscar.classList.remove('active')
    explorar.classList.remove('active')
    profile.classList.remove('iconoActive')
})

explorar.addEventListener('click', () => {
    console.log('hola');
    containerFotos.innerHTML = ''
    app.innerHTML = ''
    inputValue = '';
    buscador.value = '';
    inicio.classList.remove('active')
    buscar.classList.remove('active')
    profile.classList.remove('iconoActive')
    explorar.classList.add('active')
    printColection()
    ;
})


buscador.addEventListener(('input'), (ev) => {
    inputValue = ev.target.value;
})



buscar.addEventListener('click', () => {
    console.log('buscando');
    containerFotos.innerHTML = ''
    app.innerHTML = ''
    buscar.classList.add('active')
    inicio.classList.remove('active')
    explorar.classList.remove('active')
    profile.classList.remove('iconActive')
    if(buscador.value == ''){
        printMensaje('Introduce una búsqueda...', 'o échale un vistazo a lo último');
        printInicio()
    }else{
        console.log('busqueda')
    printBusqueda(inputValue)
    }
})



    profile.addEventListener('click', () => {
        buscador.value = '';
        buscar.classList.remove('active')
        inicio.classList.remove('active')
        explorar.classList.remove('active')
        profile.classList.add('iconoActive')
        printProfile();

        localStorage.setItem('profileImage', profile.src);
    })
    


}



