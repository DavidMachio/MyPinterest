
const accesKey = "14eaPSPHp6at7iGTo22DkAW_8wfAar5rEBL5LNhm-cA";
const endPoint = "https://api.unsplash.com/search/photos?per_page=30";


export const getRandoms = async (query, page) => {
  let response = await fetch(
    endPoint + "&page=" + page + "&query=" + query + "&client_id=" + accesKey
  );
  const result = await response.json();
  let imageList = await result.results;
  console.log(imageList);
  return imageList;
};




