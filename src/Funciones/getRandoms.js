import { printOffPeticiones } from "../components/PeticionesOff/PeticionesOff";

const accesKey = 'k72-8dUmUIxwj3AH4lmGGKyxC9gVruCtICAcveLWwvs'
const endPoint = "https://api.unsplash.com/search/photos?per_page=20";


export const getRandoms = async (query, page) => {
  try {
    let response = await fetch(
      endPoint + "&page=" + page + "&query=" + query + "&client_id=" + accesKey
    );
    const result = await response.json();
    let imageList = await result.results;
    console.log(imageList);
    return imageList;
  } catch (error) {
    console.log('se acabaron las peticiones')
    printOffPeticiones()
  }
};




