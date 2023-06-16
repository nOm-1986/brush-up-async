import fetch from "node-fetch";
const API = 'https://moviesdatabase.p.rapidapi.com';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9bfa827e5bmsh4216007c1ee31b4p17115ajsn95edc475b769',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
}

async function fetchDataApi(urlApi, options = {}) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

const gettingData = async (urlApi, options) => {
  try {
    const products = await fetchDataApi(`${urlApi}/titles?year=2023&limit=20`, options);
    console.log(products);
  } catch (error) {
    console.log(error);
  }
}

gettingData(API, options);



