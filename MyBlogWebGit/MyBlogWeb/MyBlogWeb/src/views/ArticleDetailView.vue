<template>
    <div class="container">
        <div class=" row">
            <div class=" col-9 text-center">
                <div>
                    <h1>
                        {{ article.title}}
                    </h1>
                </div>
                <div id="editor" class=" mt-3" >
                    <!-- {{ article.description }} -->
                    
                </div>
                <author class=" text-center" :author="this.article.applicationUser"></author>
               
            </div>
            <div class="col col-3 mt-3">
                <div class="col-12">
                    <article-type></article-type>
                </div>
                <div class=" col-12">
                    <div class="col-12 col-sm-6 col-lg-12 my-4">
                        <a class="d-block card-img-flash">
                            <img src="https://localhost:7114/Img/adv.png" class="img-fluid"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ArticleType from '@/components/ArticleType.vue';
import Author from '@/components/Author.vue'
import { articleAxios } from '@/netWork/axiosHelper';
import { Quill } from '@vueup/vue-quill';

export default{
    data(){
        return {
            article:{
                
            }
        }
    },
    created: function() {
        //console.log(this.$route.query.id);
        this.getArticleById();
        
        
    },
    components:{
        "author": Author,
        "article-type":ArticleType
    },
    methods:{
        async getArticleById(){
            try{
                this.article = await articleAxios.getArticleDetail(this.$route.query.id);
                this.article.description=JSON.parse(this.article.description);
                this.renderArticle();
            }catch(err){
                console.log(err);
            }
            
        },
        renderArticle(){
            const quill = new Quill('#editor',{
                readOnly:true,
            });
            // 获取所有具有类名为 "ql-clipboard" 的元素
            const qlClipboardElements = document.querySelectorAll('.ql-clipboard');
            // 将每个元素的 contenteditable 属性设置为 false
            qlClipboardElements.forEach(element => {
                element.contentEditable = false;
            });
            quill.setContents(this.article.description);
            //quill.setContents(this.article.description);
        }
    },
}
</script>