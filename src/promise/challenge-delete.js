import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

const deleteData = (urlApi) => {
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'apllication/json'
        }
    });
    return response;
}

deleteData(`${API}/products/250`)
    .then(response => {
        if (!response.ok){
            throw new Error(`HTTP error, status = ${response.status}`);
        } else {
            response.json();
        }
    })
    .then(item => console.log(item))
    .catch(err => console.error(err))
    .finally(() => console.log('Hello world'));