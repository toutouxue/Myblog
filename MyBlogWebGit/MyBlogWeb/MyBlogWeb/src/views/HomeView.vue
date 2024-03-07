
<template>
        <recommend-article-view/>
        <section class="p-4">
            <div class="container">
                <div class="row">
                    <div class="col col-9">
                        <div class="row gy-4">
                            <div class="mb-4">
                                <h2 class="m-0"><i class="bi bi-hourglass-top me-2"></i>Today's top highlights</h2>
                                <p>Latest breaking news, pictures, videos, and special reports</p>
                            </div>
                            <div class="col-sm-6 " v-for="(item,index) in articleCard" :key="index">
                                <article-card :article="item" />
                            </div>
                            <div class="col-12 text-center mt-5">
                                <button type="button" @click="loadMore" class="btn btn-outline-primary">
                                    Load more post 
                                    <i class="bi bi-arrow-down-circle"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 text-center  ">
                        <div class="mt-4 position-sticky top-0">
                            <h4>Trending topics</h4>
                            <div v-for="item in articleType" :key="index">
                                <article-type :articleType="item" >
                                </article-type>
                            </div>
                            
                            <div class="text-center mt-3">
							<a href="#" class="fw-bold text-body text-primary-hover"><u>View all categories</u></a>
						    </div>
                            <div class="row ">
                                <div class="col-12">
                                    <h4 class="mt-4 mb-3">Recent post</h4>
                                    <recent-post :recentPost="recentPost" v-for="index in 4" :key="index"/> 
                                </div>
                                <div class="col-12 col-sm-6 col-lg-12 my-4">
                                    <a class="d-block card-img-flash">
                                        <img src="https://localhost:7114/Img/adv.png" class="img-fluid"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>

import ArticleCard from '@/components/ArticleCard.vue';
import axios from 'axios';
import ArticleType from '@/components/ArticleType.vue';
import RecentPost from '@/components/RecentPost.vue';
import RecommedArticleView from '@/views/RecommedArticleView.vue';
import { articleAxios } from '@/netWork/axiosHelper';
    export default{
        name:"Home",
        data(){
            return {
                articleCard:[],
                loadMoreParams:{
                    lastIndex:Number,
                    takeSum:6,
                },
                articleType:[
                {
                    text:"CSharp",
                    backgroundImg:"https://localhost:7114/Img/be0cbbb7-8c43-4324-9885-3d012c3f29c0.png"
                },
                {
                    text:"Sql",
                    backgroundImg:"https://localhost:7114/Img/01.jpg"
                },
                {
                    text:"English",
                    backgroundImg:"https://localhost:7114/Img/5dc0eddc-8eac-46c1-93c3-88483893581e.png"
                },{
                    text:"Travel",
                    backgroundImg:"https://localhost:7114/Img/be0cbbb7-8c43-4324-9885-3d012c3f29c0.png"
                }
                ],
                recentPost:{
                    imgPath:"https://localhost:7114/Img/adv.png",
                    title:"随便写点什么随便写点什么随便写点什么随便写点什么",
                    dataTime:"May 17, 2022"
                }
            }
        },
        components:{
            "article-card": ArticleCard,
            "article-type":ArticleType,
            "recent-post":RecentPost,
            "recommend-article-view":RecommedArticleView
                    },
                    
        created(){
            // axios.get('https://localhost:7114/api/Home/GetArticles').then(res=>{
            //     this.articleCard=res.data;
                console.log("articleCard  输出");
                console.log(this.articleCard);
            // })
            this.initialArticleCardData();
        },
        methods:{
           
            loadMore(){
                this.loadMoreParams.lastIndex=this.articleCard.length;
                console.log(this.loadMoreParams);
                axios.get('https://localhost:7114/api/Home/GetMoreArticles',{params:this.axiosParams}).then(res=>{
                    console.log("请求的数据");
                    console.log(res.data);
                    console.log("------------------------------");
                    this.articleCard = [...this.articleCard, ...res.data];
                    console.log("合并的数据");
                    console.log(this.articleCard);
                    console.log("------------------------------");
                }).catch(err=>console.log(err));
                console.log(this.articleCard);
            },
            initialArticleCardData(){
                this.loadMoreParams.lastIndex=0;
                console.log(this.loadMoreParams);
                axios.get('https://localhost:7114/api/Home/GetMoreArticles',{params:this.axiosParams}).then(res=>{
                    this.articleCard=res.data;
                    console.log("请求的articleCard");
                    console.log(res.data);
                }).catch(err=>console.log(err));
            }
                },
        computed:{
            axiosParams(){
                const params=new URLSearchParams();
                params.append('lastIndex',this.articleCard.length);
                params.append('takeSum',6);
                return params;
            }
        }
}

</script>