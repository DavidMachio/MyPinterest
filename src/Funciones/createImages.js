import { printInicio } from "./inicio";
import { printMensaje } from "./printMensaje";
const containerFotos = document.querySelector('#containerFotos')

export const createImages = (imagesList) => {
   
      for (let i = 0; i < imagesList.length; i++) {
        const articleFoto = document.createElement("article");
        const image = document.createElement("img");
        const guardar = document.createElement('button');
        image.src = imagesList[i].urls.regular;
        image.alt = imagesList[i].alt_description;
        guardar.textContent = 'Guardar'
        image.classList = "imagesResults";
        guardar.classList = 'guardar'
        articleFoto.append(image);
        articleFoto.append(guardar);
        if (i % 2 == 0) {
          articleFoto.classList = "par articleFoto";
        } else {
          articleFoto.classList = "impar articleFoto";
        }
        containerFotos.append(articleFoto);
      }
    
    app.append(containerFotos)
  };