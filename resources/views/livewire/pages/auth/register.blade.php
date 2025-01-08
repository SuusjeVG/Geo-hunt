<?php

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Livewire\Attributes\Layout;
use Livewire\Volt\Component;

new #[Layout('layouts.guest')] class extends Component
{
    public string $name = '';
    public string $email = '';
    public string $password = '';
    public string $password_confirmation = '';

    /**
     * Handle an incoming registration request.
     */
    public function register(): void
    {
        $validated = $this->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'string', 'confirmed', Rules\Password::defaults()],
        ]);

        $validated['password'] = Hash::make($validated['password']);

        event(new Registered($user = User::create($validated)));

        Auth::login($user);

        $this->redirect(route('dashboard', absolute: false), navigate: true);
    }
}; ?>

<div>
    <x-header-auth title="Register">
        Please sign up to continue
    </x-header-auth>

    <form wire:submit="register">
        <!-- Name -->
        <div>

            <x-text-input wire:model="name"
                label="Name"
                placeholder="Type your name..."
                icon="assets/icons/user-regular.svg"
                class="mb-4"
                id="name"
                name="name"
                type="text"
                required autofocus autocomplete="name"
            />
            <x-input-error :messages="$errors->get('name')" class="mt-2" />
        </div>

        <!-- Email Address -->
        <div class="mt-4">
    
            <x-text-input wire:model="email"
                label="Email"
                placeholder="Type your email address..."
                icon="assets/icons/envelope-regular.svg"
                class="mb-4"
                id="email"
                name="email"
                type="email"  
                required autocomplete="username"
            />

            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <!-- Password -->
        <div class="mt-4">
            <x-text-input wire:model="password"
                label="Password"
                placeholder="Type your password..."
                icon="assets/icons/lock-solid.svg"
                class="mb-4"
                id="password"
                name="password"
                type="password"
                required autocomplete="new-password"
            />
            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <!-- Confirm Password -->
        <div class="mt-4">

            <x-text-input wire:model="password_confirmation"
                label="Confirm Password"
                placeholder="Type your password again..."
                icon="assets/icons/lock-solid.svg"
                class="mb-4"
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                required autocomplete="new-password"
            />
            
            <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
        </div>

        <x-primary-button class="my-4 w-full">
            {{ __('Register') }}
        </x-primary-button>
   
    </form>
</div>
