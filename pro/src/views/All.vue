<template>
<div>

    <div class="know" style="position:fixed; top:0;width:100%;z-index:100;display:flex;justify-content:space-around">
        <van-icon name="arrow-left" :size='30' @click="tap1()"/>
        <input type="text" placeholder="搜说更多育儿知识"  style="border-radius:10px;height:35px;width:90%;border:1px solid #ccc"/>
       
            <!-- <van-search placeholder="搜说更多育儿知识" v-model="value" slot="right" /> -->
       
         
    </div>
    <div class="nav1" style="margin-top:54px;margin-bottom:20px">
        <van-tabs v-model="active">
            <van-tab title="孕期"></van-tab>
            <van-tab title="0-1岁"></van-tab>
            <van-tab title="1-3岁"></van-tab>
            <van-tab title="3-6岁"></van-tab>
        </van-tabs>
    </div>
    


    <div class="yunqi" style="width:80%;height:150px;background:red;border-radius:5px;margin:10px auto;">

    </div>
    <ul class="zhunbei">
        <li class="yun"><div></div><p>孕前准备</p></li>
        <li class="yun"><div></div><p>孕期检查</p></li>
        <li class="yun"><div></div><p>孕期生活</p></li>
        <li class="yun"><div></div><p>产后</p></li>
    </ul>



        <ul id="klist">
            <li class="pro" v-for='item in list'>
                <img :src="item.img"/>
                <div class="read">
                    <p>{{item.text}}</p>
                   
                    <span>9999人在阅读</span>
                </div>
               
                
            </li>
        </ul>   
</div>
    
        
    
</template>

<script>
import axios from 'axios';
export default {
    name:'All',
    data(){
        return{
            value:'',
            active:'',
            list:[],
            isLoading: false
        }
    },
    mounted(){
        axios({
            url:'http://www.jingdong.com'
        }).then((data)=>{
            console.log(data.data)
           this.list = data.data.list
        })
    },
    methods: {
        tap1(){
            this.$router.go(-1)
        }
    },
}
</script>

<style scoped=''>
    
    .zhunbei{
        display: flex;
        justify-content: space-around;
    }
    .zhunbei .yun div{
        width:50px;
        height: 50px;
        background: blue;
        border-radius: 50%;
    }
    .zhunbei .yun{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        
    }
    #klist{
        
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
        height: 100px;
        background: red;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 14px

    }
</style>

