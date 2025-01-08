@props([
    'label' => null,          // Tekst voor label
    'placeholder' => '',      // Placeholder-tekst
    'icon' => null,           // Pad/URL naar icoon (optioneel)
    'disabled' => false       // Staat toe om de input uit te schakelen
])

<div class="relative w-full">
    {{-- Als er een label is, laat 'm zien --}}
    @if($label)
        <label 
            for="{{ $attributes->get('id') }}" 
            class="absolute px-2 text-sm font-medium bg-background text-white translate-x-5 -translate-y-1/2"
        >
            {{ $label }}
        </label>
    @endif

    {{-- Als er een icon is, laat 'm zien --}}
    @if($icon)
        <img
            src="{{ $icon }}"
            alt="icon"
            class="w-5 h-auto absolute left-3 translate-y-1/2"
        />
    @endif
    
    {{-- Input-veld --}}
    <input 
        @disabled($disabled)
        placeholder="{{ $placeholder }}"
        {{ $attributes->merge(['class' => 'w-full bg-background rounded border border-solid border-1 border-primary  pl-14 pr-8 py-2']) }}
        style="outline: none;"
    />
</div>