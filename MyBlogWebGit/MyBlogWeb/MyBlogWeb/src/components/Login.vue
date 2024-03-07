<template>
    <section class=" pt-5 pb-3">
        <div class="container" style="max-width: 1200px; max-height: 650px;">
            <div class="row">
                <div class="col-md-10 col-lg-8 col-xl-6 mx-auto" >
                        <div class="p-4 p-sm-5 bg-primary bg-opacity-10 rounded">
                            <h2>
                            Log in to your account
                            </h2>
                            <form class="mt-4">
                                <div class="mb-3">
                                    <label class="form-label">
                                        Email address
                                    </label>
                                    <input type="email" v-model="user.email" class=" form-control" id="loginEmail"/>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" >
                                        Password
                                    </label>
                                    <input type="password" v-model="user.password" class=" form-control"  id="loginPassword"/>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class=" form-check-input" id="loginCheck">
                                    <label class=" form-check-label">
                                        keep me signed in
                                    </label>
                                </div>
                                <div class="row align-items-center">
                                    <div class=" col-4">
                                        <button type="button" @click="getAuthenticate()" class="btn btn-success">
                                            Sign me in
                                        </button>
                                    </div>
                                    <div class=" col-8 text-end">
                                        <span>
                                            Don't have an account?
                                            <a> <RouterLink to="/logup"> Sign up</RouterLink> </a>
                                        </span>
                                    </div>
                                </div>
                            </form>
                            <hr>
                            <div class="text-center">
                            <p>Sign in with your social network for quick access</p>
                            <ul class="list-unstyled d-sm-flex mt-3 justify-content-center">
                                <li class="mx-2">
                                    <a href="#" class="btn link-primary d-inline-block"><i class="fab fa-facebook-f me-2"></i> Sign in with Facebook</a>
                                </li>
                                <li class="mx-2">
                                    <a href="#" class="btn link-primary d-inline-block"><i class="fab fa-google me-2"></i> Sign in with google</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import {useAuthStore} from '../store/auth'
import {userAxios} from '@/netWork/axiosHelper';
    export default{
        data(){
            return {
                user:{
                    email:'',
                    password:''
                },
            }
        },
        methods:{
          async  getAuthenticate(){
                console.log(this.user);
                var response= await userAxios.getAuthenticateRequest(this.user);
                console.log("这里Authenticate----------");
                console.log(response);
                    if (response!==undefined) {
                        useAuthStore.setUser(response);
                        useAuthStore.isLogin=true;
                        this.$router.push('/');
                    //useAuthStore.setToken(response);
                }
            },
        }
    }
    
</script>