<?php

use App\Livewire\Forms\LoginForm;
use Illuminate\Support\Facades\Session;
use Livewire\Attributes\Layout;
use Livewire\Volt\Component;

new #[Layout('layouts.guest')] class extends Component
{
    public LoginForm $form;

    /**
     * Handle an incoming authentication request.
     */
    public function login(): void
    {
        $this->validate();

        $this->form->authenticate();

        Session::regenerate();

        $this->redirectIntended(default: route('dashboard', absolute: false), navigate: true);
    }
}; ?>

<div>
    <x-header-auth title="Login">
        Please sign in to continue
    </x-header-auth>
    
    <!-- Session Status -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <form wire:submit="login">
        <!-- Email Address -->
        <div>
            <x-text-input wire:model="form.email"
                label="Email"
                placeholder="Vul je emailadres in"
                icon="assets/icons/envelope-regular.svg"
                class="mb-4"
                id="email"
                name="email"
                type="email"  
                required autofocus autocomplete="username"
            />
            {{-- <x-input-label for="email" " />
            <x-text-input wire:model="form.email" :title="__('Email')" id="email" type="email" name="email" required autofocus autocomplete="username" /> --}}
            <x-input-error :messages="$errors->get('form.email')" class="mt-2" />
        </div>

        <!-- Password -->
        <div class="mt-4">
            {{-- <x-input-label for="password" :value="__('Password')" />

            <x-text-input wire:model="form.password" id="password" class="block mt-1 w-full"
                            type="password"
                            name="password"
                            required autocomplete="current-password" /> --}}


            <x-text-input wire:model="form.password"
                label="password"
                placeholder="Vul je wachtwoord in"
                icon="assets/icons/lock-solid.svg"
                class="mb-4"
                id="password"
                name="password"
                type="password"  
                required autofocus autocomplete="current-password"
            />           

            <x-input-error :messages="$errors->get('form.password')" class="mt-2" />
        </div>

        <!-- Remember Me -->
        <div class="block mt-4">
            <label for="remember" class="inline-flex items-center">
                <input wire:model="form.remember" id="remember" type="checkbox" class="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800" name="remember">
                <span class="ms-2 text-sm text-gray-600 dark:text-gray-400">{{ __('Remember me') }}</span>
            </label>
        </div>

        @if (Route::has('password.request'))
        <div class="flex justify-center py-4 w-full border-t border-t-primary mt-4">
            <a class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800  " href="{{ route('password.request') }}" wire:navigate>
                {{ __('Forgot your password?') }}
            </a>
        </div>

        @endif
        

        <div class="flex flex-col mt-4">
            <x-primary-button class="w-full">
                {{ __('Log in') }}
            </x-primary-button>

        </div>
    </form>
</div>
