<template>
    <div id="box">
        <header>
             <van-nav-bar
                title="信息"
                left-text
                left-arrow
                fixed
                @click-left="onClickLeft"
            />
        </header>
        <div id="content">
            <ul v-for="item in arr" :key="item">
                <li>
                    <img :src="item.headImg">
                </li>
                <li>
                    <div id="title">
                        <h5>{{item.userName}}</h5>
                        <span>{{ item.time}}</span>
                    </div>
                    
                    <p>{{ item.didDesc}}</p>
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
import axios from "axios"
import { Uploader, Toast } from 'vant'
export default {
    data(){
        return{
            name:"Detils",
            arr:[]
        }
    },
    mounted(){
            var Token = localStorage.getItem("Token")
             axios({
            method:"get",
            url:"http://47.95.218.254/showbabydid",
            params:{userId:Token}
             }).then((data)=>{
                if(data.data.length==0){
                    this.img=this.$store.state.commheadImg
                }else{
                     this.arr=data.data
                }
              
             }).catch((error)=>{
                 
             })
      
       
    },
    methods:{
        onClickLeft() {
            this.$router.push("/time")
        },
    }
}
</script>

<style scoped>
    #box{
        height:100%;
        display:flex;
        flex-direction: column;
    }
    #content{
        width:90%;
        height:70%;
        padding:15% 5%; 
    }
    #content ul{
        width:100%;
        height:100%;
        background:#f2f2f2;
        border-radius:15px;
        overflow: hidden;
    }
    #content ul li:nth-child(1){
        height:55%;
        width:100%;
    }
    #content ul li:nth-child(1) img{
        height:100%;
        width:100%;
        

    }
    #content ul li:nth-child(2){
        height:45%;
        width:90%;
        display:flex;
        border-top:1px solid #000;
        flex-direction: column;
        padding:0 5%;
        
        
    }
    #content ul li:nth-child(2) #title{
         width:100%;
         height:40%;


     }
     h5{
         font-size:16px
     }
    #content ul li:nth-child(2) #title span{
        color:#999bb0
    }

    #content ul li:nth-child(2) p{
         width:100%;
         height:60%;

     }
    
    
</style>
