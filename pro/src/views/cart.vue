<template>
    <div>
         <van-nav-bar
            title="购物车"
            :fixed= 'true'
            left-arrow
            @click-left="onClickLeft"
            
        />
        <div id="cartpay" style="margin-top:50px;">
       		<v-cart>
       			<div class="cartpay" :slot="ul">
			        <van-card
			            v-for="(item,index) in list"
			            :num="item.num"
			            :price="item.price"
			            :desc="item.pdesc"  
			            :title="item.ptitle"
			            :thumb="item.pimg" 
			            :key='index'     
			        >
	            <div slot="footer" >
	            <van-stepper v-model="item.num" :disable-input='true' :step='step' plus="jia()" minus="jian"/>
	               <van-checkbox  v-model="item.check" class="checkBox" ></van-checkbox>
	            </div>
	        </van-card>
	       
	       </div>
       		</v-cart>
	        
            <van-submit-bar
            :price="sum"
            button-text="提交订单"
            @submit="onSubmit"
            >
            <van-checkbox v-model="checked" @click="all()">全选</van-checkbox>
            </van-submit-bar>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Zhan from "../components/zhanwei"
export default {
	components:{
		"v-cart":Zhan
	},
        data(){
            return{
                list:[],
                value:1,
                checked:false,
                step:1,
                sum : 0,
                pri:[],
               	bu:"",
               	ul:''
            }
        },
        methods: {
            onClickLeft(){
                this.$router.go(-1)
            },
            onClickIcon(){

            },
            onSubmit(){
            	if(this.sum == 0){
                    //alert('请选择购买的商品')
                    this.$toast('不好意思，您未购选商品，请选择商品重新购买');
                }
            },
            all(){
            	if(!this.checked){
            		for(let val of this.list){
                     val.check= true;
                    }
            	}else{
                    for(let val of this.list){  
                     val.check = false;
                     this.sum = 0
                    }
                    }
            },
            jia(){
            	
            }
        },
        mounted() {
            axios({
                url:'http://www.baidu.com/api',
                // data:{token:token}
            }).then((data)=>{
                this.list =data.data.list 
                this.ul="cart"
            }) 
        },
}   
</script>
<style>
.cartpay{
    margin:46px 0 120px 0;
}
.check{
    position: absolute;
    left: 30px;
    bottom:0;
}

/*input[type='checkbox']{
    width: 16px;
    height: 16px;
    background-color: #fff;
    -webkit-appearance:none;
    border: 1px solid #c9c9c9;
    border-radius: 2px;
    outline: none;
}*/
 
.checkbox input[type=checkbox]:checked{
   background: url("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=964899143,2534335338&fm=15&gp=0.jpg") 0 0/16px 16px no-repeat;

}
</style>