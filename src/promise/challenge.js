import fetch from "node-fetch";


const fetchData = (urlApi) => {
    return fetch(urlApi)
}

fetchData(`${API}/products?offset=0&limit=2`)
    .then(result => result.json())
    .then(pro => console.log(pro))
    .then(() => console.log('Ejemplo de seguir haciendo lógicas consecuentes. '))
    .catch((er) => console.error(er))
    .finally(() => console.log('Using Finally'));

// Realizando llamado multiple como en el ejemplo de callback hell.
const API = 'https://api.escuelajs.co/api/v1';
const fetchData2 = (urlApi) => {
    return fetch(urlApi);
}
/** De esta forma funciona pero estoy haciendo una vez más un callback hell
fetchData2(`${API}/products?offset=0&limit=3`)
    .then(res => res.json())
    .then(products => {
        console.log('productos: ', products)
        return fetchData2(`${API}/products/${products[0].id}`)
            .then(res => res.json())
            .then(p => { 
                console.log('item: ' , p.title)
                return
            });
    });
*/
fetchData2(`${API}/products?offset=0&limit=3`)
    .then(resp => resp.json())
    .then(products => {
        console.log('Productos list: ', products)
        return fetchData2(`${API}/products/${products[0].id}`)
    })
    .then(resp => resp.json())
    .then(item => {
        console.log('Single product: ', item);
        return fetchData2(`${API}/categories/${item.category.id}`);
    })
    .then(resp => resp.json())
    .then(categories => console.log(categories.name))
    .catch(err => console.error(err))
    .finally(() => console.log('Done'));

