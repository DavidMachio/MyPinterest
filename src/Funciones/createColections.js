
import './printColections.css'
const app = document.querySelector('#app')


export const createColections = (colectionsList) => {
    const containerColections = document.createElement('main')
    containerColections.classList = 'containerColections'
    const sectionColections = document.createElement('section')
    sectionColections.classList = 'sectionColections'
    const titleColections = document.createElement('h2');
    titleColections.textContent = 'Descubre la mejores colecciones'
    titleColections.classList = 'titleColections'
    containerColections.append(titleColections)

for (let i = 0; i < colectionsList.length; i++) {
    const coleccion = document.createElement('article')
    const portada = document.createElement('img')
    const visitar = document.createElement('button')
    const profileUrl = document.createElement('a')
    const user = document.createElement('a')
    const userImg = document.createElement('img')


    coleccion.classList = 'coleccion'
    portada.classList = 'imagesResults portada'
    visitar.classList = 'visitar'
    user.classList = 'user'
    userImg.classList = 'userImg'


    portada.src = colectionsList[i].preview_photos[0].urls.regular
    userImg.src = colectionsList[i].user.profile_image.medium
    profileUrl.href = colectionsList[i].links.html
    user.href = colectionsList[i].links.html
    profileUrl.target = '_blank'
    visitar.textContent = 'Visitar'
    user.target = '_blank'

    user.append(userImg)
    profileUrl.append(portada)
    profileUrl.append(visitar)
    profileUrl.append(user)
    coleccion.append(profileUrl)
    
    sectionColections.append(coleccion);

}
containerColections.append(sectionColections)
app.append(containerColections)
}