@props([
    // 'url' => '', 
    'name' => 'Button', 
])

<button {{ $attributes->merge(['class' => 'flex items-center justify-center px-2 py-1 md:px-4 md:py-2 rounded']) }}>
    {{ $slot }}
    {{-- <img class="h-6 w-auto" x-bind:src="url" alt="{{ $name }}"> --}}
</button>