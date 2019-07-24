<template>

    <div style='margin-bottom:50px'>

    <div>

        <van-swipe :autoplay="3000" indicator-color="white"  :height="200">
        <van-swipe-item class="log" v-for="item in list">
             <img class="tu1" :src="item" style="width:100%;height:200px">
        </van-swipe-item>
        
        </van-swipe>

        <div style="margin-top:20px;background:orange;margin-bottom:10px">
            <ul class="eat">
                <li><div></div><router-link tag="p" to='/eatnot'>能不能吃</router-link></li>  
                <li><div></div><router-link tag="p" to='/yingyang'>营养食谱</router-link></li>
                <li><div></div><router-link tag="p" to='/collect'>我的收藏</router-link></li>

            </ul>
        </div>


         <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        
        <ul class="klist">

            <li class="pro" v-for='item in data'>
                <img :src="item.foodsImgUrl"/>
                <div class="read">
                    <p>{{item.foodDesc}}</p>
                    <span>{{item.foodsName}}</span>

            <li class="pro" v-for='item in list'>
                <img :src="item.img"/>
                <div class="read">
                    <p>{{item.text}}</p>
                    <span>9999人在阅读</span>

                </div>
               
                
            </li>
        </ul>   
        </van-pull-refresh>
    </div>
</template>
<script>
import axios from 'axios';
export default {
     name:'Shipu',
    data(){
        return{
            list:[],           
            isLoading: false,

            title:'食谱',
            data:[]



        }
    },

    methods: {
        onRefresh() {
            setTimeout(() => {
                console.log('刷新')
                this.isLoading = false;

            }, 500);
        }
       
    },
  mounted(){
        axios({
            url:'http://10.8.157.61/bannerUrl'
        }).then((data)=>{
            
           this.list = data.data;
          // console.log(this.list)
        }),
         axios({
            url:'http://10.8.157.61/recipe'
        }).then((data)=>{
            console.log (data)
           this.data = data.data;
           console.log(this.data)
        }),
         this.$emit('toparent',this.title)
    },
}
</script>
<style scoped=''>
*{
    margin: 0;
    padding: 0;
}
     .log{
        background: red;
    
    }
    .eat{
        display: flex;
        
        justify-content:space-around;
    }
    .eat li{
        width: 30%;
        
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
    }
    .eat li div{
        width: 50px;
       height: 50px;
       border-radius: 50%;
        background:#000;

    }
    .eat li p{
        width:80px;
        height: 20px;
       
        text-align: center
    }
    img{
       
        width: 120px;
        height: 60px;
        flex-shrink: 0;
    }
     #klist{
         overflow: auto;
        margin-bottom: 50px;
    } 
    .pro{
        
        display: flex;
        border: 1px solid red;
        margin-bottom: 10px;
        border: 1px solid red;
        justify-content: space-between;
        align-items: center 
        
    }
    .read{
        width: 60%;
        height: 70px;
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 14px

    }
</style>