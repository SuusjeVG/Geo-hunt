<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @vite(['resources/css/app.css'])
    </head>
    <body class="container ">
        <div class="wrapper h-full justify-between items-center gap-14">
            <a href="/" wire:navigate class="w-full">
                <x-application-logo/>
            </a>

            <div class="w-full">
                {{ $slot }}
            </div>

            <div id="footer">
                @if (Request::is('login'))
                  <p>
                    Don’t have an account? 
                    <a href="{{ route('register') }}" class="text-secondary">Sign up</a>
                  </p>
                @elseif (Request::is('register'))
                  <p>
                    I already have an account? 
                    <a href="{{ route('login') }}" class="text-secondary">Sign in</a>
                  </p>
                @endif
            </div>
        </div>
    </body>
</html>
