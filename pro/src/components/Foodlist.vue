<template>
    <div>
         <van-grid :border="false" :column-num="3">
            <van-grid-item v-for="item in list" @click="tap(item.foodsTypeId)" >
                <van-image :src="item.foodsTypeImgUrl" />
                <h3>{{item.typeName}}</h3>
            </van-grid-item>
            
        </van-grid>
        
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"Foodlist",
    data(){
        return{
            list:[]
        }
    },
    methods: {
        tap(a){
            this.$router.push('/mainfood/'+a);
            
        }
    },
    mounted(){
        axios({
         url:"http://10.8.157.61/foodstype"
    }).then((data)=>{
       // console.log(data.data)
        this.list=data.data
        //console.log(this.list)
    })
    }
    
}
</script>
<style scoped>
    
</style>
