const accesKey = "14eaPSPHp6at7iGTo22DkAW_8wfAar5rEBL5LNhm-cA";
const endPoint = "https://api.unsplash.com/search/collections?per_page=10";


export const getCollections = async (word) => {
    const response = await fetch(endPoint + "&query=" + word + "&client_id=" + accesKey);
    const result = await response.json();
    let collectionsList = await result.results;
    console.log(collectionsList)
    return collectionsList
}