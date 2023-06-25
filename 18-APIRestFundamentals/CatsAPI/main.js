const API_KEY = "live_e2gHbmwr9EWsg0kUhzWMGJnVUXsgxpxJXeHiUPECc33Cjqhtp1v7WXZ1mM5MmZT0"
const API_URL = [
    'https://api.thecatapi.com/v1/images/search',
    '?limit=8',
    `&api_key=${API_KEY}`,
].join('');

const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?'

const options = {
	method: 'GET',
	headers: {
		'x-api-key': API_KEY
	}
};

const content = null || document.getElementById('content');
const button = document.getElementById('refresh');


async function getCatsFetch(url, options = null) {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
}

const getImage = async (urlApi) => {
    try {
        const cats = await getCatsFetch(urlApi);
        console.log(cats);
        let view = `
            ${cats.map(item => {
                return `
                  <article class="img-content">
                    <img width="220" src="${item.url}" alt="${item.id}">
                    <button>Guardar Michi</button>
                  </article>
                `
            }).join('')}
        `;
        content.innerHTML = view;
        
    } catch (error) {
        console.error(error);
    }
}

const favoriteMichies = async (urlApi) => {

}

getImage(API_URL);
button.addEventListener('click', () => {getImage(API_URL)});