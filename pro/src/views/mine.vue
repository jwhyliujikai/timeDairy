<template style="">
<div>
<van-row style="height:33vh;background:orange;display: flex;justify-content: center;align-items: center;">
    <span style="position: absolute;top:5vh;right:5vw;" @click="setup()">
    	设置
    </span>
    <div style="display:flex;justify-content: center;align-items:center;flex-direction: column;">
    	<span>我的</span>
    	<div class="cir" style="display:block;height:100px;border-radius:50px;width:100px;background:#eee;margin:15px 0;text-align: center;line-height:100px;overflow: hidden;">
    		<img :src="this.nameimg" style="height:100px;width: 100px;overflow: hidden;"/>
    	

    	</div>
    	<span style="font-size:16px;display: block;">{{name}}</span>
    </div>
</van-row>
<van-row >
  <van-col span="10" offset="2" style="height:8vh;background:#ccc;margin-top:5px;text-align: center;line-height:4vh;" justify="20">
      <p>10</p>
      <p>关注</p>
  </van-col>
   <van-col span="10"  style="height:8vh;background:#ccc;margin-top:5px;text-align: center;line-height:4vh;">
       <p>99</p>
      <p>粉丝</p>
   </van-col>
</van-row>
<van-cell-group style="margin-top:24px;margin-left:20px">
  <van-cell title="会员中心" icon="circle" to="/center"/>
  <van-cell title="我的收藏" icon="circle" to="/myselect"/>
  <van-cell title="购物车" icon="circle" to="/cart"/>
  <van-cell title="我的订单" icon="circle" to="/order"/>
  <van-cell title="优惠券" icon="circle" to="/coupon"/>
</van-cell-group>
</div>

</van-swipe>
</template>
<script>
import axios from 'axios';
import {Toast} from "vant"

export default {
	data() {
    return {
    	name:"未登录",
      nameimg:"",
    }
 },
 mounted(){
  var token=localStorage.getItem("Token")
 	if(token){
        axios({
        url:"http://10.8.157.61/mymain",
        params:{userId:token}
      }).then((data)=>{
        console.log(data.data);
        this.name=data.data[0].username
        if(!data.data[0].headImg){
            this.nameimg=this.$store.state.commheadImg;
            console.log(this.nameimg);
        }else{
            this.nameimg=data.data[0].headImg
        }
      
      })
// 		Toast("请先登录")
 	}else{
 	
 	}
 	
 },
   methods:{
        setup(){
          this.$router.push("/setup")
       }
   },
}
</script>
<style scoped>
.cir{
    background:orange;
    z-index:1000
}
 p{
 	margin: 0;
 	padding:0;
 }   

</style>
