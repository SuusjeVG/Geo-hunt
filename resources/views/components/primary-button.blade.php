<button {{ $attributes->merge(['type' => 'submit', 'class' => 'inline-flex justify-center items-center px-4 py-3 bg-primary  border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:opacity-70 transition ease-in-out duration-150']) }}>
    {{ $slot }}
</button>
