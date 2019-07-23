<template>
    <div>
       <van-nav-bar  left-text="返回" left-arrow fixed @click-left="onClickLeft" :z-index='1000'>
            <van-icon name="star-o" slot="right" />
            </van-nav-bar>
        <div id="body">
        
            <router-view/>
       </div>
    </div>
</template>
<script>
export default {
    name:"Index",
    methods:{
         onClickLeft(){
             this.$router.go(-1) ;         
        }
    }
}
</script>
<style scoped>
#body{
    margin-top: 46px;
}

</style>

