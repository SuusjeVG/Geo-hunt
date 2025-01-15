<!DOCTYPE html>
<html class="h-full w-screen" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        
        {{-- we need to tell the mobile browser to disable unwanted scaling of the page and set it to its actual size by placing the following line in the head section or our HTML page: --}}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- PWA -->  
        <link rel="manifest" href="/manifest.json">

        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/js/Game.js'])
    </head>
    <body class=" h-full w-screen relative ">
        <!-- Page Content -->
        {{ $slot }}
    </body>
</html>
