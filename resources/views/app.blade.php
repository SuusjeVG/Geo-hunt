<x-game-layout>

    <div id="map" class="relative h-full w-screen z-0 "></div>
    
    <div class="absolute z-1 grid grid-cols-5 bottom-4 left-1/2 transform -translate-x-1/2  bg-primary rounded p-1">
        <x-game-navigation class="bg-white" name="User" url="/assets/icons/user-regular.svg"/>
        <x-game-navigation name="Map" url="/assets/icons/map-regular.svg"/>
        <x-game-navigation name="Camera" url="/assets/icons/camera-solid.svg"/>
        <x-game-navigation name="Star" url="/assets/icons/star-regular.svg"/>
        <x-game-navigation name="Settings" url="/assets/icons/gear-solid.svg"/>
    </div>

    <button data-action="center-map" class="absolute flex items-center justify-center top-5 right-5 z-1 bg-primary w-10 h-10 rounded-full p-2">
        <img src="/assets/icons/compass-regular.svg" alt="compass" class="w-6 h-6">
    </button>
</x-game-layout>