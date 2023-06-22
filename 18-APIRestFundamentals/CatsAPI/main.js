const APIUrl = 'https://api.thecatapi.com/v1/images/search';

const img = null || document.querySelector('img');
const button = document.getElementById('refresh');

async function getCatsFetch(url) {
    const response = await fetch(url);
    const result = await response.json();
    return result;
}

const getImage = async (urlApi) => {
    try {
        const cats = await getCatsFetch(urlApi);
        let imageUrl = cats[0].url;
        img.setAttribute('src', '');
        img.setAttribute('src', imageUrl);
    } catch (error) {
        console.error(error);
    }
}

getImage(APIUrl);


button.addEventListener('click', () => {getImage(APIUrl)});