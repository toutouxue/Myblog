<template>
<div v-if="article"  class="card" style="width: 490px; height: 490px;" >
    <img class=" card-img-top" style="width: 490px; height: 350px;" :src="article.imgPath" alt="">
    <div class="card-body">
        <h5 class=" card-title text-truncate" >
             <RouterLink  class=" alink btn-link  text-reset" :to="{name:'articleDetail',query:{id:article.id}}">{{article.title}}</RouterLink> 
        </h5>
        <p class="card-text text-truncate">{{article.introduce}}</p>
        <author-bar :author="article.applicationUser"></author-bar>
    </div>
</div>
</template>
<script>
import router from '@/router';
import { RouterLink } from 'vue-router';
import AuthorBar from './AuthorBar.vue';
export default{
    name: "articleCard",
    props: {
        article: {
            id:Int16Array,
            imgPath: String,
            title: String,
            introduce: String,
            applicationUser:{
                id:Int16Array,
                introduction:String,
                photoPath:String,
                userName:String
            }
        },
        
    },
    components:{
        "author-bar":AuthorBar
    },
    created() {
        
    },
    
}
</script>