import { printOffPeticiones } from "../components/PeticionesOff/PeticionesOff";

const accesKey = 'k72-8dUmUIxwj3AH4lmGGKyxC9gVruCtICAcveLWwvs'
const endPoint = "https://api.unsplash.com/search/collections?per_page=20";


export const getCollections = async (word) => {
    try {const response = await fetch(endPoint + "&query=" + word + "&client_id=" + accesKey);
    const result = await response.json();
    let collectionsList = await result.results;
    console.log(collectionsList)
    return collectionsList
        
    } catch (error) {
        console.log('se acabaron las peticiones')
        printOffPeticiones()
    }
}