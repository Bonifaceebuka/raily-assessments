// import './bootstrap';

! function(o, c) {
    var n = c.documentElement,
        t = " w-mod-";
    n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n
        .className += t + "touch")
}(window, document);


window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('set', 'developer_id.dZGVlNj', true);
gtag('config', 'G-K0DRW11MFK');




window.rlyApp = window.rlyApp || {};
window.SenjaCollectorConfig = {
    project: "raily",
    form: "IESt8p",
    trigger: {
        "type": "none"
    }
};
window.rlyApp.isMobile = window.innerWidth < 900;
// Загрузка видеопроигрывателя
(function() {
    // disable stats requests
    window.HELP_IMPROVE_VIDEOJS = false;
    const script = document.createElement('script');
    const videoPlaylistPlugin = document.createElement('script');
    script.src = 'https://azure.raily.app/files/video.min.js';
    videoPlaylistPlugin.src =
        "https://cdn.jsdelivr.net/npm/videojs-playlist@5.1.0/dist/videojs-playlist.min.js";

    const videoScriptLoader = new Promise((done, reject) => {
        script.addEventListener('load', done);
    });
    const videoPluginLoader = new Promise((done, reject) => {
        videoPlaylistPlugin.addEventListener('load', done);
    });

    script.async = true;
    videoPlaylistPlugin.async = true;
    setTimeout(() => {
        document.head.appendChild(script);
        videoScriptLoader.then(() => {
            document.head.appendChild(videoPlaylistPlugin);
        });
    }, 4000);

    Promise.all([videoScriptLoader, videoPluginLoader]).then(() => {
        document.dispatchEvent(new CustomEvent('videojs-loaded'));
        window.rlyApp.videoJsReady = true;
    });

})(window);
// Загрузка виджета формы
(function() {
    const script = document.createElement('script');
    const queryStringForWidjet = document.createElement('script');
    script.src = 'https://getlaunchlist.com/js/widget.js';
    queryStringForWidjet.src = "https://getlaunchlist.com/js/widget-diy.js";
    script.async = true;
    queryStringForWidjet.async = true;
    setTimeout(() => {
        document.head.appendChild(script);
        document.head.appendChild(queryStringForWidjet);
    }, 4000)
})(window);

const removeDisabledWidjetBlock = (block) => {
    if (window.rlyApp.isMobile && !block.classList.contains('is-show-mobile')) {
        delete block.dataset.dataId;
        block.classList.remove('senja-embed');
    }
    if (!window.rlyApp.isMobile && !block.classList.contains('is-show-desktop')) {
        delete block.dataset.dataId;
        block.classList.remove('senja-embed');
    }
};

document.addEventListener("DOMContentLoaded", function() {
    // Загрузка формы опроса и обратной связи по клику
    $('#early-access-button').click(() => {
        gtag('event', 'early_access');
        const $form = $('#early-access-form');
        if ($form.attr('src')) {
            return;
        }
        const src = $form.data('src');
        // Насильная перерисовка нужна чтобы обойти баг в
        $form
            .attr('src', src)
            .css('display', 'none')
            .css('display', 'inline');
    });
    $('#ask-raily-button').click(() => {
        gtag('event', 'ask_rally');
        const $script = $('#ask-raily-script');
        const src = $script.data('src');
        $script.attr('src', src);
    });

    // события аналитики для навигации
    $('#nav-wrapper a').click((event) => {
        const button = event.currentTarget;
        gtag('event', 'navigation', {
            value: button.innerText
        });
    });

    // Запоминаем страницу перед переходом в попап
    $('[data-popup-initiator]').click((event) => {
        const button = event.currentTarget;
        const popupContext = button.dataset.popupInitiator;
        sessionStorage.setItem('popupInitiator', popupContext);
    });

    $.get('https://get.geojs.io/v1/ip/country.json', (resp) => {
        const country = resp.country.toLowerCase();
        $('body').addClass(`country-${country}`);
    });

});