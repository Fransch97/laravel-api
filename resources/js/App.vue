<template>
    <div>
        <h1>Posts</h1>
        <div class="container">

            <div class="card" v-for="post in postsData" :key="post.id">
                <h2>{{post.title}}</h2>
                <span v-for="tag in post.tags" :key="tag.id" >
                {{tag.name}}
                </span>
                <p>{{post.content}}</p>
            </div>

        </div>


    </div>
</template>

<script>
import Axios from 'axios'

export default {
    name: "App",
    data() {
        return {
            url: "http://127.0.0.1:8000/api/posts",
            postsData : [],
        }
    },
    methods: {
        getApi(){

        }
    },
    mounted(){
        Axios.get(this.url)
        .then(r=>{

            console.log(r.data)
            this.postsData = r.data

        })
    }
}
</script>

<style>

</style>
