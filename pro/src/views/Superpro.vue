<template>
    <div>
    
           <van-nav-bar :title="title" left-text="返回" @click-left="onClickLeft" left-arrow fixed :border="false" style="background:rgb(234,234,234)" >
            <van-icon name="search" slot="right" /></van-nav-bar>
            <div id="body"> 
                <router-view @titleText='changetitle'></router-view>
            </div>
            
        
     
      
    </div>
</template>
<script>
export default {
    name:"Superpro",
    data(){
        return {
            title:'优品',
        
        }
    },
    methods:{
        changetitle(msg){
            this.title=msg;
        },
        onClickLeft(){
             this.$router.go(-1) ;         
        }
        
    }
}
</script>
<style scoped>


</style>

