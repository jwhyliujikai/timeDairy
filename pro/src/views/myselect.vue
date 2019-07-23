<template>
	<div id="out">
		 <van-nav-bar
            title="我的收藏"
            :fixed= 'true'
            left-arrow
            @click-left="onClickLeft"
            
        />
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" style="height:100vh;" >
			<van-grid :border="false" :column-num="2" style="margin-top:70px;">
				<van-grid-item v-for="item in list">
					<img :src="item.imgUrl" style='height:200px;width:160px'/>
					<div style="height:100px;width:160px;background:rgba(0,0,0,0.1);position: absolute;bottom:0;border-top:1px solid #000;">
						<p>{{item.cycDesc}}</p>
						<van-icon name="like" style='position:absolute;right:10px;' color="red" size="30"/>
					</div>
					<!--<p>{{item.recipeName}}</p>-->
				</van-grid-item>
			</van-grid>
		</van-pull-refresh>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data(){
			return {
				  isLoading: false,
				  list:"",
				  duration:1000
			}
		},
		mounted(){
			axios({
		      		url:"http://10.8.157.61/mycollection",
		      		params:{userId:3}
		      	})
		      	.then((data)=>{
		      	
		      	this.list=data.data
		      	console.log(this.list)
		       
		      	})
		},
		 methods: {
            onClickLeft(){
                this.$router.go(-1)
            },
             onRefresh() {
		      	axios({
		      		url:"http://10.8.157.61/mycollection",
		      		params:{userId:3}
		      	})
		      	.then((data)=>{
		      	this.list=data.data
		      	console.log(this.list)
		      	this.$toast('刷新成功');
		        this.isLoading = false;
		      	})
		    }
		 }
	}
</script>

<style scoped>
	img{
		display: block;
		border:none;
	}
</style>