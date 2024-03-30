import './printMensaje.css'
const containerFotos = document.querySelector('#containerFotos')

export const printMensaje = (text, text2) => {
    const sectionMensaje = document.createElement('section')
    const mensaje = document.createElement('h2');
    const mensaje2 = document.createElement('h2');

    sectionMensaje.classList = 'sectionMensaje'
    mensaje.textContent = text
    mensaje2.textContent = text2
    sectionMensaje.append(mensaje);
    sectionMensaje.append(mensaje2);
    containerFotos.innerHTML = ''
    app.append(sectionMensaje)
    
}