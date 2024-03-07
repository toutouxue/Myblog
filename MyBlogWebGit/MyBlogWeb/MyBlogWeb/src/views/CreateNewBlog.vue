<template>
  <div class=" h-50 w-75 container mt-5"> 
      <form class=" row justify-content-md-center">
        <div class=" row"> 
          <label class="col-form-label col-2">Write a title</label>
          <div class=" col-10 p-0">
            <input type="text"  class=" form-control" v-model="article.title">
          </div>
        
        </div>
        <div> 
          <div class=" row input-group mb-3">
            <label class=" col-form-label"> Write a Introduce</label>
            <div class=" col col-6">
              <input type="text" class=" form-control" v-model="article.introduce">
            </div>
            <div class=" col col-6">
              <label class="input-group-text" for="inputGroupSelect01">Choose a Type</label>
              <select v-model="article.articleType" class="form-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option :value=1 >CSharp</option>
                <option :value=2>Sql</option>
                <option :value=3>English</option>
              </select>
            </div>
          </div>
          <div> 
            <input type="file" accept="Image/Jpeg" @change="uploadImage($event)"/>
            <img :src="previewImage" class="img-thumbnail" alt="...">
          </div>
        </div>
      </form>
      <quill-editor ref="quillEditor" />
      <div class=" float-end">
        <button type="button" @click="btnSubmit()" class=" btn btn-success">保存</button>
        <button type="button" class=" btn  btn-secondary">取消</button>
      </div>
  </div>
    
</template>


<script>
    import '@vueup/vue-quill/dist/vue-quill.snow.css'
    import { QuillEditor } from '@vueup/vue-quill' 
    import {articleAxios} from '@/netWork/axiosHelper'  
    import {useAuthStore} from '../store/auth'
import { Alert } from 'bootstrap'
    export default {
    components: {
      "quill-editor":QuillEditor
    },
    data () {
    return {
      previewImage:null,
      article:{
        title:"",
        description:null,
        introduce:"",
        articleType:Int16Array,
        userId:Int16Array,
        imgPath:'...'
      },
      editorOption:{
        modules:{
          toolba:[
            
          ],
        }
      }
    }
  },
  methods: {
    setUser(){
    this.article.description=JSON.stringify(this.$refs.quillEditor.getContents());
    console.log(useAuthStore.user.userId);
    this.article.userId=useAuthStore.user.userId;
   },
  async btnSubmit(){
      this.setUser();
      console.log( this.article.description);
      try{
        var response= await articleAxios.saveArticle(this.article);

        if (response===1) {
          alert("发布成功");
          this.$router.push("/");
        }
      }catch(err){
        if (err.status==401) {
          alert("登录过期，重新登录");
          if (useAuthStore.isLogin==true) {
            useAuthStore.isLogin=false;
          }
          this.$router.push("/login");
        }
      }
      
      
    },
    uploadImage(e){
                const image = e.target.files[0];
                console.log(image);
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage=e.target.result;
                    this.article.imgPath = e.target.result.replace(/data.+?;base64,/,"");
                    //console.log(this.previewImage);
                };
            }
  },
  computed: {
   
  },
  mounted () {
  }
  
}
</script>