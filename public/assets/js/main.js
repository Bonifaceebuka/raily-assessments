// <!-- Initialize Swiper -->
$(".slider-main_component").each(function(index) {
    const swiper = new Swiper($(this).find(".swiper")[0], {
        speed: 700,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: "2%",
        pagination: {
            el: $(this).find(".swiper-bullet-wrapper")[0],
            bulletActiveClass: "is-active",
            bulletClass: "swiper-bullet",
            bulletElement: "button",
            clickable: true
        },
        navigation: {
            nextEl: $(this).find(".btn-next")[0],
            prevEl: $(this).find(".btn-prev")[0],
            disabledClass: "is-disabled"
        },
    });
});

window.rlyApp = window.rlyApp || {};

// воспроизведения аудио по кнопке
const $playerControl = $('[data-player-control]');
$playerControl.click(function(event) {
    const $playButton = $(event.currentTarget);
    const $audioElement = $playButton.siblings().find('audio');
    const player = $audioElement[0];
    gtag('event', 'podcast_play', {
        value: $audioElement.data('name')
    });
    const $videoIconPlayed = $playButton.find('.image-play-animacia');
    const $videoIconPaused = $playButton.find('.image-play');
    let isPlaying = false;

    const showPlayIcon = () => {
        window.tram($videoIconPlayed).set({
            opacity: 0
        }).start({
            opacity: 1
        });
        window.tram($videoIconPaused).set({
            opacity: 1
        }).start({
            opacity: 0
        });
    }
    const showPausedIcon = () => {
        window.tram($videoIconPaused).set({
            opacity: 0
        }).start({
            opacity: 1
        });
        window.tram($videoIconPlayed).set({
            opacity: 1
        }).start({
            opacity: 0
        });
    }
    if (player.paused && !isPlaying) {
        showPlayIcon();
        player.play();
        isPlaying = true;
    } else {
        showPausedIcon();
        player.pause();
        isPlaying = false;
    }
    $audioElement.on("ended", () => {
        showPausedIcon();
        isPlaying = false;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    SmoothScroll({
        animationTime: 800,
        stepSize: 75,
        accelerationDelta: 30,
        accelerationMax: 2,
        keyboardSupport: true,
        arrowScroll: 50,
        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,
        touchpadSupport: true
    });

    // запуск svg с падающими словами
    let bubblesCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const svgBubblesEl = document.getElementById('svgBubbles');
                svgBubblesEl.dispatchEvent(new Event('click'));
            }
        });
    };
    let bubblesObserver = new IntersectionObserver(bubblesCallback, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });
    bubblesObserver.observe(document.getElementById('place-for-bubbles'));

    // Подгрузка аудио при попадании в экран
    let audioPlayerCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).attr('preload', 'auto');
            }
        });
    };
    let audioPlayerObserver = new IntersectionObserver(audioPlayerCallback, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    });
    document.querySelectorAll('audio[data-name]').forEach((i) => {
        if (i) audioPlayerObserver.observe(i);
    });
});
window.onload = () => {
    const $pageNode = $("#place-for-bubbles");
    if (!$pageNode) return;
    // const path = 'https://azure.raily.app/files/logos.svg';
    $.get({
        url: $pageNode.data('svg-url'),
        type: 'get',
        dataType: 'xml',
    }, function(data) {
        const $svgNode = $("svg", data);
        const docNode = document.adoptNode($svgNode[0]);
        setTimeout(() => {
            $(docNode).attr('id', 'svgBubbles')
                .addClass('svg-bubbles-animation')
                .find('animate, animateTransform')
                .attr('repeatCount', 1)
                .attr('begin', 'svgBubbles.click');
            $pageNode.append(docNode);
        }, 3000);
    }, 'xml');

}

// Запуск логики проигрывателя, после загрузки
document.addEventListener("videojs-loaded", videoPlayerInit);
if (window.rlyApp.videoJsReady) {
    videoPlayerInit();
};

function videoPlayerInit() {
    if (window.rlyApp.videoPlayerReady) return;
    let videoPlayerOptions = {
        controls: true,
        autoplay: false,
        muted: true,
        preload: "none",
        loop: true,
        fluid: true,
        controlBar: {
            pictureInPictureToggle: false,
            fullscreenToggle: false,
            playToggle: false
        }
    };

    function playToggle(e, player) {
        e.preventDefault();
        e.stopPropagation();
        if (!player.hasClass('vjs-has-started')) return false;
        if (player.hasClass('vjs-paused')) {
            player.play();
        } else {
            player.pause();
        }
    };
    document.querySelectorAll('[data-vjs-player]').forEach(videoEl => {
        if (!videoEl.dataset.hasOwnProperty('isMobile') && window.rlyApp.isMobile) return;
        if (videoEl.dataset.hasOwnProperty('isMobile') && !window.rlyApp.isMobile) return;
        if (videoEl.dataset.hasOwnProperty('isMobile') && window.rlyApp.isMobile) {
            Object.assign(videoPlayerOptions, {
                preload: 'meta'
            })
        }
        if (videoEl.dataset.hasOwnProperty('isNoFluid')) {
            Object.assign(videoPlayerOptions, {
                fluid: false
            })
        }
        if (videoEl.dataset.hasOwnProperty('isNoControls')) {
            Object.assign(videoPlayerOptions.controlBar, {
                controls: false,
                controlBar: false
            })
        }
        if (videoEl.dataset.hasOwnProperty('sources')) {
            Object.assign(videoPlayerOptions, {
                loop: false,
                autoplay: false
            });
        }
        const player = videojs(videoEl, videoPlayerOptions);
        const playerName = videoEl.dataset.playerId;

        if (videoEl.dataset.hasOwnProperty('sources')) {
            player.playlist(JSON.parse(videoEl.dataset.sources), 0);
            player.playlist.autoadvance();
            player.playlist.repeat(true);
            player.on('ended', function() {
                player.playlist.next();
            });
            if (videoEl.dataset.hasOwnProperty('sourcesAutoplay')) {
                player.on('playlistitem', function() {
                    setTimeout(() => {
                        player.play()
                    }, 50);
                });
            } else {
                player.on('playlistitem', function() {
                    setTimeout(() => {
                        player.pause()
                    }, 50);
                });
            }
        };

        window.rlyApp = {
            ...window.rlyApp,
            [playerName]: player
        };
        player.ready(() => {
            if (window.rlyApp.isMobile) {
                player.bigPlayButton.el_.addEventListener('touchend', function(e) {
                    playToggle.apply(this, [e, player]);
                });
            } else {
                player.bigPlayButton.el_.addEventListener('click', function(e) {
                    playToggle.apply(this, [e, player]);
                });
            }
        });
    });

    // Воспроизведение видео при попадании в экран
    let videoPlayerCallback = (entries, observer) => {
        entries.forEach((entry) => {
            const playerId = entry.target.dataset.playerId;
            const isVideoAutoplay = entry.target.dataset.hasOwnProperty('isAutoplay');
            const playerInst = window.rlyApp[playerId];
            if (!playerInst) return;
            if (entry.isIntersecting && isVideoAutoplay) {
                console.log(`${playerId} play`);
                playerInst?.play();
            } else {
                console.log(`${playerId} pause`);
                playerInst?.pause();
            }
        });
    };
    let videoPlayerObserver = new IntersectionObserver(videoPlayerCallback, {
        root: null,
        rootMargin: '0px',
        threshold: 0.01
    });
    document.querySelectorAll('[data-player-id]').forEach((i) => {
        if (i) videoPlayerObserver.observe(i);
    });
    window.rlyApp.videoPlayerReady = true;
}

// Senja scripts
document.addEventListener("senja-collector-ready", () => {
    console.log("senja-collector-ready");
    $('[data-show-review-button]').click(() => {
        console.log("data-show-review-button");
        window.SenjaCollector.open({
            fields: {
                project: "raily",
                form: "IESt8p",
                trigger: {
                    "type": "none"
                }
            }
        });
    });
});
(function() {
    const scriptPlatform = document.createElement('script');
    const scriptCollector = document.createElement('script');
    scriptPlatform.src = 'https://static.senja.io/dist/platform.js';
    scriptCollector.src = 'https://widget.senja.io/js/collector.js';
    scriptPlatform.async = true;
    scriptCollector.async = true;
    setTimeout(() => {
        document.head.appendChild(scriptPlatform);
        document.head.appendChild(scriptCollector);
    }, 3000);
    scriptCollector.addEventListener('load', () => {
        document.dispatchEvent(new CustomEvent('senja-collector-ready'));
    });
    scriptPlatform.addEventListener('load', () => {
        const widjets = document.querySelectorAll('senja-embed');
        document.dispatchEvent(new CustomEvent('senja-platform-ready'));
    });
})(window);

$(document).ready(function() {

    var show = true;
    var countbox = $(".gridnumbers");
    $(window).on("scroll load resize", function() {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window)
    .scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset()
        .top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 1000 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.anim').css('opacity', '1');
            $('.anim').spincrement({
                thousandSeparator: "",
                duration: 2200
            });

            show = false;
        }
    });

});
! function(t) {
    t.extend(t.easing, {
        spincrementEasing: function(t, a, e, n, r) {
            return a === r ? e + n : n * (-Math.pow(2, -10 * a / r) + 1) + e
        }
    }), t.fn.spincrement = function(a) {
        function e(t, a) {
            if (t = t.toFixed(a), a > 0 && "." !== r.decimalPoint && (t = t.replace(".", r.decimalPoint)), r
                .thousandSeparator)
                for (; o.test(t);) t = t.replace(o, "$1" + r.thousandSeparator + "$2");
            return t
        }
        var n = {
                from: 0,
                to: null,
                decimalPlaces: null,
                decimalPoint: ".",
                thousandSeparator: ",",
                duration: 1e3,
                leeway: 50,
                easing: "spincrementEasing",
                fade: !0,
                complete: null
            },
            r = t.extend(n, a),
            o = new RegExp(/^(-?[0-9]+)([0-9]{3})/);
        return this.each(function() {
            var a = t(this),
                n = r.from;
            a.attr("data-from") && (n = parseFloat(a.attr("data-from")));
            var o;
            if (a.attr("data-to")) o = parseFloat(a.attr("data-to"));
            else if (null !== r.to) o = r.to;
            else {
                var i = t.inArray(r.thousandSeparator, ["\\", "^", "$", "*", "+", "?", "."]) > -1 ?
                    "\\" + r.thousandSeparator : r.thousandSeparator,
                    l = new RegExp(i, "g");
                o = parseFloat(a.text().replace(l, ""))
            }
            var c = r.duration;
            r.leeway && (c += Math.round(r.duration * (2 * Math.random() - 1) * r.leeway / 100));
            var s;
            if (a.attr("data-dp")) s = parseInt(a.attr("data-dp"), 10);
            else if (null !== r.decimalPlaces) s = r.decimalPlaces;
            else {
                var d = a.text().indexOf(r.decimalPoint);
                s = d > -1 ? a.text().length - (d + 1) : 0
            }
            a.css("counter", n), r.fade && a.css("opacity", 0), a.animate({
                counter: o,
                opacity: 1
            }, {
                easing: r.easing,
                duration: c,
                step: function(t) {
                    a.html(e(t * o, s))
                },
                complete: function() {
                    a.css("counter", null), a.html(e(o, s)), r.complete && r.complete(a)
                }
            })
        })
    }
}(jQuery);