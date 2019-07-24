<template>
    <div style="position:relative">
       <van-icon name="arrow-left" size="30" style="position:absolute;z-index:100" @click=" onClickLeft()"/>
        <div style="height:45vw;width:100%;background:orange;position:absolute"></div>
        <div style="position:absolute;top:20vw;display:flex;left:5vw">
             <div style="height:40vw;width:90vw;background:#eee;border-radius:5vw">
                 <div style="margin-top:10vh;display:flex;justify-content:space-between;align-items: center">
                    <van-button round type="danger" style="background:none;color:#666;border:0.5vw solid orange">取消订单</van-button>
                     <van-button round type="danger" style="background:none;color:#666;border:0.5vw solid orange" >联系配送员</van-button>
                    <van-button round type="danger" style="background:none;color:#666;border:0.5vw solid orange">催单</van-button>
                 </div>
             </div>
        </div>
        
       <div style="height:26vw;width:26vw;background:#fff;position:absolute;border-radius:26vw;top:8vw;left:37vw;border:0.5vw solid orange"></div>
    <!--占位-->
    <v-send style="padding-top:40vh;">
    	<div :slot="sendC" style="height:86vw;width:90vw;background:#eee;position:absolute;border-radius:6vw;top:70vw;left:5vw">
            <van-cell value="商品信息" style="background:none"/>
            <!--<div style="display:flex;justify-content:space-around;align-items: center">-->
            <van-image
            	v-for="item in list"
                width="100"
                height="100"
                :src="item.goodsImg"
                />
            <!--</div>-->
            
                 <van-cell title="商品总价" value="77" style="margin-top:2vh;background:none;" />
                 <van-cell title="配送费" value="10元" style="background:none;"/>
                 <van-cell title="运费险" value="无" style="background:none;"/>
                <div style="margin-left:60vw;font-size:4vw">
                    <span>总计&nbsp;&nbsp;&nbsp;&nbsp;</span><span>￥ 777</span>
                </div>       
       </div>
       <div style="height:20vw;width:90vw;background:#eee;position:absolute;border-radius:6vw;top:160vw;left:5vw">
           <van-cell value="订单信息" style="background:none;"/>
           <van-cell value="订单号：1924948484" style="background:none;"/>
       	</div>
     </v-send>
    </div>
</template>

<script>
import axios from 'axios'
import ZhanC from "../components/zhanweiC"
var token=localStorage.getItem("Token") 
export default {
	components:{
		"v-send":ZhanC
	},
	data(){
		return{
			list:[],
			sendC:""
		}
	},
methods: {
    onClickLeft() {
       this.$router.go(-1)
    }
  
},
mounted(){
	axios({
		     url:"http://10.8.157.61/myOrder",
		     params:{userId:2}
		      	})
		      	.then((data)=>{
		      	data.data.map((val,index)=>{
		      		if(val.status==1){
		      		this.list.push(val)
		      		}
		      		if(val.status!=1){
		      			this.sendC="send"
		      		}
		      	})
		      	console.log(this.list)
		       
		      	})
}
}
</script>

<style>
 
</style>
