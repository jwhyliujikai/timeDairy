<template>
    <div>
        <div id="top">

        </div>
        <div id='comlist'>
            <ul>
                <li v-for="item in typelist" @click="tap($event,item.comTypeId)"> 
                    <img src="https://i01piccdn.sogoucdn.com/3c28af542f2d49f7-9e7c5d699eaea93e-3a622e31d8dc4bf8450d5c67ced7c076_qq" alt="">
                    <p>{{item.comName}}</p>
                </li>
            </ul>
        </div>
       <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div id="comlistinfo">
            <div id="bkelist" v-for="item in list">
                <div id="title">
                    <div id="img">
                        <van-icon name="vip-card" color="gold" size="16px" id="icon"/>
                        <img :src='item.headImg' >
                        </div>
                
                <p>{{item.userName}}</p>
                <p><span>3秒前宝宝2岁</span> <span @click="gz($event,item.userId)">+关注</span></p>
                </div>
                <div id="content">
                <p>{{item.communityDesc}}</p>
                <span @click="sah($event)">全部</span>
                </div>
                <div id="pic">
                <img src='https://i01piccdn.sogoucdn.com/c0d5ead4fd91d44e'/>
                </div>
                <div id="fpz">
                <ul>
                    <li>分享</li>
                    <li>评论</li>
                    <li><van-icon name="like-o" />9999</li>
                </ul>
                </div>
            </div>
        </div>
     </van-pull-refresh >
        <div id="uptoload" @click="slideout"> 
            +
        </div>
        <div id="babyinfos">
            <ul>
                <li id="zp">照片视频</li>
                <li id="cj">成就</li>
                <li id='sg'>身高体重</li>
            </ul>
        </div>
    </div>
</template>
<script>
import {Toast} from 'vant';
import axios from 'axios'
export default {
    name:"Community",
    data(){
        return {
            title:'社区',//页面标题
            list:[],//用户动态列表
            typelist:[],//用户动态类型列表
            flag:false,//控制右下角动画的标识
            isLoading:false,
        }
    },
    methods:{
        //关注用户
        gz(e,a){
            var el=e.target;
            if(!localStorage.getItem('token')){
                Toast('请先登录');
            }else{
                if($(el).html()=='取消关注'){
                    Toast('已取消关注')
                    $(el).html('+关注');
                }else{ 
                    Toast('已关注')
                    $(el).html('取消关注');

                }
            }
            
            
           
        },
        //点击全字显示全部
        sah(e){
            var el=e.target;
            if($(el).html()=='全部'){
                $(el).parent().find("p").css({"-webkit-line-clamp": "10"});
                $(el).html("收起");
            }else{
                $(el).parent().find("p").css({"-webkit-line-clamp": "3"});
                $(el).html("全部");
            }

        },
        //分类查询的数据调用
        tap(e,a){
            //控制当前点击的样式
            var el=e.target;
            $(el).css({"opacity":"1"}).parent().siblings().find('img').css({'opacity':'0.7'})
            
            //调用相应的接口的数据
            axios({
                url:"http://10.8.157.61/getCommunityByType",
                params:{comTypeId:a}
            }).then((data)=>{
                this.list=data.data;
                $("#title p:nth-of-type(2) span:nth-of-type(2)").html('+关注');
            })

        },
        //控制右下角的动画
        slideout(){
            if(!this.flag){
                $('#zp').css({"right":"60px"});
                $("#cj").css({"bottom":'50px',"right":'50px'})
                $("#sg").css({"bottom":'60px'});
                this.flag=true;
            }else{
                $('#zp').css({"right":"0"});
                  $("#cj").css({"bottom":'5px',"right":'5px'})
                $("#sg").css({"bottom":'0'});
                this.flag=false;
            }
        },
        //下拉刷新
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
                //下拉刷新数据请求
               axios({
                    url:"http://10.8.157.61/getCommunityByType",
                    params:{comTypeId:1}
                }).then((data)=>{
                this.list=data.data;
                 $("#title p:nth-of-type(2) span:nth-of-type(2)").html('+关注');
                })
            }, 500);
        }
    },
    mounted(){
        this.$emit("titleText",this.title);
        //默认展示的用户社区数据
          axios({
            url:"http://10.8.157.61/getCommunityByType",
            params:{comTypeId:1}
        }).then((data)=>{
           this.list=data.data;
           $("#title p:nth-of-type(2) span:nth-of-type(2)").html('+关注');
           
        })
        //获取社区信息类型
        axios('http://10.8.157.61/comTypeList').then((data)=>{
            this.typelist=data.data;
            
        })
    }
}
</script>
<style scoped>
#babyinfos{
    position: fixed;
    width: 40px;
    height: 40px;
    right:25px;
    bottom: 40px;
}
#cj{
    line-height: 35px;
}
#babyinfos li{
    width: 35px;
    height: 35px;
  
    text-align: center;
    border-radius: 50%;
    position: absolute;
    background:#fff;
    transition: all 1s;
}
#uptoload{
    z-index: 2;
    position: fixed;
    width: 55px;
    height: 55px;
    background: #fff;
    border-radius: 50%;
    right:20px;
    bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    line-height: 55px;
     /* display: none; */

}
 #top{

     width: 100%;
     height: 120px;
     background: rgb(234,234,234)
 }
 #comlist{
     width: 100%;
     height: 40px;
     z-index:2;
     position: relative;
 }
 #comlist ul{
     width: 100%;
     display: flex;
     justify-content: space-around;
     align-items:center;
     height: 80px;
     position: absolute;
   
     top: -30px;
     left: 0;
 }
 #comlist ul li{
     width: 15%;
     height:80px;
     /* background: red; */
     float: left;
     /* opacity: 0.7; */
     text-align: center;
 }
 #comlist ul li img{
     width: 100%;
     opacity: 0.7;
     border-radius:50%;
     
 }
 #comlist ul li:nth-of-type(1) img{
     opacity: 1;
 }
 #bkelist{
  width: 100%;
  background: rgb(234,234,234);
  height: auto;
  margin-top: 5px;
  margin-bottom: 10px;
}
#title{
  width: 90%;
  height: 80px;

  padding: 0 5%;
  position: relative;
}
#title p{

  position: absolute;
}
#title p:nth-of-type(1){
  width: 150px;
  line-height: 30px;
  top:10px;
  left: 90px;
  height: 30px;

}
#title p:nth-of-type(2){
  width: 64%;

  line-height: 20px;
  top:50px;
  left: 90px;
  height: 20px;
  font-size: 12px;
  color: #666;
}
#title p:nth-of-type(2) span:nth-of-type(1){
    float: left;
}
#title p:nth-of-type(2) span:nth-of-type(2){
    float: right;
}
#img{
    width: 60px;
    height: 60px;position: absolute;
    top: 0px;
  left: 20px;
  margin-top: 10px;
} 
#icon{
    position: absolute;
    bottom: 0;
    right:0;
}
#title img{
  width: 60px;
  height: 60px;
  
  
 
  border-radius: 50%
}
#content{
  width: 100%;
  height: auto;

  overflow: hidden;
}
#content p{
  margin: 0 auto;
  width: 90%;
  height: auto;
  font-size: 14px;
  margin-top: 10px;
  overflow: hidden;
line-height: 20px;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
}
#content span{
  display: block;
  width: 50px;
  height: 20px;
  font-size: 12px;
  margin-left:5%; 
  text-decoration: underline;
}
#pic{
  width: 90%;
  height: 150px;
  padding: 0 5%;
}
#pic img{
  width: 90%;
  height: 100%;
  margin: 0 auto;
  border:0px;
  display: block
}
#fpz{
  width: 90%;
  height: 40px;

  padding: 0 5%;
}
#fpz li{
  list-style: none;
  font-size: 14px;
  float: left;
  width: 33%;
  color:#666;
  margin-top: 10px;
  text-align: center;
}
</style>
