(function() {
    const pluginId = 'my-lampa-plugin';

    function initializePlugin() {
        Lampa.Plugins.add({
            id: pluginId,
            name: 'Custom Plugin',
            description: 'This is a custom plugin for Lampa TV',
            onActivate: setupInterface
        });
    }

    function setupInterface() {
        Lampa.UI.addMenuItem({
            title: 'Custom Content',
            onClick: () => {
                Lampa.Notifications.show('Hello from My Plugin!');
            }
        });
    }

    initializePlugin();
})();
