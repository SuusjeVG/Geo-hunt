@props([
    'url',
    'name'
])

<button {{ $attributes->merge([ 'class' => 'flex items-center justify-center py-2 px-4 rounded']) }}>
    <img class="h-6 w-auto" src=" {{ $url }}" alt=" {{ $name }}">
</button>