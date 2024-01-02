<?php

namespace App\Http\Controllers;

use App\Http\Requests\BlogFilterRequest;
use App\Http\Requests\FormPostRequest;
use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class BlogController extends Controller
{
    public function index() : View
    {
        return view('blog.index', [
            'posts' => Post::with('tags', 'category')->paginate(10)
        ]);
    }

    public function create() :  View {
        $post = new Post();

        $post->title = "Article";
        $post->content = "Super Article de bonne qualité";

        return view('blog.create', [
            'post'=>$post,
            'categories'=>Category::select('id', 'name')->get(),
            'tags'=> Tag::select('id', 'name')->get()
        ]);
    }

    public function store(FormPostRequest $request) : RedirectResponse | Redirector {
        $post = Post::create($this->extractData(new Post(), $request));
        $post->tags()->sync($request->validated('tags'));
        return redirect()
            ->route('blog.show', ['slug' => $post->slug, 'post'=>$post->id])
            ->with('success', "Article Sauvegardé");
    }

    public function edit(String $slug,Post $post) : View{
        return view('blog.edit', [
            'post'=>$post,
            'categories'=>Category::select('id', 'name')->get(),
            'tags'=> Tag::select('id', 'name')->get()
        ]);
    }

    public function update(String $slug,Post $post,FormPostRequest $request) : RedirectResponse | Redirector {
        $post->update($this->extractData($post, $request));
        $post->tags()->sync($request->validated('tags'));
        return redirect()
            ->route('blog.show', ['slug' => $post->slug, 'post'=>$post->id])
            ->with('success', "Article Modifié");
    }

    private function extractData(Post $post, FormPostRequest $request) : array
    {
        $data = $request->validated();
        /* @var UploadedFile|null $image */
        $image = $request->validated('image');
        if ($image == null && !$image->getError()){
            return $data;
        }
        if ($post->image){
            Storage::disk('public')->delete($post->image);
        }
        $data['image'] = $image->store('blog', 'public');
        return $data;
    }

    public function show(String $slug,Post $post) : RedirectResponse | View {
        if ($post->slug != $slug){
            return to_route('blog.show', ["slug" => $post->slug, "post" => $post->id]);
        }
        return view('blog.show', [
            'post' => $post
        ]);
    }
}
