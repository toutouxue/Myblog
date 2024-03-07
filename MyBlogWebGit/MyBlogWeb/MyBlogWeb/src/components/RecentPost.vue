<template>
    <div class="card mb-3 border-0">
        <div class="row g-3">
            <div class="col-md-4" style="max-width: 540px;">
                <img :src="recentPost.imgPath" class="img-fluid" alt="">
            </div>
            <div class="col-md-8 text-center">
                <h6>
                    {{recentPost.title}}
                </h6>
                <div>
                    {{recentPost.dataTime}}
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            recentPost:{
                imgPath:String,
                title:String,
                dataTime:String
            }
        },
    }
</script>