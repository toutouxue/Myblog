<template>
<div v-if="author" class=" card  bg-primary mb-3"  >
  <div class=" row g-0">
    <div class="col-4">
      <img :src="author.photoPath" class="img-fluid rounded-start" alt="">
    </div>
    <div class="col-8">
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between">
          <div>
            <h5 class="card-title">{{author.userName}}</h5>
          </div>
          <a href="#" class="btn btn-xs btn-primary-soft">View Articles</a>
				</div>
        
        <p class="  my-2 card-text">{{ author.introduction }}</p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default{
    name:'author',
    props:{
        author:{
            userName:"",
            photoPath:"",
            introduction:""
        }
    },
    created:function(){
      console.log("我被创建了");
    },
    beforeUpdate:function(){
      console.log("我是author");
      console.log(this.author);
    }
}
</script>