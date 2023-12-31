@extends('base')

@section('title', "Authentification")

@section('content')
    <h1>Se connecter</h1>

    <div class="card">
        <div class="card-body">
            <form class="vstack gap-3" method="post" action="{{ route('auth.login') }}">
                @csrf
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" class="form-control"value="{{ old('email') }}">
                    @error('email')
                    <p class="alert alert-warning">{{ $message }}</p>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="password">Mot de passe</label>
                    <input type="password" name="password" id="password" class="form-control">
                    @error('password')
                    <p class="alert alert-warning">{{ $message }}</p>
                    @enderror
                </div>

                <button class="btn btn-primary">Se connecter</button>
            </form>
        </div>
    </div>
@endsection
