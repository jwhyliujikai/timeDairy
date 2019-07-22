
<template>
    <div>
        <van-nav-bar
            :title='title'            
            left-arrow
            :fixed=true
            @click-left="onClickLeft"

        />
        <router-view @toparent='getval'></router-view>

    </div>


</template>
<script>


export default {
    name:'Cookbook',
    data(){
        return{
            title:'食谱'   
             
        }
    },

    methods: {
        onClickLeft() {
        this.$router.go(-1)
        },
        getval(msg){
            this.title=msg
        }
    },
       
  }
 
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
    
   
</style>
