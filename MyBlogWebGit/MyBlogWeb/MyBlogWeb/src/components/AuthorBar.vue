<template>
     <ul v-if="author" class="nav nav-divider text-white-force align-items-center ">
                <li class=" nav-item text-reset">
                    <RouterLink class="text-reset text-decoration-none" :to="{name:'authorDetail',query:{id:author.id}}">
                        <img class="avatar-img rounded-circle" style="max-height: 36px;" :src="author.photoPath" >
                        by <a  class="alink text-reset ">{{author.userName}}</a>
                    </RouterLink>
                </li>
                <li class="nav-item navTime">
                    {{author.publishTime}}
                </li>
      </ul>
</template>
<script>
import { RouterLink } from 'vue-router';
export default {
    name:"authorBar",
    props:{
        author:{
            id:String,
            photoPath:String,
            userName:String,
            publishTime:String
        }
    },
    created(){
        console.log(this.author);
    }
    
    
}
</script>