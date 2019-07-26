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
			            :num="item.goodsNum"
			            :price="item.goodsPrice"
			            :desc="item.goodsP"  
			            :title="item.goodsName"
			            :thumb="item.goodsImg" 
			            :key='index' 
			            id="kapian"
			        >
	            <div slot="footer" >
	            <van-stepper v-model="item.goodsNum" :disable-input='true' :step='step' @plus="jia(index,item.goodsId,item.goodsNum)" @minus="jian(index,item.goodsId,item.goodsNum)" />
	               <van-checkbox  v-model="item.check" class="checkBox"	@click="gou(item.check,index)" ></van-checkbox>
	               <button @click="del(item.goodsId,index)" style="background:orange;border:orange;">删除</button>
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
import axios from 'axios';
import {Toast} from "vant"
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
               	bu:"",
               	ul:'',
               	index1:[]	
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
            gou(danxuan,index){
                  console.log(this.list)
                  //单个商品的总价
                let p =parseFloat(this.list[index].goodsPrice)*parseFloat(this.list[index].goodsNum).toFixed(2)
                //checkbox索引
                let _index = index
               if(!danxuan){
                   //如果选中
                    this.sum +=p*100
                    this.index1.push(_index)
                    //选中的checkbox数组
                    //console.log(this.index1)
                    this.list[_index].danxuan = 'true'
                }else{
                	//取消选中执行操作
                    this.sum -=p*100
                    this.index1.splice(_index,1)
                    this.list[_index].danxuan = ''
                    console.log(this.index1)
                    //如果总价为0，取消全选
                    if(this.sum == 0){
                        this.checked = false
                    }
                }
                
                var indLength = this.index1.length
                var listLength = this.list.length
                 if(indLength == listLength){
                      this.checked = true
                 }else{
                     this.checked = false
                 }
                
            },
            all(){
            	if(!this.checked){
            		for(let val of this.list){
                     val.check= true;
                     this.sum += val.goodsPrice * val.goodsNum*100
                     console.log(val.check)
                    }
            	}else{
                    for(let val of this.list){  
                     val.check = false;
                     this.sum = 0
                    }
                    }
            },
            //点击加号
            jia(index,id,num){
            	var token=localStorage.getItem("Token") 
            	axios({
            		url:"http://47.95.218.254/addShop",
            		params:{goodsId:id,goodsNum:1,userId:token}
            	}).then((data)=>{
						if(this.list[index].check){
							this.sum += this.list[index].goodsPrice * 1*100
						}
            	})
            	
           },
           //点击减按钮
            jian(index,id,num){
            	var token=localStorage.getItem("Token") 
            	axios({
            		url:"http://47.95.218.254/addShop",
            		params:{goodsId:id,goodsNum:-1,userId:token}
            	}).then((data)=>{
			//判断当前复选框有没有选中
				if(this.list[index].check){
							this.sum -= this.list[index].goodsPrice * 1*100
					}
	
            	})
           },
           //点击删除按钮
           del(id,index){
           	var token=localStorage.getItem("Token") 
           	var num=-this.list[index].goodsNum-1
           	axios({
            		url:"http://47.95.218.254/addShop",
            		params:{goodsId:id,goodsNum:num,userId:token}
            	}).then((data)=>{
            		console.log(data)
            		  this.checked = false;
            		  this.sum=0
            		axios({
            			url:"http://47.95.218.254/shoptro",
            			params:{goodsId:id,goodsNum:num,userId:token}
            		}).then((data)=>{
            			this.list=data.data
            		})
            	})
           }
          
        },
        mounted() {
            var token=localStorage.getItem("Token") 
        	if(!token){
 		//Toast("请先登录")
 	}else{
            axios({
                url:'http://47.95.218.254/shoptro',
                params:{userId:token}
            }).then((data)=>{
                this.list =data.data
                if(this.list.length!=0){
                	 this.ul="cart"
                }
               
            }) }
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


</style>