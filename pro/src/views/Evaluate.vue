<template>
    <div id="evaluate">
        <div id="header">
            <van-nav-bar
            title="评论"
            left-arrow
            @click-left="onClickLeft"
            fixed
            :z-index="1000"
            />
        </div>
        <div id="star">
            <div id="star-top">
                <span>评分</span>
                <p><van-rate v-model="value" disabled  size="14px"/></p>
                <span>99.0%好评</span>
            </div>
            <div id="star-body">
                <ul @click="tap($event)">
                    <li>全部（999+）</li>
                    <li>有图(1234)</li>
                    <li>追评(1223)</li>
                    <li>有效实用(127)</li>
                    <li>手感好(2434)</li>
                    <li>售后好(2342)</li>
                    <li class="animated fadeOut ">差评(1)</li>
                </ul>
                
                <p>
                    <span id="wmore">更多</span>
                    <span  >  <van-icon name="arrow-down" @click='anim()' id='more'/></span>
                  
                </p>
            </div>
          
        </div>
        <div id="evaluatelist">
            <div id="listinfos" v-for="item in list" >
                <div id="userinfos">
                   <div id="img">
                     <span id="icon"><van-icon name="checked" color="orange" /></span> 
                      <img :src="item.headImg" alt="">
                    </div>
                   <p>
                       <span>{{item.username}}</span>
                       <span><van-rate v-model="value" disabled  size="12px"/></span>
                    </p>
                    <p>{{item.appTime}}</p>
                    
                </div>
                <div id="arguinfos">
                    <p>{{item.appDesc}}  </p>
                    <img :src="item.appImg" alt="">
                </div>
                <div id="repinfos">
                    小编回复:感谢光临，您的满意是我们最大的追求
                    感谢光临，您的满意是我们最大的追求
                    感谢光临，您的满意是我们最大的追求
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'n-zepto';
import axios from 'axios';
export default {
    name:"Evaluate",
    data(){
        return {
            value:4,
            flag:false,
            list:[]
        }
    },
    methods:{
        tap(e){
            var el=e.target;
            if(el.nodeName.toLowerCase()=='li'){
                $(el).css({'background':"rgb(212,212,212)"}).siblings().css({'background':'#fff'})
            }
            

        },
        onClickLeft(){
            this.$router.go(-1);
        },
        anim(){
           if(!this.flag){
                $("#more").attr({'class':'van-icon van-icon-arrow-up'});
                $("#wmore").attr({'class':'animated fadeOut'});
                $("#star-body ul").css({"height":'80px'}).find("li:nth-of-type(7)").attr({'class':'animated fadeIn'})
                this.flag=true;
           }else{
                $("#more").attr({'class':'van-icon van-icon-arrow-down'});
                 $("#wmore").attr({'class':'animated fadeIn'});
                $("#star-body ul").css({"height":'70px'}).find("li:nth-of-type(7)").attr({'class':'animated fadeOut'})
                this.flag=false;
           }  
        }
    },
    mounted(){
        axios('http://47.95.218.254/getAppGoods').then((data)=>{
            // console.log(data.data);
            this.list=data.data;
        })
    }
}
</script>
<style scoped>
#evaluate{
    width: 100%;
    height: 500px;

}
#star{
    width: 94%;
    margin: 0 auto;

    height: auto;
    margin-top: 46px;
}
#star-top{
    width: 100%;
    height: 30px;

    line-height: 30px;
}
#star-top span{
    float: left;
    padding: 0 10px;
}
#star-top p{
    float: left;

}
#star-body{
    width: 100%;
    height: auto;

    position: relative;
}
#star-body ul{
    width: 100%;
    height: 70px;

}
#star-body ul li{
    float: left;
    width: 28%;
    border:1px solid #cecece;
    margin: 5px 5px 0 5px;
}
#star-body ul li:nth-of-type(1){
    background: rgb(212,212,212)
}
#star-body p{
    width: 100%;
    height: 20px;
    /* background: red; */
    text-align: center;
    position: absolute;
    left: 0;
    bottom: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}
#star-body p span{
    float: left;
}
#star-body p span:nth-of-type(2){
    /* background: red; */
    width: 20px;
    height: 20px;
    line-height: 20px;
}
#evaluatelist{
    width: 100%;
    margin: 0 auto;
    height: auto;
    overflow: auto;

}
#listinfos{
    width: 90%;
    border-top:1px solid #cecece;
    padding: 20px 5%;

}
#userinfos{
    width: 100%;
    height: 50px;

}
#userinfos img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    float: left;
}
#userinfos #img{
    float: left;
    height: 50px;
    width: 50px;
    position: relative;
}
#userinfos #icon{
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;
}
#userinfos p:nth-of-type(1){
    width: 100%;
    height: 25px;
    line-height: 25px;

    font-size: 14px;
}

#userinfos p:nth-of-type(1) span{
    float: left;
}
#userinfos p:nth-of-type(1) span:nth-of-type(1){
    margin-right: 30px;
    margin-left: 10px;

}
#userinfos p:nth-of-type(2){
    width: 80%;
    height: 25px;
    line-height: 25px;

    padding-left: 20%;
    font-size: 12px;
}
#arguinfos{
    width: 100%;
    height: auto;

}
#arguinfos p{
    width: 100%;
    height: auto;
    line-height: 20px;
    overflow: hidden;
}
#arguinfos img{
    margin:4px 0; 
    border:1px solid #cecece;
}
#repinfos{
    width: 99%;
    height: auto;
    line-height: 200x;

    border:1px solid #cecece;
}

</style>
