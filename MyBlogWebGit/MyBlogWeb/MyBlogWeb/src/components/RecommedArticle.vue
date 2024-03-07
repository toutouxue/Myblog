<template>
    <div v-if="recommendArticle" class="col col-sm-6 d-flex align-items-center p-3" :style="{ minHeight:minHeight,'background-image': 'url(' + recommendArticle.imgPath+ ')',  backgroundSize: 'cover',backgroundPosition:'center left'}">
        <div class=" w-100 mt-auto" >
            <h2 class=" text-white" >
                <RouterLink :to="{name:'articleDetail',query:{id:recommendArticle.id}}" class="alink btn-link  text-reset">
                    {{ recommendArticle.title }}
                </RouterLink>
            </h2>
            <p >{{recommendArticle.introduce}}</p>
            <author-bar :author="recommendArticle.applicationUser"></author-bar>
        </div>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';
import AuthorBar from './AuthorBar.vue';

export default {
    name:"recommendArticle",
    props:{
        recommendArticle:{
            id:Int16Array,
            title:String,
            introduce:String,
            imgPath:String,
            publishTime:String,
            applicationUser:{
                id:Int16Array,
                introduction:String,
                name:String,
                photoPath:String,
            }
        },
        minHeight:'',
    },
    data(){
        return {
            
        }
    },
    components:{
        "author-bar":AuthorBar,
    },
    created:function(){
        console.log(this.recommendArticle.applicationUser);
    }
}
</script>
<style>
    

</style>