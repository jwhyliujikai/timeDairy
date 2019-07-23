<template>
    <div>
        <ul class="baobao">
            <router-link v-for="item in list" tag="li" :to="{name:'wine',query:{a:item.foodsId}}">
            <img :src="item.img"/>
            <div>
                <h2>{{item.foodsName}}</h2>
                <span>{{item.periodName}}</span>
                <span>{{item.foodsDesc}}</span>
                
            </div> 
             
                
            </router-link>
            
        </ul>
    </div>

</template>

<script>
import axios from 'axios';
export default {
    name:"Mainfood",
    data(){
        return{
            value:'',
            title:'能不能吃',
            list:[],
        }
    },
    mounted(){
        var _this=this;
       // console.log(this.$route.params.id);
        // if(this.$route.params.id==1){
        //     this
        // }
             axios({
            url:'http://10.8.157.61/queryfoodsbytypeid',
            params:{foodsTypeId:_this.$route.params.id}
        }).then((data)=>{
            //console.log(data.data)
           this.list = data.data
           //console.log(this.list)
        }),
        this.$emit('toparent',this.title)
        
    }
}
</script>
<style scoped=''>
    .baobao{
        margin-bottom: 50px;
    }
    .baobao img{
        width: 30vw;
        height: 80px;
    }  
    .baobao li{
        margin: 0 auto;
        width: 95vw;
        border:1px solid red;
        margin-bottom: 10px;
        display: flex;
        padding: 10px 0;
        justify-content: space-between;
    }  
    .baobao div{
        width:60vw;
        height: 80px;
        background: blue;
        display: flex;
        flex-direction: column;
        justify-content: space-between
    }

</style>