const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const gifForm = document.getElementById('gifForm');
const searchInput = document.getElementById('searchInput');
const gifContainer = document.getElementById('gifContainer');
const deleteAllBtn = document.getElementById('deleteAllBtn');

gifForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchQuery = searchInput.value.trim();
    if (searchQuery) {
        try {
            const gifUrl = await getRandomGif(searchQuery);
            appendGifToContainer(gifUrl, searchQuery);
            searchInput.value = '';
        } catch (error) {
            console.error('Error fetching GIF:', error);
        }
    }
});

gifContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
});

deleteAllBtn.addEventListener('click', () => {
    gifContainer.innerHTML = '';
});

async function getRandomGif(query) {
    const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${query}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.data && data.data.image_url) {
        return data.data.image_url;
    } else {
        throw new Error('No GIF found for the given search query');
    }
}

function appendGifToContainer(gifUrl, category) {
    const gifElement = document.createElement('div');
    gifElement.innerHTML = `
        <img src="${gifUrl}" alt="${category} GIF">
        <button class="delete-btn">Delete</button>
    `;
    gifContainer.appendChild(gifElement);
}
