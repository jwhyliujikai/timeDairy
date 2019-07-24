<template>
	<div>
		<van-nav-bar 
		title="签到" 
		left-text="返回" 
		:fixed="true" 
		left-arrow 
		@click-left="onClickLeft" />
		<div style="margin-top:50px;">
			<van-button icon="star-o" type="primary" @click="tap()">签到</van-button>
		
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
    	this.$toast('签到成功');
    	var _this=this
    	axios({
    		url:"http://10.8.157.61/sign",
    		params:{userId:22}
    	}).then((data)=>{
    		console.log(data.data)
    		var code=data.data
    		if(code==0){
    			_this.$toast('今天已经签到了');
    			var date = new Date();
				var min = date.getMinutes()
				var hour = date.getHours()
				var min = date.getMinutes()
				var ms = date.getSeconds()
				//var time = hour + ':' + min + ':' + ms
				if(hour==0&&min==0&&ms==0){
				axios({
	    		url:"http://10.8.157.61/updatesign",
				params: {
				userId: 22
				}
				})
				}
    		}
    		if(code==1){
    			_this.$toast('签到成功');
    		}
    	})
    	
    }
  },

}</script>

<style>
</style>