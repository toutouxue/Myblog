import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },{
      path:'/login',
      name:'login',
      component:()=> import ('../components/Login.vue')
    },{
      path:'/logup',
      name:'logup',
      component:()=> import ('../components/Logup.vue')
    },
    {
      path:'/createNewBlog',
      name:'createNewBlog',
      component:()=>import ('../views/CreateNewBlog.vue')
    },
    {
      path:'/articleDetial',
      name:'articleDetail',
      component:()=>import ('../views/ArticleDetailView.vue')
    },
    {
      path:'/authorDetail',
      name:'authorDetail',
      component:()=>import('../views/AuthorDetailView.vue')
    }
  ]
})
router.beforeEach(async (to, from, next) => {
  if(to.path ==='/login' || to.path==='/' || useAuthStore.isLogin ||to.path ==='/logup'){
    console.log("已经登录了放行");
    console.log(to);
    next();
  }else{
    console.log("我是其他");
    console.log(useAuthStore.isLogin);
    next('/login'); 
  }
  
});

export default router
