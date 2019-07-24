
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
         
          <div style="height:30vh;">
          	 <van-swipe :autoplay="3000" indicator-color="white" style="height:30vh;">
                    <van-swipe-item class="logo" v-for="(item,i) in list" :key="i"><img style="height:30vh;width:100%" :src="item"></van-swipe-item>
                </van-swipe>
          </div>
                	<van-grid :column-num="3" style="margin-top:3vh;" :gutter="10">
				  <van-grid-item
				    icon="vip-card-o"
				    to="/points"
				    text="我的积分"
				    id="pon"
				    style="color:orange;"
				  />
				  <van-grid-item
				    icon="label-o"
				    to="/sign"
				    text="签到"
				    style="color:orange;"
				  />
				  <van-grid-item
				    icon="gift-o"
				    text="我的奖品"
				    style="color:orange;"
				  />
				</van-grid>
                <van-row style="margin-top:20px">
                    <van-col span="10" offset="8">时光会员  专享好货</van-col>
                </van-row>
               <van-grid :border="false" :column-num="2" >
                    <van-grid-item v-for="item in list1" >
                        <router-link tag="img" :to='{name:"Goodsdetailindex",query:{id:item.goodsId}}' :src="item.goodsImg" style="height:25vh;width:40vw"/>
                        <router-link tag="p" :to='{name:"Goodsdetailindex",query:{id:item.goodsId}}'>{{item.goodsName}}</router-link>
                    </van-grid-item>
                </van-grid>
                
        
    </div>
</template>

<script>
	import axios from 'axios'
export default {
data(){
	return{
		list:"",
		list1:""
	}
},
  methods: {
    onClickLeft() {
       this.$router.go(-1)
    },
    tap(){
    	var pon =document.querySelectorAll("van-icon-vip-card-o")[0]
    	pon.style.color="orange"
    }
  },
  mounted() {
            axios({
            	method:"get",
                url:'http://10.8.157.61/bannerUrl',
            }).then((data)=>{
                this.list =data.data 
            })
            axios({
            	method:"get",
                url:'http://10.8.157.61/goodsList',
            }).then((data)=>{
                this.list1 =data.data 
            })
           
        },

}
</script>

<style>

*{margin:0;padding: 0}
</style>
