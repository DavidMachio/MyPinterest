import './PeticionesOff.css'

const app = document.querySelector('#app')

export const printOffPeticiones = () => {
    const mensaje = document.createElement('h2')
    mensaje.classList = 'printoff'
    mensaje.textContent = 'Se te acabaron las peticiones. Sólo podrás ver lo cargado en tu memoria anteriormente, vuelve en un par de horas, lo sentimos mucho...😢.'
    app.innerHTML = ''
    app.append(mensaje)

}