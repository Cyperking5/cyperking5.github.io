(function () {
    const AnistarAPI = {
        baseUrl: 'https://anistar.org',
        async fetchAnimeList() {
            const response = await fetch(`${this.baseUrl}/anime-list`);
            const html = await response.text();
            return this.parseAnimeList(html);
        },
        parseAnimeList(html) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const animeElements = doc.querySelectorAll('.anime-item');
            let animeList = [];
            animeElements.forEach((el) => {
                animeList.push({
                    title: el.querySelector('.anime-title').textContent,
                    image: el.querySelector('img').src,
                    link: el.querySelector('a').href,
                });
            });
            return animeList;
        },
    };

    const UI = {
        createAnimeCard(anime) {
            const card = document.createElement('div');
            card.className = 'anime-card';
            card.innerHTML = `
                <img src="${anime.image}" alt="${anime.title}" />
                <h3>${anime.title}</h3>
            `;
            card.addEventListener('click', () => {
                UI.loadEpisodes(anime.link);
            });
            return card;
        },
        displayAnimeList(animeList) {
            const container = document.querySelector('#anime-container');
            container.innerHTML = '';
            animeList.forEach((anime) => {
                container.appendChild(UI.createAnimeCard(anime));
            });
        },
        async loadEpisodes(link) {
            // Logic to load episodes from the selected anime
        },
    };

    // Initialize plugin
    document.addEventListener('DOMContentLoaded', async () => {
        const animeList = await AnistarAPI.fetchAnimeList();
        UI.displayAnimeList(animeList);
    });
})();
