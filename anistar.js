const plugin = {
    id: 'anistar',
    title: 'Anistar',

    // Einstiegspunkt für Lampa TV
    getStreams: async (query) => {
        const searchUrl = `https://anistar.org/search?q=${encodeURIComponent(query)}`;
        const response = await fetch(searchUrl);
        const html = await response.text();

        // Extrahiere die Video-URLs (z.B. aus iframes)
        const videoUrls = [];
        const regex = /<iframe.*?src="(https:\/\/.*?\.mp4)"/g;
        let match;
        while ((match = regex.exec(html)) !== null) {
            videoUrls.push(match[1]);
        }

        // Gib die Streams im passenden Format zurück
        return videoUrls.map(url => ({ url, quality: 'HD', title: 'Anistar Stream' }));
    }
};

// Registrierung des Plugins in Lampa TV
registerPlugin(plugin);
