(function() {
    const pluginId = 'anistar-plugin';
    const baseUrl = 'https://anistar.org';

    function initializePlugin() {
        Lampa.Plugins.add({
            id: pluginId,
            name: 'Anistar',
            description: 'Stream anime directly from Anistar.org',
            onActivate: setupInterface
        });
    }

    function setupInterface() {
        // Fetch categories and display in Lampa's UI
        fetch(`${baseUrl}/api/categories`)
            .then(response => response.json())
            .then(data => {
                Lampa.UI.createMenu(data.categories);
            })
            .catch(error => {
                console.error('Failed to load categories:', error);
            });
    }

    function playAnime(animeId, episodeId) {
        const streamUrl = `${baseUrl}/api/stream/${animeId}/${episodeId}`;
        Lampa.Player.play(streamUrl);
    }

    initializePlugin();
})();
