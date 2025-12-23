<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Static Google Tag Manager (added per request) -->
        <script id="gtm-static-script" async src="https://www.googletagmanager.com/gtm.js?id=GTM-5Z247LVX"></script>
        <script>
            (function(){
                try{
                    var s = document.getElementById('gtm-static-script');
                    if(s){
                        s.addEventListener('load', function(){
                            console.log('Static GTM loaded: GTM-5Z247LVX');
                            try{
                                var params = new URLSearchParams(window.location.search);
                                if(params.get('gtm_debug')==='1' || localStorage.getItem('gtm_debug')==='1'){
                                    alert('Static GTM loaded: GTM-5Z247LVX');
                                }
                            }catch(e){}
                        });
                    }
                }catch(e){console.error(e)}
            })();
        </script>

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body>
        <!-- Static Google Tag Manager (noscript fallback) -->
        <noscript id="gtm-static-noscript">
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5Z247LVX" height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        <div class="font-sans text-gray-900 antialiased">
            {{ $slot }}
        </div>
    </body>
</html>
