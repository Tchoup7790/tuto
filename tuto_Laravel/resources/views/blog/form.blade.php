<form action="" method="post">    @csrf    @method($post->id ? "PATCH" : "POST")    <div class="form-group">        <label for="title">Titre</label>        <input class="form-control" type="text" name="title" value="{{old('title', $post->title)}}">        @error('title')        <p class="alert alert-warning">{{ $message }}</p>        @enderror    </div>    <br>    <div class="form-group">        <label for="slug">Slug</label>        <input type="text" class="form-control" name="slug" value="{{old('slug', $post->slug)}}">        @error('slug')        <p class="alert alert-warning">{{ $message }}</p>        @enderror    </div>    <br>    <div class="form-group">        <label for="content">Contenu</label>        <textarea class="form-control" name="content">{{old('content', $post->content)}}</textarea>        @error('content')<p class="alert alert-warning">{{ $message }}</p>@enderror    </div>    <br>    <div class="form-group">        <label for="category">Categorie</label>        <select class="form-select"  id="category" name="category_id">            <option value="">Sélectionner une catégorie</option>            @foreach($categories as $categorie)                <option @selected(old('category_id', $post->category_id) == $categorie->id) value="{{$categorie->id}}">{{$categorie->name}}</option>            @endforeach        </select>        @error('category_id')        <p class="alert alert-warning">{{ $message }}</p>        @enderror    </div>    <br>    <div class="form-group">        @php        $tagsIds = $post->tags()->pluck('id')        @endphp        <label for="tag">Tags</label>        <select class="form-control"  id="tag" name="tags[]" multiple>            @foreach($tags as $tag)                <option class="btn btn-outline-secondary" @selected($tagsIds->contains($tag->id)) value="{{$tag->id}}">{{$tag->name}}</option>            @endforeach        </select>        @error('tags')        <p class="alert alert-warning">{{ $message }}</p>        @enderror    </div>    <br>    <button class="btn btn-primary" type="submit">        @if($post->id)            Modifier        @else            Créer        @endif    </button></form>