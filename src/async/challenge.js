import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

const fetchData = async (urlApi) => {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFunction = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products?offset=0&limit=2`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${products[0].category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name)
    } catch (error) {
        console.log(error);
    }
}

anotherFunction(API)