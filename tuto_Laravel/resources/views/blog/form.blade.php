<form action="" method="post">
        @csrf
        @method($post->id ? "PATCH" : "POST")

        <div class="form-group">
            <label for="title">Titre</label>
            <input class="form-control" type="text" name="title" value="{{old('title', $post->title)}}">
            @error('title')
                <p class="alert alert-warning">{{ $message }}</p>
            @enderror
        </div>

        <div class="form-group">
            <label for="slug">Slug</label>
            <input type="text" class="form-control" name="slug" value="{{old('title', $post->slug)}}">
            @error('slug')
                <p class="alert alert-warning">{{ $message }}</p>
            @enderror
        </div>

        <div class="form-group">
            <label for="content">Contenu</label>
            <textarea class="form-control" name="content">{{old('content', $post->content)}}</textarea>
            @error('content')
                <p class="alert alert-warning">{{ $message }}</p>
            @enderror
        </div>

        <button class="btn btn-primary" type="submit">
            @if($post->id)
                Modifier
            @else
                Créer
            @endif
        </button>
    </form>
