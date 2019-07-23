<template>
    <div id="box">
        <header>
            <van-icon name="manager" size="200px"/>
            <span>Welcome</span>
            <p>哈喽，欢迎来到宝宝的世界</p>
        </header>
        <div id="content">
            <van-button type="default" plain size="large" id="logins" @click="login">登录</van-button>
            <van-button type="default" plain size="large" id="geters" @click="res">注册</van-button>
        </div>
        <footer>
            <a href="#">help?</a>
           
        </footer>
       
    </div>
</template>
<script>
export default {
    name:"Both",
    methods:{
        login(){
            this.$router.push("/login")
        },
        res(){
            this.$router.push("/register")
        }
    }
}
</script>
<style scoped>

    #box{
        display: flex;
        flex-direction: column;
        height: 100%;
        background:#fb901e;
        color:#fff;
      
        
    }
    header{
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height:50%;
        padding-top:30%
    }
    header span{
        display:inline-block;
        margin-top:10%;
        
    }
    header p{
        margin-top:5%
    }
    #content{
        height:30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top:10%;
    }
    #logins{
        width:80%;
        margin-bottom:10%;
        border-radius:20px
    
    }
    #geters{
        width:80%;
        border-radius:20px
    }
   footer{
       border-top:1px solid #faa54c;
       display: flex;
      
       flex-direction: row-reverse;
       align-items: center;
       height:20%;
   }
    footer a{
       font-size:16px;
       color:#fff
        
    }
</style>
