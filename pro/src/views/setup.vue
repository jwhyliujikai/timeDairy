<template>
	<div>
		<van-nav-bar
            title="设置"
            left-arrow
            @click-left="onClickLeft"
            />
            <van-cell-group>
  			<van-cell title="退出" @click="tap()" />
</van-cell-group>
	</div>
	
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			onClickLeft(){
		       this.$router.go(-1)
		   },
		   tap(){
		   	console.log("aaa")
		   }
		}
	}
</script>

<style>
</style>