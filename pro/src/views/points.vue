<template>
<div>
		<van-nav-bar 
		title="我的积分" 
		left-text="返回" 
		:fixed="true" 
		left-arrow 
		@click-left="onClickLeft" />
		<div style="margin-top:50px;">
			我的积分:<span >{{points}}</span>
		</div>
		
		
	</div>
</template>

<script>
import axios from 'axios'

export default{
	data(){
		return {
			points:""
		}
	},
	methods:{
	onClickLeft() {
       this.$router.go(-1)
   }
	},
	mounted(){
		var token=localStorage.getItem("Token") 
		if(token==null){
    	this.points=0
    	}else{
    		axios({
    		url:"http://47.95.218.254/integral",
    		params:{userId:token}
    	}).then((data)=>{
    		console.log(data)
    		this.points=data.data
    	})
    	}
		
	}
	
}
</script>

<style>
</style>