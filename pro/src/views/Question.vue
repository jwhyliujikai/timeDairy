<template>
    <div>
        <van-nav-bar
        title="问答"      
        left-arrow
        @click-left="onClickLeft"
       
        />
    </div>

    
        
    
</template>

<script>
import axios from 'axios';
export default {
    name:'Question',
    data(){
        return{
            
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
    },
}
</script>

<style scoped=''>
    
</style>

