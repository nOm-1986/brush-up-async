const API_KEY = "live_e2gHbmwr9EWsg0kUhzWMGJnVUXsgxpxJXeHiUPECc33Cjqhtp1v7WXZ1mM5MmZT0"
const API_URL = [
    'https://api.thecatapi.com/v1/images/search',
    '?limit=8',
    `&api_key=${API_KEY}`,
].join('');

const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites'

const optionsGet = {
	method: 'GET',
	headers: {
		'x-api-key': API_KEY
	}
};

const error = document.getElementById('error');
const content = null || document.getElementById('content');
const favorites = null || document.getElementById('favorites');
const button = document.getElementById('refresh');
const d = document;



async function getCatsFetch(url, options = null) {
    const response = await fetch(url, options);
    if(response.status !== 200) {
        error.innerHTML = `Hubo un error: ${response.status}`;
    } else {
        const result = await response.json();
        return result;
    }
}

const getRandomMichies = async (urlApi) => {
    try {
        const cats = await getCatsFetch(urlApi);
        //console.log(cats);
        let view = `
            ${cats.map(item => {
                return `
                  <article class="img-content">
                    <img width="220" src="${item.url}" alt="${item.id}">
                    <button class="favorite" value="${item.id}"> Guardar Michi</button>
                  </article>
                `
            }).join('')}
        `;
        content.innerHTML = view;
        
    } catch (error) {
        error.innerHTML = `Error: ${error}`;
    }
}

const getFavoriteMichies = async (urlApi, options) => {
    try {
        const cats = await getCatsFetch(urlApi, options);
        let view = `
            ${cats.map(item => {
                return `
                  <article class="img-content">
                    <img width="220" src="${item.image.url}" alt="${item.id}">
                    <button class="deleteFromFavorites" value="${item.id}"> Eliminar Michi</button>
                  </article>
                `
            }).join('')}
        `;
        favorites.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
}

const postFavoriteMichies = async (id) => {

    const response = await fetch(API_URL_FAVORITES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY
        },
        body: JSON.stringify({
            image_id: id
        })
    });
    const result = await response.json();
    getFavoriteMichies(API_URL_FAVORITES, optionsGet);
}

const deleteFavorteMiches = async (id) => {
    const response = await fetch(`https://api.thecatapi.com/v1/favourites/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY
        }
    })
    const result = await response.json();
    getFavoriteMichies(API_URL_FAVORITES, optionsGet);
}

getRandomMichies(API_URL);
getFavoriteMichies(API_URL_FAVORITES, optionsGet);

button.addEventListener('click', () => {getRandomMichies(API_URL)});

d.addEventListener('click', (e) => {
    if(e.target.className == 'favorite'){
        postFavoriteMichies(e.target.value);
    }
})

d.addEventListener('click', (e) => {
    if(e.target.className == 'deleteFromFavorites'){
        deleteFavorteMiches(e.target.value);
    }
})