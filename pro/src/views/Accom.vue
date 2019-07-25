<template>
    <div id="box">
        <header>
            <van-nav-bar
            title="成就"
            left-arrow
            fixed
             id="banner"  
             @click-left="onClickLeft"
            />
        </header>
        <div id="content">
            <ul>
                <li v-for="item in arr" :key="item">
                    <router-link tag='img' to="/success" :src="item.headImg"/>
                    
                </li>
                <li v-for='item in 5'>
                    <router-link tag='img' to="/success" src='https://i02piccdn.sogoucdn.com/73c7f22c1f0d9bd3'/>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    
    data(){
        return{
            name:"Accom",
            Token:"",
            arr:[]
        };
    },
    methods:{
        onClickLeft(){
            this.$router.push("/time")
        }
        
    },
    mounted(){
            if(localStorage.getItem("Token")){
                this.Token = localStorage.getItem("Token")
                
                axios({
                    method:"get",
                    url:"http://10.8.157.61/showbabydid",
                    params:{userId:this.Token}
                }).then((data)=>{
                   
                    this.arr=data.data
                })
            }
        }
}
</script>

<style scoped>
    #box{
        height:100%;
        display:flex;
        flex-direction: column
    }
    header{
        width:100%;
        height:10%;
    }
    #content{
        width:100%;
        height:90%;
        
    }
    #content ul{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:row;
        justify-content: space-around;
        flex-wrap:wrap
    }
    #content li{
        width:100px;
        height:100px;
        background:#eee;
        border-radius:5px;
        margin:2%;
        border:1px solid #cccccc
        
    }
    #content li img{
        width:100%;
        height: 100%
    }
</style>
