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

    <!-- Dynamic Google Tag Manager - Loaded from database settings -->
    @if($page['props']['settings']['gtm_id'] ?? null)
        <!-- Google Tag Manager -->
        <script>
            (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','{{ $page['props']['settings']['gtm_id'] }}');
        </script>
        <!-- End Google Tag Manager -->
    @endif

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">

    <!-- Styles & Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @livewireStyles
    @inertiaHead
</head>
<body class="font-sans antialiased">

    <!-- Static Google Tag Manager (noscript fallback) -->
    <noscript id="gtm-static-noscript">
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5Z247LVX" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>

    <!-- Google Tag Manager (noscript fallback for dynamic settings, if present) -->
    @if($page['props']['settings']['gtm_id'] ?? null)
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id={{ $page['props']['settings']['gtm_id'] }}"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
    @endif

    <x-jet-banner />

    <div class="min-h-screen bg-gray-100">
        @livewire('navigation-menu')

        <!-- Page Heading -->
        @if (isset($header))
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {{ $header }}
                </div>
            </header>
        @endif

        <!-- Page Content -->
        <main>
            {{ $slot }}
        </main>
    </div>

    @stack('modals')
    @livewireScripts
    @inertia
</body>
</html>
