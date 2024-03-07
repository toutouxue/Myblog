import {reactive} from "vue"
export const useAuthStore=reactive({
    user:{
        userId:Int16Array,
        name:String,
        email:String,
        introduction:"",
        token:""
    },
    isLogin:false,
    setUser(u){
      console.log("保存user");
      console.log(this.user);
        this.user.userId=u.userId;
        this.user.email=u.email;
        this.user.name=u.username;
        this.user.introduction=u.introduction;
        this.user.token=u.token;

        localStorage.setItem("user", JSON.stringify(this.user));
    },
    loadUser() {
        var userData = localStorage.getItem("user");
        if (userData) {
          this.user = JSON.parse(userData);
          this.isLogin = true;
        }
      },
      logout() {
        this.user = {};
        this.isLogin = false;
        localStorage.removeItem("user");
      },
})