<template>
    <div id="box">
        <header>
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" @click="index">
            <van-button type="default" round size="large" id="logins">登录</van-button>
            <van-button type="default" round size="large" id="registers" @click="res">注册</van-button>
        </header>

        <div id="content">
            <div id="content1">
                 <div id="text1">
                    <van-icon name="contact" size="30px"/>
                    <input type="text" placeholder="用户名" v-model="userName" @blur="names">
                </div>
            
                <div id="text2">
                    <van-icon name="bag-o" size="30px"/>
                    <input type="password" placeholder="密码" v-model="passWord">
                </div>
                <div id="text3">
                    <share :config="config"></share>
                </div>
            </div>
           
        </div>
        <footer>
            <van-button type="default" size="large" id="btn" @click="btn">登录</van-button>
        </footer>
       
    </div>
</template>
<script>
import axios from "axios"
import {Toast} from "vant"
export default {
    name:"Login",
    data(){
        return{
        userName:"",
        passWord:"",
        config:{
                url: 'http://www.baidu.com',
                source:'', 
                title: 'hello',
                description: 'hi',
                image : '', 
                sites: [ 'qq','wechat','weibo'],  
                wechatQrcodeHelper  : ''
                },
    
        }
      
        
    },
    methods:{
        index(){
            this.$router.push("/both")
        },
        res(){
            this.$router.push("/register")
        },

        btn(){
           
            
            axios({
                    method:"get",
                    url:"http://47.95.218.254/login",
                    params:{password:this.passWord,username:this.userName}
                }).then((data)=>{
                    var data = data.data                   
                    if(data.status==1){
                    localStorage.setItem("Token",data.token)
                    Toast("登录成功")
                    this.$router.push("/index")                   
                    }else{
                        Toast("用户名或者密码错误")
                    }
                   
                })
        },
        names(){
            if(/^[A-Za-z][a-zA-Z]{0,15}$/.test(this.userName)){
            
            }else{
                Toast("用户名格式错误,请重新输入")
            }
        }
        
    },


            
 
   
}
</script>
<style scoped>

    #box{
        height:100%;
        display:flex;
        flex-direction: column;
        background:#f2f2f2;

    }
    /* 外层box 结束 */
    header{
            height:10%;
            width:100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
    }
    header img{
        width:20%;
        height:45px;
        border-radius:50px;
        display: inline-block;

    }
    header #logins:hover{
        background: #ffb64b
    }
    header #registers:hover{
          background: #ffb64b
    }
    #logins{
        width:25%;
        height:45px;
        background: #e8e7e7;
        line-height: 100%;
       
    }
    #registers{
        width:25%;
        height:45px;
        background: #e8e7e7;
        line-height: 100%;

    }

    #content{
            flex:1;
            
            display:flex;
            flex-direction:column-reverse
           

    }
    #content1{
            width:100%;
            background:#fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            height:300px;
 
    }
    #text1{
            width:90%;
            height:20%;
            border-bottom:1px solid #f2f2f2;
            text-align: center;
            display:flex;
            align-items: center;
            margin-bottom:10px

    }
    #text1 input{
            border:0;
            outline:none;
            font-size:30px
    }
    #text2{
            width:90%;
            height:20%;
            border-bottom:1px solid #f2f2f2;
            text-align: center;
            display:flex;
            align-items: center; 
    }
    #text2 input{
            border:0;
            outline:none;
            font-size:30px;
            
    }
    #text3{
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
        width:35%;
        padding-left:65%;
        margin-top:10% 
    }
    footer{
            height:10%;
            width:100%;

    }
    footer #btn{
            height:100%;
            width:100%;    
            background: #ffb64b
    }   
    
</style>
