
<template>
    <div>
    	<div style="height:50px;width:100vw;">
    		<van-nav-bar
            title="会员中心"
            left-text="返回"
            :fixed="true"
            left-arrow
            @click-left="onClickLeft"
            /> 
    	</div>
         
          <div style="height:250px;">
          	 <van-swipe :autoplay="3000" indicator-color="white" :height="200">
                    <van-swipe-item class="logo" v-for="item in list"><img style="height:30vh;width:100%" :src="item"></van-swipe-item>
                </van-swipe>
          </div>
               
                	<van-grid :column-num="3" style="margin-top:3vh;" :gutter="10">
				  <van-grid-item
				    icon="vip-card-o"
				    text="我的积分"
				  />
				  <van-grid-item
				    icon="label-o"
				    text="签到"
				  />
				  <van-grid-item
				    icon="gift-o"
				    text="我的奖品"
				  />
				</van-grid>
               
                <van-row style="margin-top:20px">
                    <van-col span="10" offset="8">时光会员  专享好货</van-col>
                </van-row>
               <van-grid :border="false" :column-num="2" gutter="40">
                    <van-grid-item>
                        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                        <p>时光记</p>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
                        <p>时光记</p>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
                        <p>时光记</p>
                    </van-grid-item>
                    <van-grid-item>
                        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
                        <p>时光记</p>
                    </van-grid-item>
                </van-grid>
        
    </div>
</template>

<script>
	import axios from 'axios'
export default {
data(){
	return{
		list:""
	}
},
  methods: {
    onClickLeft() {
       this.$router.go(-1)
    }
  },
  mounted() {
            axios({
            	method:"get",
            	//http://10.8.157.61/v2/api-docs 
                url:'http://10.8.157.61/bannerUrl',
                // data:{token:token}
            }).then((data)=>{
                //console.log(data.data.list.length)
                this.list =data.data 
                console.log(this.list)
            })
            
           
        },

}
</script>

<style>

*{margin:0;padding: 0}
</style>
