import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1/';

const options = {
  method: 'GET'
}

async function fetchData(urlApi, options) {
  const response = await fetch(urlApi, options);
  const result = await response.json();
  return result;
}

async function gettingData(urlApi, options) {
  try {
    const result = await fetchData(`${API}products?offset=0&limit=2`, options);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

gettingData(API, options);