import { useAuthStore } from "@/store/auth";
import axios from "axios";
const host="https://localhost:7114/api/"; 
const instance=axios.create({
    baseURL:host,
    timeout:50000,
});
export const articleAxios={
    saveArticle(article){
        return new Promise((resolve,reject)=>{
            console.log('这里是.NETWORK 检测');
            console.log(useAuthStore.user);
            console.log(article);
            instance.post("Home/AddArticle",article,{
                headers:{
                    "Authorization":"Bearer "+useAuthStore.user.token
                }
            })
            .then(
                response=>{
                    console.log(article);
                    resolve(response.data);
                }
            )
            .catch(
                err=>{
                    console.log(err);
                    reject(err.response);
                }
            )
        })
    },
     getArticleDetail(id){
        return new Promise((resolve,reject)=>{
            instance.get("Home/GetArticleById/"+id,)
            .then(res=>resolve(res.data))
            .catch(err=>{
                reject(err)})
        })
    },
    getRecommendArticles(){
        return new Promise((resolve,reject)=>{
            instance.get("Home/GetRecommendArticles/")
            .then(res=>resolve(res.data))
            .catch(err=>{
                reject(err)})
        })
    }
}
function uploadImg(img){
    return new Promise((resolve,reject)=>{
        instance.post()
        .then(res=>{
            resolve(response.data);
        })
        .catch(err=>{
            reject(err);
        })
    })
}

const userAxios ={
    getAuthenticateRequest(user){
        return new Promise((resolve,reject)=>{
            instance.post("authentication/Authenticate",{
                Email:user.email,
                Password:user.password
            })
            .then(res=>{
                resolve(res.data)})
            .catch(err=>reject(err));
        })
    }
}
export{userAxios}