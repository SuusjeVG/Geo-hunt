@props(['title'])

<div {{ $attributes->merge(['class' => 'header flex flex-col gap-1 mb-10 ']) }}>
    <h1 class="text-xl font-bold">{{ $title }}</h1>
    <p>{{ $slot }}</p>
</div>

