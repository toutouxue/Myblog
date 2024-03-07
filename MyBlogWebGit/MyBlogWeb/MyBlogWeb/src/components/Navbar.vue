<template>
<header class="sticky-top">
    
    <nav class="navbar navbar-expand-lg  bg-body-tertiary  ">
        <div class="container-fluid">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                <span class="fs-4">Simple header</span>
            </a>
            <ul class="nav nav-pills ">
                <li class="nav-item"><RouterLink class="nav-link" to="/">Home</RouterLink></li>
                <li class="nav-item" v-if="ShowLoginOrLogout"><RouterLink class="nav-link" to="/login">SignIn</RouterLink></li>
                <li class="nav-item" v-if="!ShowLoginOrLogout" @click="loginout()"><RouterLink class="nav-link" to="/">SignOut</RouterLink></li>
                <li class="nav-item"><RouterLink class="nav-link" to="/createNewBlog">Create new blog</RouterLink></li>
                <li class="nav-item"><RouterLink class="nav-link" to="/">FAQs</RouterLink></li>
                <li class="nav-item"><RouterLink class="nav-link" to="/about">About</RouterLink></li>
            </ul>
        </div>
    </nav>
</header>    

	<!-- Logo Nav END -->

 </template>

<script>
import { useAuthStore } from '@/store/auth';

    export default{
        data(){
            return {
                loginOrLogout:true,
            }
        },
        methods:{
            loginout(){
                useAuthStore.logout();
            }
        },
        computed:{
            ShowLoginOrLogout(){
                if (useAuthStore.isLogin ==false){
                    return true;
                }
                return false;
            }
        }
    }
</script>