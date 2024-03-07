

<template>
  <navbar/>
  <RouterView />
  <blog-footer/>
</template>

<script>
  import { RouterView } from 'vue-router'
  import Navbar from './components/Navbar.vue';
  import BlogFooter from '@/components/BlogFooter.vue';
  import { useAuthStore } from './store/auth';
  
  
  export default{
      components:{
      "blog-footer":BlogFooter,
      "navbar":Navbar,
    },
    beforeCreate(){
      useAuthStore.loadUser();
    }
  }
  
</script>