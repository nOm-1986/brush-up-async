import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

 //Estructura fetch para enviar info.
const postData = (urlApi, data) => {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',//cores, permisos
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "The second product sent by FaboBelMe Jun 2023",
    "price": 2000,
    "description": "This is the second most important product over the world because I4 made it.",
    "categoryId": 2,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
    .then(res => res.json())
    .then(item => console.log(item));