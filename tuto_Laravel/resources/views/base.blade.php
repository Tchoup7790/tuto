<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield("title")</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <style>
        @layer demo {
            button{
                all:unset;
            }
        }
    </style>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
    <div class="container-fluid">
        <a href="/" class="navbar-brand">Blog</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link @if(request()->route()->getName() == 'blog.index')active @endif" aria-current="page" href="{{ route('blog.index') }}">Blog</a>
                </li>
                <li class="nav-item">
                    <a href="/" class="nav-link">Link</a>
                </li>
            </ul>
            <div class="navbar-nav ms-auto mb-2 mb-lg-0">
                @auth
                    <div class="nav-item hstack">
                        {{Auth::user()->name}}
                        <form class="nav-item" method="post" action="{{route('auth.logout')}}">
                            @method('delete')
                            @csrf
                            <button class="nav-link">Se déconnecter</button>
                        </form>
                    </div>
                @endauth
                @guest
                    <div class="nav-item">
                        <a href="{{route('auth.login')}}" class="nav-link">Se connecter</a>
                    </div>
                @endguest
            </div>
        </div>
    </div>
</nav>

<div class="container">
    @if(session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif
    @yield("content")
</div>

</body>
</html>
