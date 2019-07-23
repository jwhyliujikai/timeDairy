<template>
    <div id="box">
        <header>
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" @click="index">
            <van-button type="default" round size="large" id="logins" @click="login">登录</van-button>
            <van-button type="default" round size="large" id="registers">注册</van-button>
        </header>

        <div id="content">
            <div id="text1">
                <van-icon name="contact" size="30px"/>
                <input type="text" placeholder="用户名 字母1-16位" v-model="username" @blur="username1">
            </div>
           
            <div id="text2">
                <van-icon name="bag-o" size="30px"/>
                <input type="password" placeholder="密码" v-model="password">
            </div>
            <div id="text3">
                <van-icon name="envelop-o" size="30px"/>
                <input type="text" placeholder="邮箱" v-model="email" @blur="email1">
            </div>
            <div id="text4">
                <van-icon name="upgrade" size="30px"/>
                <input type="text" placeholder="电话" v-model="phone" @blur="phone1">
            </div>
        </div>
        <footer>
            <van-button type="default" size="large" id="btn" @click="btn()">注册</van-button>
        </footer>
       
    </div>
</template>
<script>
import axios from 'axios';
import { Toast } from 'vant';

export default {
    
   data(){
       return{
          username:"",
          password:"",
          email:"",
          phone:"",
       }
       
   },
    methods:{
        index(){
            this.$router.push("/both")
        },
        login(){
            this.$router.push("/login")
        },
        btn(){
            if(this.username&&this.password&&this.email&&this.phone){
                    axios({
                    method:"get",
                    url:"http://10.8.157.61//insertUser",
                    params:{username:this.username,password:this.password,email:this.email,phone:this.phone}
                }).then((data)=>{
                    
                    if(data.data=="success"){
                    Toast("注册成功")
                    this.$router.push("/login")
                    
             
                    }
                
                })
            }else{
                Toast("请完善注册信息")
            }
           

        },
        phone1(){
            // if(!this.phone) return
            if(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone)){
                
                //console.log(this.phone)
            }else{
                Toast("电话号码输入有误")
            }
        },
        email1(){
            
            if(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email)){
                
                
            }else{
                
                Toast("邮箱输入有误")
            }
        },
        username1(){
       
                if(/^[A-Za-z][a-zA-Z0-9]{0,15}$/.test(this.username)){
                }else{
                    Toast("输入有误请重新输入")
                    
                }
  
        },

       
    },
 
    
   

}
</script>
<style scoped>
    #box{
        height:100%;
        width:100%;
        display: flex;
        flex-direction: column;
        background:#f2f2f2;
     

    }
    /* 外层box 结束 */
    header{
            height:50%;
            width:100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            

    }
    header img{
        width:20%;
        height:15%;
        border-radius:50px;
        display: inline-block;

    }
    #logins{
        width:25%;
        height:15%;
        background: #e8e7e7;
        text-align: center;
        line-height:100%
       
    }
    #registers{
        width:25%;
        height:15%;
        background: #e8e7e7;
        line-height:100%
    }

    #content{
            height:50%;
            width:100%;
            background:#fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        
            
    }
    #text1{
            width:90%;
            height:20%;
            border-bottom:1px solid #f2f2f2;
            text-align: center;
            display:flex;
            align-items: center;

    }
    #text1 input{
            border:0;
            outline:none;
            font-size:25px;
            margin-left:2%
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
            font-size:25px;
            margin-left:2%

    }
    #text3{
            width:90%;
            height:20%;
            border-bottom:1px solid #f2f2f2;
            text-align: center;
            display:flex;
            align-items: center;

    }
    #text3 input{
            border:0;
            outline:none;
            font-size:25px;
            margin-left:2%

    }
    #text4{
            width:90%;
            height:20%;
            border-bottom:1px solid #f2f2f2;
            text-align: center;
            display:flex;
            align-items: center;

    }
    #text4 input{
            border:0;
            outline:none;
            font-size:25px;
            margin-left:2%

    }
    footer{
            height:10%;
    }
    footer #btn{
            height:100%;
            width:100%;    
            background: #ffb64b
    }   
    
</style>
