(function (Lampa) {
    Lampa.Plugins.add({
        name: 'Anistar Plugin',
        version: '1.0.0',
        description: 'Plugin to stream anime content from Anistar.org',
        onStart: function () {
            console.log('Anistar Plugin loaded successfully!');
            Lampa.Listing.add('Anistar Anime', {
                type: 'category',
                content: fetchAnistarAnime()
            });
        }
    });

    function fetchAnistarAnime() {
        const animeList = [];
        const apiUrl = 'https://anistar.org/api/get_anime_list'; // Example API endpoint

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                data.forEach(anime => {
                    animeList.push({
                        title: anime.name,
                        poster: anime.poster_url,
                        link: anime.stream_url
                    });
                });
            })
            .catch(error => console.error('Error fetching anime list:', error));

        return animeList;
    }
})(window.Lampa || {});
