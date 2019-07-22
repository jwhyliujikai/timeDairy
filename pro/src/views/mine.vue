<template style="">
<div>
<van-row style="height:33vh;background:orange;display: flex;justify-content: center;align-items: center;">
    <span style="position: absolute;top:5vh;right:5vw;" @click="setup()">
    	设置
    </span>
    <div style="display:flex;justify-content: center;align-items:center;flex-direction: column;">
    	<span>我的</span>
    	<div class="cir" style="display:block;height:100px;border-radius:50px;width:100px;background:#eee;margin:15px 0;text-align: center;line-height:100px;overflow: hidden;">
    		<van-uploader
    		preview-size="100"	
  v-model="fileList"
  multiple
  :max-count="1"
/>
    	</div>
    	<span style="font-size:16px;display: block;">生活达人</span>
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
  <van-cell title="会员中心" icon="circle" @click="tap()"/>
  <van-cell title="我的收藏" icon="circle" @click="tap1()"/>
  <van-cell title="购物车" icon="circle" @click="tap2()"/>
  <van-cell title="我的订单" icon="circle" @click="tap3()"/>
  <van-cell title="优惠券" icon="circle" @click="tap4()"/>
</van-cell-group>
</div>


</van-swipe>
</template>
<script>
export default {
	data() {
    return {
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/cat.jpeg' }
      ]
    }
 },
   methods: {
       tap(){
           this.$router.push("/center")
       },
        tap1(){
           this.$router.push("/myselect")
       },
        tap2(){
           this.$router.push("/cart")
       },
        tap3(){
           this.$router.push("/order")
       },
        tap4(){
           this.$router.push("/coupon")
       },
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
