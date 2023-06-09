import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

const updateFetch = (urlApi, data) => {
    return fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}
const data = {
    "title": "The second product sent by FaboBelMe Jun 2023 - edited ",
    "price": 4000,
    "category": 1
}
updateFetch(`${API}/products/242`, data)
    .then(response => {
        if(!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        } else {
            return response.json();
        }
    })
    .then(item => console.log(item))
    .catch(err => console.log(err));

