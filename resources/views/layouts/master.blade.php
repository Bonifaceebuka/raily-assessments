<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Raily - Meets on the Move</title>
    <meta
        content="Raily® - Meets on the move. The ultimate AI-driven social travel hub. Unleash the traveler in you with an AI-guided concierge designed to provide personalized bookings, while augmented reality and gamification turn your journey into a magical one. It&#x27;s not just an app - it&#x27;s a companion! Raily®. Connect, Travel, Friends."
        name="description" />
    <meta content="Raily - Meets on the Move" property="og:title" />
    <meta
        content="Raily® - Meets on the move. The ultimate AI-driven social travel hub. Unleash the traveler in you with an AI-guided concierge designed to provide personalized bookings, while augmented reality and gamification turn your journey into a magical one. It&#x27;s not just an app - it&#x27;s a companion! Raily®. Connect, Travel, Friends."
        property="og:description" />
    <meta content="https://azure.raily.app/files/og.jpg" property="og:image" />
    <meta content="Raily - Meets on the Move" property="twitter:title" />
    <meta
        content="Raily® - Meets on the move. The ultimate AI-driven social travel hub. Unleash the traveler in you with an AI-guided concierge designed to provide personalized bookings, while augmented reality and gamification turn your journey into a magical one. It&#x27;s not just an app - it&#x27;s a companion! Raily®. Connect, Travel, Friends."
        property="twitter:description" />
    <meta content="https://azure.raily.app/files/og.jpg" property="twitter:image" />
    <meta property="og:type" content="website" />
    <meta content="summary_large_image" name="twitter:card" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <link href="https://cdn.prod.website-files.com/64aceaf9cb10fc1c8e4efdbc/css/railybeta.webflow.5fc711443.min.css"
        rel="stylesheet" type="text/css" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="{{ asset('assets/css/styles.css') }}" rel="stylesheet" type="text/css" />
    <!-- свайпер -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

    <link href="https://cdn.prod.website-files.com/64aceaf9cb10fc1c8e4efdbc/64ad5758771455690c6cd002_favicon-32x32.png"
        rel="shortcut icon" type="image/x-icon" />
    <link href="https://cdn.prod.website-files.com/64aceaf9cb10fc1c8e4efdbc/64ad57b8cfe4b6d03ca2342c_111.png"
        rel="apple-touch-icon" />
    <script async="" src="https://www.googletagmanager.com/gtag/js?id=G-K0DRW11MFK"></script>
    <!-- Стили чата -->
    <link rel="preload" href="https://embed.mottle.com/embed.css" as="style"
    onload="this.onload=null;this.rel='stylesheet'">
    <!-- Стили видео-проигрывателя -->
    <link rel="preload" href="https://azure.raily.app/files/video-js.css" as="style"
    onload="this.onload=null;this.rel='stylesheet'">
    <script async src={{ asset('assets/js/app.js')}}></script>
</head>

<body class="body">

    <div class="page-wrapper">
        @include('partials.header')
            @yield('content_wrapper')
        @include('partials.footer')
        <div data-w-id="a16c2325-1d68-3fd1-5f27-e4ae123d7ba9" class="block-chat-1">
            <div class="wrapper-chat1">
                <div id="ask-raily-button" data-w-id="10943cac-e302-4d53-ab06-19916568e2e1" class="btn-grin">
                    <div data-w-id="186a6439-c508-4051-512a-d27144f7fdea" class="box-cross"><img
                            src="https://cdn.prod.website-files.com/64aceaf9cb10fc1c8e4efdbc/64fababddeed167eba2e1cc2_Vector%20(6).svg"
                            loading="lazy" alt="" class="image-cross" />
                        <div class="box-text-coluse">
                            <div class="text-19 _3d clouse color-black">Close</div>
                        </div>
                    </div>
                    <div data-w-id="10943cac-e302-4d53-ab06-19916568e2e2" class="text-19 _3d color-blak">Raily Mate
                    </div>
                </div>
                <div class="box-html">
                    <div class="html-embed w-embed">
                        <div class="mottle-bot-container">
                            <div class="mottle-bot mottle-chat mottle-chat-flex" style="height: 50vh;">
                                <div class="mottle-top-bar">
                                    <div class="mottle-minimized-msg">
                                        Do you have a question?
                                    </div>
                                </div>
                                <div class="mottle-conversation">
                                    <div class="mottle-messages"></div>
                                </div>
                                <form>
                                    <fieldset>
                                        <input type="hidden" name="bot"
                                            value="O9KezsQn4LPUUsutFvF4DfNqV283-qmxQEle57X9YKXqyBy3h" />
                                        <input type="hidden" name="welcome"
                                            value="Hello, I'm Raily Mate and I'm here to answer any questions you may have about the Raily App. Feel free to ask me anything!" />
                                        <input type="text" class="mottle-query" name="q"
                                            placeholder="Ask Raily a question..." />
                                        <button type="submit" class="mottle-button"><img
                                                src="https://cdn.prod.website-files.com/64aceaf9cb10fc1c8e4efdbc/65527846ed538d0070a5ad60_enter-key.svg"
                                                alt="Иконка" width="20" height="20"></button>
                                    </fieldset>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="https://cdn.prod.website-files.com/64aceaf9cb10fc1c8e4efdbc/64beaeed9cf849ee2c62d7d1_%D0%97%D0%90%D0%93%D0%9B%D0%A3%D0%A8%D0%9A%D0%903.webp"
            loading="lazy" alt="" class="image-68" />
        <div class="set-all-components-to-display-none-and-use-this-div-to-create-a-symbol">
            <div fs-cc="banner" class="fs-cc-banner_component">
                <div class="fs-cc-banner_container">
                    <div class="fs-cc-banner_text">By clicking <strong>“Accept”</strong>, you agree to the storing of
                        cookies on
                        your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.
                        View our <a href="/cookie-policy" class="fs-cc-banner_text-link">Privacy Policy</a> for more
                        information.</div>
                    <div class="fs-cc-banner_buttons-wrapper"><a fs-cc="open-preferences" href="#"
                            class="fs-cc-banner_text-link _2">Preferences</a><a fs-cc="deny" href="#"
                            class="fs-cc-banner_button fs-cc-button-alt w-button">Deny</a><a fs-cc="allow"
                            href="#" class="fs-cc-banner_button w-button">Accept</a>
                        <div fs-cc="close" class="fs-cc-banner_close">
                            <div class="fs-cc-banner_close-icon w-embed"><svg fill="currentColor" aria-hidden="true"
                                    focusable="false" viewBox="0 0 16 16">
                                    <path
                                        d="M9.414 8l4.293-4.293-1.414-1.414L8 6.586 3.707 2.293 2.293 3.707 6.586 8l-4.293 4.293 1.414 1.414L8 9.414l4.293 4.293 1.414-1.414L9.414 8z">
                                    </path>
                                </svg></div>
                        </div>
                    </div>
                </div>
                <div fs-cc="interaction" class="fs-cc-banner_trigger"></div>
            </div>
            <div fs-cc-scroll="disable" fs-cc="preferences" class="fs-cc-prefs_component w-form">
                <form id="cookie-preferences" name="wf-form-Cookie-Preferences" data-name="Cookie Preferences"
                    method="get" class="fs-cc-prefs_form" data-wf-page-id="64e30c9fd1d1b88ce6ef39a8"
                    data-wf-element-id="b206178c-f5a1-b732-3b8a-eee8e96e41b3">
                    <div fs-cc="close" class="fs-cc-prefs_close">
                        <div class="fs-cc-prefs_close-icon w-embed"><svg fill="currentColor" aria-hidden="true"
                                focusable="false" viewBox="0 0 16 24">
                                <path
                                    d="M9.414 8l4.293-4.293-1.414-1.414L8 6.586 3.707 2.293 2.293 3.707 6.586 8l-4.293 4.293 1.414 1.414L8 9.414l4.293 4.293 1.414-1.414L9.414 8z">
                                </path>
                            </svg></div>
                    </div>
                    <div class="fs-cc-prefs_content">
                        <div class="fs-cc-prefs_space-small">
                            <div class="fs-cc-prefs_title">Privacy Preference Center</div>
                        </div>
                        <div class="fs-cc-prefs_space-small">
                            <div class="fs-cc-prefs_text">When you visit websites, they may store or retrieve data in
                                your browser.
                                This storage is often necessary for the basic functionality of the website. The storage
                                may be used for
                                marketing, analytics, and personalization of the site, such as storing your preferences.
                                Privacy is
                                important to us, so you have the option of disabling certain types of storage that may
                                not be necessary
                                for the basic functioning of the website. Blocking categories may impact your experience
                                on the website.
                            </div>
                        </div>
                        <div class="fs-cc-prefs_space-medium"><a fs-cc="deny" href="#"
                                class="fs-cc-prefs_button fs-cc-button-alt w-button">Reject all cookies</a><a
                                fs-cc="allow" href="#" class="fs-cc-prefs_button w-button">Allow all
                                cookies</a></div>
                        <div class="fs-cc-prefs_space-small">
                            <div class="fs-cc-prefs_title">Manage Consent Preferences by Category</div>
                        </div>
                        <div class="fs-cc-prefs_option">
                            <div class="fs-cc-prefs_toggle-wrapper">
                                <div class="fs-cc-prefs_label">Essential</div>
                                <div class="fs-cc-prefs_text"><strong>Always Active</strong></div>
                            </div>
                            <div class="fs-cc-prefs_text">These items are required to enable basic website
                                functionality.</div>
                        </div>
                        <div class="fs-cc-prefs_option">
                            <div class="fs-cc-prefs_toggle-wrapper">
                                <div class="fs-cc-prefs_label">Marketing</div><label
                                    class="w-checkbox fs-cc-prefs_checkbox-field"><input type="checkbox"
                                        id="marketing" name="marketing" data-name="Marketing"
                                        fs-cc-checkbox="marketing"
                                        class="w-checkbox-input fs-cc-prefs_checkbox" /><span for="marketing"
                                        class="fs-cc-prefs_checkbox-label w-form-label">Essential</span>
                                    <div class="fs-cc-prefs_toggle"></div>
                                </label>
                            </div>
                            <div class="fs-cc-prefs_text">These items are used to deliver advertising that is more
                                relevant to you and
                                your interests. They may also be used to limit the number of times you see an
                                advertisement and measure
                                the effectiveness of advertising campaigns. Advertising networks usually place them with
                                the website
                                operator’s permission.</div>
                        </div>
                        <div class="fs-cc-prefs_option">
                            <div class="fs-cc-prefs_toggle-wrapper">
                                <div class="fs-cc-prefs_label">Personalization</div><label
                                    class="w-checkbox fs-cc-prefs_checkbox-field"><input type="checkbox"
                                        id="personalization" name="personalization" data-name="Personalization"
                                        fs-cc-checkbox="personalization"
                                        class="w-checkbox-input fs-cc-prefs_checkbox" /><span for="personalization"
                                        class="fs-cc-prefs_checkbox-label w-form-label">Essential</span>
                                    <div class="fs-cc-prefs_toggle"></div>
                                </label>
                            </div>
                            <div class="fs-cc-prefs_text">These items allow the website to remember choices you make
                                (such as your
                                user name, language, or the region you are in) and provide enhanced, more personal
                                features. For
                                example, a website may provide you with local weather reports or traffic news by storing
                                data about your
                                current location.</div>
                        </div>
                        <div class="fs-cc-prefs_option">
                            <div class="fs-cc-prefs_toggle-wrapper">
                                <div class="fs-cc-prefs_label">Analytics</div><label
                                    class="w-checkbox fs-cc-prefs_checkbox-field"><input type="checkbox"
                                        id="analytics" name="analytics" data-name="Analytics"
                                        fs-cc-checkbox="analytics"
                                        class="w-checkbox-input fs-cc-prefs_checkbox" /><span for="analytics"
                                        class="fs-cc-prefs_checkbox-label w-form-label">Essential</span>
                                    <div class="fs-cc-prefs_toggle"></div>
                                </label>
                            </div>
                            <div class="fs-cc-prefs_text">These items help the website operator understand how its
                                website performs,
                                how visitors interact with the site, and whether there may be technical issues. This
                                storage type
                                usually doesn’t collect information that identifies a visitor.</div>
                        </div>
                        <div class="fs-cc-prefs_buttons-wrapper"><a fs-cc="submit" href="#"
                                class="fs-cc-prefs_button w-button">Confirm my preferences and close</a></div><input
                            type="submit" data-wait="Please wait..." class="fs-cc-prefs_submit-hide w-button"
                            value="Submit" />
                        <div class="w-embed">
                            <style>
                                /* smooth scrolling on iOS devices */
                                .fs-cc-prefs_content {
                                    -webkit-overflow-scrolling: touch
                                }
                            </style>
                        </div>
                    </div>
                </form>
                <div class="w-form-done"></div>
                <div class="w-form-fail"></div>
                <div fs-cc="close" class="fs-cc-prefs_overlay"></div>
                <div fs-cc="interaction" class="fs-cc-prefs_trigger"></div>
            </div>
        </div>
    </div>
    <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64aceaf9cb10fc1c8e4efdbc"
        type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous">
    </script>
    <script src="https://cdn.prod.website-files.com/64aceaf9cb10fc1c8e4efdbc/js/webflow.bc871d3a5.js"
        type="text/javascript"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js"
        integrity="sha256-huW7yWl7tNfP7lGk46XE+Sp0nCotjzYodhVKlwaNeco=" crossorigin="anonymous"></script>
    <script async id="ask-raily-script" data-src="https://embed.mottle.com/embed.js"></script>
    <!--swiper-->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="https://azure.raily.app/files/video.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/videojs-playlist@5.1.0/dist/videojs-playlist.min.js"></script>
    <script src="{{ asset('assets/js/main.js') }}"></script>
</body>

</html>
