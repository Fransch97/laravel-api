<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;

class PostsController extends Controller
{
    public function index(){
        $posts = Post::with('category')->with('tags')->get();
        return response()->json($posts);
    }

    public function update(Request $id){
        $post = Post::find($id);
        $post->id = $post->id + 1;
        $post->update();
    }
}
