<?php

namespace App\Http\Controllers;

use App\Http\Requests\BlogFilterRequest;
use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Validator;
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

    public function show(String $slug,Post $post) : RedirectResponse | View {
        if ($post->slug != $slug){
            return to_route('blog.show', ["slug" => $post->slug, "post" => $post->id]);
        }
        return view('blog.show', [
            'post' => $post
        ]);
    }
}
