<template >
    <section class="container mt-3" style="max-height: 600px;" >
            <div v-if="recommendArticles.length>0" class="row text-white">
                <recommend-article :recommendArticle="recommendArticles[0]" v-if="recommendArticles.length>0"></recommend-article>
                <div class="col col-sm-6 ">
                    <div class="row" style="min-height: 300px;">
                        <div class="col-12" >
                            
                            <div  class=" d-flex align-items-center p-3" :style="{ minHeight:'250px' ,maxHeight:'250px','background-image': 'url(' + recommendArticles[1].imgPath+ ')',  backgroundSize: 'cover',backgroundPosition:'center left'}">
                                <div class=" w-100 mt-auto ">
                                    <h4 class=" text-white" >
                                        <a class=" alink text-reset">
                                            {{recommendArticles[1].title}}
                                        </a>
                                    </h4>
                                    <p class="text-truncate">{{recommendArticles[1].introduce}}</p>
                                    <author-bar :author="recommendArticles[1].applicationUser"></author-bar>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 mt-3 ">
                            <div class=" d-flex align-items-center p-3" :style="{ minHeight:'265px',maxHeight:'265px','background-image': 'url(' + recommendArticles[2].imgPath+ ')',  backgroundSize: 'cover',backgroundPosition:'center left'}">
                                <div class=" w-100 mt-auto ">
                                    <h4 class=" text-white" >
                                        <a class=" alink text-reset">
                                            {{recommendArticles[2].title}}
                                        </a>
                                    </h4>
                                    <p class="text-truncate" >{{recommendArticles[2].introduce}}</p>
                                    <author-bar :author="recommendArticles[2].applicationUser"></author-bar>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 mt-3">
                            <div class=" d-flex align-items-center p-3" :style="{ maxHeight:'265px',minHeight:'265px','background-image': 'url(' + recommendArticles[3].imgPath+ ')',  backgroundSize: 'cover',backgroundPosition:'center left'}">
                                <div class=" w-100 mt-auto ">
                                    <h4 class=" text-white" >
                                        <a class=" alink text-reset">
                                            {{recommendArticles[3].title}}
                                        </a>
                                    </h4>
                                    <p class="text-truncate">{{recommendArticles[3].introduce}}</p>
                                    <author-bar :author="recommendArticles[3].applicationUser"></author-bar>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</section>
</template>
<script>
import AuthorBar from '@/components/AuthorBar.vue';
import RecommedArticle from '@/components/RecommedArticle.vue';
import { articleAxios } from '@/netWork/axiosHelper';

export default{
    data(){
        return {
            recommendArticle:{
            id:1304,    
            title:'asdhasdhasdhasdhasdhsh',
            introduce:'asdasdsadasds',
            coverImgPath:'https://blogzine.webestica.com/assets/images/blog/1by1/01.jpg',
            publishTime:'',
            author:{
                name:'dasdasd',
                photoPath:'sadasdas',
            }
        },
        recommendArticles:[],
        }
    },
    methods:{
        async getRecommendArticles(){
            try{
                var response =await articleAxios.getRecommendArticles();
               this.recommendArticles=response;
            }catch(err){

            }
              
               console.log(this.recommendArticles);
            },
    },
    created(){
       
            this.getRecommendArticles();
        
        
    },
    components:{
        "recommend-article":RecommedArticle,
        "author-bar":AuthorBar,
    }
}
</script>
<style>
    /* 初始状态下划线为透明 */
.alink {
  position: relative;
  text-decoration: none;
}

/* 下划线伪元素 */
.alink::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: hsl(0, 0%, 100%);
  transition: width 1s ease; /* 添加过渡效果 */
}

/* 鼠标悬停时下划线动画 */
.alink:hover::before {
  width: 100%; /* 下划线宽度变为100% */
}

.navTime:before {
    content: "•";
    color: inherit;
    padding-left: 0.65rem;
    padding-right: 0.75rem;
    opacity: 0.8;
}
</style>
