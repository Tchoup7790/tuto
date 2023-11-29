<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\View\View;

class BlogController extends Controller
{
    public function index() : View
    {
        $posts = \App\Models\Post::paginate(1);
        return view('blog.index', [
            'posts' => $posts
        ]);
    }

    public function show(string $slug, string $id) : RedirectResponse | Post
    {
        $posts =  \App\Models\Post::findorFail($id);
        if ($posts->slug != $slug){
            return to_route('blog.show', ["slug" => $posts->slug, 'id' => $id]);
        }
        return $posts;
    }
}
