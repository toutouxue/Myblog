<template >
    <div id="blog-type" style="height: 50px;" v-if="articleType" :style="{backgroundImage:`url(${articleType.backgroundImg})`} " class="blog-type text-center text-white mb-3">
       <div class="p-3">
            <a class=" text-white">
                {{articleType.text}}
            </a> 
       </div>
        
    </div>
</template>
<script>


export default{
    props:{
        articleType:{
            text:String,
            backgroundImg:String
                 }
    }    
}
</script>