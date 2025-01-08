<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Geo hunt</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        
        <!-- Styles -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="container">
        <header class="wrapper justify-between flex-col gap-4">
            {{-- @if (Route::has('login'))
                <livewire:welcome.navigation />
            @endif --}}
            <img src="assets/images/thumbnail.png" alt="thumbnail" class="w-full h-auto">
            <h1 class="text-center text-xl"> Ga op aventuur in de campus omgeving en zoek 3D voorwerpen met de AR functie </h1>
            <p class="text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facere nulla, aut consectetur laborum iure quisquam velit et repudiandae error atque veritatis, perspiciatis ex sed ab fugit dolor praesentium. Accusantium. </p>
        
        </header>

        <main class="wrapper flex-col justify-center items-center gap-4">
            {{-- register en login buttons --}}
            <a href="{{ route('login') }}" class="btn btn-primary ">Login</a>
            <a href="{{ route('register') }}" class="btn-secondary">Registreer</a>
        </main>
    </body>
</html>
