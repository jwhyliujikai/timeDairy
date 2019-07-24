<template>
  <div id="inner">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">

       <div v-if='!list.length==0'>
      <div id="bkelist" v-for="item in list" >
         <div id="title">
           <div id="img">
             <van-icon name="checked" color="gold" size="16px" id="icon"/>
             <img src='https://i01piccdn.sogoucdn.com/3c28af542f2d49f7-9e7c5d699eaea93e-3a622e31d8dc4bf8450d5c67ced7c076_qq' >
           </div>
           
           <p>{{item.userName}}</p>
           <p>{{item.dynTime}}   {{item.userBabyDyn}}</p>
         </div>
         <div id="content">
           <p>{{item.userDyn}}</p>
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
      <div v-else>
        还未关注任何人哦
      </div>
      </van-pull-refresh>
  </div>
</template>       

<script>
import axios from 'axios';
import { Skeleton } from 'vant';
export default {
  name: 'Attentioninfos',
  data(){
     return {
       list:[],
       isLoading:false
     }
  },
  methods: {
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
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
         axios({
            url:"http://10.8.157.61/attList",
            params:{userId:localStorage.getItem('Token')}
          }).then((data)=>{
            this.list=data.data;
      
          })
            }, 500);
      }
  },
  mounted(){
    axios({
      url:"http://10.8.157.61/attList",
      params:{userId:localStorage.getItem('Token')}
    }).then((data)=>{
      this.list=data.data;
  
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{margin: 0;
padding:0;
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
#inner{
  margin-top: 46px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 margin-bottom: 46px;
}
#bkelist{
  width: 100%;
  background: rgb(248,248,248);
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

  top:10px;
  left: 90px;
  height: 30px;
  line-height: 30px;

}
#title p:nth-of-type(2){
  width: 200px;
  top:50px;
  left: 90px;
  height: 20px;
  font-size: 12px;
  color: #666;
  line-height: 20px;
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
