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
                <p>{{post.likes}}</p>
                <span class="likes"
                onclick="likes(post.id)"
                >&#10084;</span>
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
            urlGet: "http://127.0.0.1:8000/api/posts",

            urlPut: "http://127.0.0.1:8000/api/posts/update",


            postsData : [],
        }
    },
    methods: {
        getApi(){
            Axios.get(this.urlGet)
            .then(r=>{

                console.log(r.data)
                this.postsData = r.data

            })
        },

        like(id){

            putParams = id

            Axios.put(this.urlPut,{ "id ": putParams })
            .then(r=>{

                console.log(r.data)
                this.postsData = r.data

            })


            this.getApi()
        }
    },
    mounted(){
        this.getApi()
    }
}
</script>

<style>

</style>
