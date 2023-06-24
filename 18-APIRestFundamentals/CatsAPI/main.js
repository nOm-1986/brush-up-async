const API_URL = [
    'https://api.thecatapi.com/v1/images/search',
    '?limit=5',
    '&api_key=live_e2gHbmwr9EWsg0kUhzWMGJnVUXsgxpxJXeHiUPECc33Cjqhtp1v7WXZ1mM5MmZT0',
].join('');

const content = null || document.getElementById('content');
const button = document.getElementById('refresh');


async function getCatsFetch(url) {
    const response = await fetch(url);
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
                  <div class="img-content">
                    <img width="220" src="${item.url}" alt="${item.id}">
                  </div>
                `
            }).join('')}
        `;
        content.innerHTML = view;
        
    } catch (error) {
        console.error(error);
    }
}

getImage(API_URL);
button.addEventListener('click', () => {getImage(API_URL)});