<template>
	<div>
		<van-nav-bar 
		title="签到" 
		left-text="返回" 
		:fixed="true" 
		left-arrow 
		@click-left="onClickLeft" />
		<div style="margin-top:50px;">
			<van-button icon="star-o" style="color:orange;" @click="tap()">签到</van-button>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import { Dialog } from 'vant';

export default{
	data(){
		return{
			
		}
	},
	methods: {
    onClickLeft() {
       this.$router.go(-1)
    },
    tap(){
    	var token=localStorage.getItem("Token");
    	if(token==null){
    	this.$toast('请先登录哦')
    	}else{
    		var _this=this 
    	axios({
    		url:"http://47.95.218.254/sign",
    		params:{userId:token}
    	}).then((data)=>{
    		console.log(data.data)
    		var code=data.data
    		if(code==0){
    			_this.$toast('今天已经签到了');}
    		if(code==1){
    			_this.$toast('签到成功');
    		}	
    	})
    	}
    }
  },
  mounted(){
  	var token=localStorage.getItem("Token");
    			var date = new Date();
				var hour = date.getHours()
				var min = date.getMinutes()
				var ms = date.getSeconds()
				console.log(hour,min,ms)
				//var time = hour + ':' + min + ':' + ms
				if(hour==8&&min==0&&ms==0){
				axios({
	    		url:"http://47.95.218.254/updatesign",
				params: {
				userId: token
				}
				})
				}
  }

}</script>

<style>
</style>