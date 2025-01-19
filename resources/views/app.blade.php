<x-game-layout>

    <div id="map" class="relative h-full w-screen z-0 "></div>
    
    
    <!-- User Button -->
    <x-game-layout>
        <div id="map" class="relative h-full w-screen z-0"></div>
    
        <div 
            x-data="{ active: 'map' }" 
            class="absolute z-1 grid grid-cols-5 bottom-4 left-1/2 transform -translate-x-1/2 bg-primary rounded p-1">
            
            <!-- User Button -->
            <x-game-navigation 
                x-bind:class="active === 'user' ? 'bg-white' : 'bg-transparent'" 
                @click="active = 'user'" 
                class="cursor-pointer" 
                name="User">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-6 w-auto">
                        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" 
                            x-bind:fill="active === 'user' ? '#42407C' : '#FFFFFF'" />
                    </svg>
            </x-game-navigation>
    
            <!-- Map Button -->
            <x-game-navigation 
                x-bind:class="active === 'map' ? 'bg-white' : 'bg-transparent'" 
                @click="active = 'map'" 
                class="cursor-pointer" 
                name="Map">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-6 w-auto">
                        <path d="M565.6 36.2C572.1 40.7 576 48.1 576 56l0 336c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456L0 120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5l0 284.6 120-45.7 0-284.6L48 136.5zM360 422.7l0-285.4-144-48 0 285.4 144 48zm48-1.5l120-45.7 0-284.6L408 136.5l0 284.6z" 
                            x-bind:fill="active === 'map' ? '#42407C' : '#FFFFFF'" />
                    </svg>
            </x-game-navigation>
    
            <!-- Camera Button -->
            <x-game-navigation 
                x-bind:class="active === 'camera' ? 'bg-white' : 'bg-transparent'" 
                @click="active = 'camera'" 
                class="cursor-pointer" 
                name="Camera">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-6 w-auto">
                        <path d="M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" 
                            x-bind:fill="active === 'camera' ? '#42407C' : '#FFFFFF'" />
                    </svg>
            </x-game-navigation>
    
            <!-- Star Button -->
            <x-game-navigation 
                x-bind:class="active === 'star' ? 'bg-white' : 'bg-transparent'" 
                @click="active = 'star'" 
                class="cursor-pointer" 
                name="Star">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-6 w-auto">
                        <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" 
                            x-bind:fill="active === 'star' ? '#42407C' : '#FFFFFF'" />
                    </svg>
            </x-game-navigation>
    
            <!-- Settings Button -->
            <x-game-navigation 
                x-bind:class="active === 'settings' ? 'bg-white' : 'bg-transparent'" 
                @click="active = 'settings'" 
                class="cursor-pointer" 
                name="Settings">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-6 w-auto">
                        <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" 
                            x-bind:fill="active === 'settings' ? '#42407C' : '#FFFFFF'" />
                    </svg>
            </x-game-navigation>
    
        </div>
    </x-game-layout>


    <button data-action="center-map" class="absolute flex items-center justify-center top-5 right-5 z-1 bg-primary w-10 h-10 rounded-full p-2">
        <img src="/assets/icons/compass-regular.svg" alt="compass" class="w-6 h-6">
    </button>
</x-game-layout>