<?php

namespace App\Http\Controllers;

use App\Http\Requests\BlogFilterRequest;
use App\Http\Requests\FormPostRequest;
use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class BlogController extends Controller
{
    public function index() : View
    {
//        $post = new Post();
//        $post->title = "Article Empty";
//        $post->content = "article empty";
//        $post->slug = "article-empty";
//        $post->save();
        
        return view('blog.index', [
            'posts' => Post::paginate(3)
        ]);
    }

    public function create() :  View {
        $post = new Post();

        $post->title = "Article";
        $post->content = "Super Article de bonne qualité";
        
        return view('blog.create', [
            'post'=>$post
        ]);
    }

    public function store(FormPostRequest $request) : RedirectResponse | Redirector {
        $post = Post::create($request->validated());
        return redirect()
            ->route('blog.show', ['slug' => $post->slug, 'post'=>$post->id])
            ->with('success', "Article Sauvegardé");
    }

    public function edit(String $slug,Post $post) : View{
        return view('blog.edit', [
            'post'=>$post
        ]);
    }

    public function update(String $slug,Post $post, FormPostRequest $request) : RedirectResponse | Redirector {
        $post->update($request->validated());
        return redirect()
            ->route('blog.show', ['slug' => $post->slug, 'post'=>$post->id])
            ->with('success', "Article Modifié");
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
