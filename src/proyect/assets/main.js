const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCXR7VjA26PcHP3vb6F2X3VQ&part=snippet%2Cid&order=date&maxResults=9';

let content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9bfa827e5bmsh4216007c1ee31b4p17115ajsn95edc475b769',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const fetchData = async (urlApi, option) => {
  const response = await fetch(urlApi, option);
  const data = await response.json();
  return data;
}

( async () => {
  try {
    const videos = await fetchData(API, options);
    let view = `
      ${videos.items.map(video => {
        return `
          <div class="group relative">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.title}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
              </h3>
            </div>
          </div>
        `
      }).slice(0,8).join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
    content.innerHTML = 'Error, estamos presentando problemas en este momento, por favor intente más tarde.'
  }
})();



