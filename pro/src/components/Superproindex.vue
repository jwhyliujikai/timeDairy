<template>
    <div>
       <div id="top">
           
       </div>
        <div id="body">
            <div id="qizhi">
                <img src="https://i02piccdn.sogoucdn.com/4bac4a0d583253d4">
            </div>
            <div id="yhq">
                <van-coupon-cell
                    :coupons="coupons"
                    :chosen-coupon="chosenCoupon"
                    @click="showList = true"
                    />

                    <!-- 优惠券列表 -->
                    <van-popup v-model="showList" position="bottom">
                    <van-coupon-list
                        :coupons="coupons"
                        :chosen-coupon="chosenCoupon"
                        :disabled-coupons="disabledCoupons"
                        @change="onChange"
                        @exchange="onExchange"
                    />
                    </van-popup>
            </div>
        </div>
        <div id="body1">
            <ul id="list1">
                <li v-for="item in typelist">
                    <router-link tag="img" :to='{name:"Qingjie",query:{id:item.goodsTypeId}}' src="https://img03.sogoucdn.com/app/a/100520093/35349af6a46cd42b-32bff7b7b57b5e88-7eae0ffb12bdd2710c73b52afde9666a.jpg" ></router-link>

                    <p>{{item.typeName}}</p>
                </li>
                 <li>
                    <router-link  tag='img' to='/more' src="https://img03.sogoucdn.com/app/a/100520093/35349af6a46cd42b-32bff7b7b57b5e88-7eae0ffb12bdd2710c73b52afde9666a.jpg" ></router-link>
                    <p>更多</p>
                </li>
            </ul>
            <div id="list2">
                <p>
                    <span>宝宝必备</span>
                    <router-link to='/bbbbei' tag="span">更多</router-link>
                </p>
                <ul>
                    <li v-for='item in list'>
                        <router-link tag="img" :to='{name:"Goodsdetailindex",query:{id:item.goodsId}}' :src="item.goodsImg" ></router-link>

                        <p>
                            <span>{{item.goodsName}}</span>
                            <span>会员价￥{{item.goodsPrice}}</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
      
    </div>
</template>
<script>
import axios from 'axios';
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
};
export default {
    name:"Superproindex",
    data(){
        return {
            title:'优品',
            list:[],
            typelist:[],
            chosenCoupon: -1,
            coupons: [coupon],
            disabledCoupons: [coupon],
            showList:false
        }
    },
    
   methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    }
  },
    mounted(){
        axios('http://10.8.157.61/goodsList').then((data)=>{
            this.list=data.data;
        })
        axios('http://10.8.157.61/typeList').then((data)=>{
            var arr=data.data;
            this.typelist=arr.splice(0,3);

        })
        this.$emit('titleText',this.title);
    }
}
</script>
<style scoped>
*{
    margin: 0 auto;
    padding: 0;
}
#top{
    width: 100%;
    height: 120px;
    background:rgb(234,234,234);
}
#body{
    margin: 0 auto;
    width: 90%;

    height: 130px;
    position: relative;
}
#qizhi{
    width: 100%;
    height: 150px;
    position: absolute;
    top: -75px;
    left: 0;
    border-radius:20px; 
}
#qizhi img{
    width: 100%;
    height: 100%;
      border-radius:20px; 
}
#yhq{
    width: 100%;
    height: 50px;
    position: absolute;
    top:80px;
    border-radius: 10px;
    margin-top: 20px;
}
#body1{
    width:90%;
    margin: 0 auto;
    height: auto;

    
}
#body1 #list1 {
    height:90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
#body1 #list1 li{
    width: 70px;
    float: left;
    height: 80%;

    display: flex;
    flex-direction: column;
    margin-top:10px; 
    
}
#body1 #list1 li img{
    width: 70%;
    height: 70%;
    margin: 0 auto;
    border-radius: 50%;
}
#body1 #list1 li p{
    font-size: 12px;
    color: #888;
    background: rgb(248,248,248);
    width: 60px;
    text-align: center
}
#list2{
    overflow: auto;
}
#list2>p{
    width: 100%;
    height: 30px;

    line-height: 30px;
    font-size: 14px;
    color: rgb(119,118,118)
}
#list2>p span:nth-of-type(1){
    float: left;
}
#list2>p span:nth-of-type(2){
    float: right;
}
#list2 ul{
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
#list2 li{
    width: 30%;
    height: 120px;

}
#list2 li img{
    width: 100%;
    height: 85px;

    border-radius: 10px;
    border:0;
    display: block

} 
#list2 li p{
    width: 100%;
    height: 35px;

    line-height: 16px;
    overflow: hidden;
    text-align: center
}
#list2 li p span{
    display: block;
    font-size: 12px;
    overflow: hidden;
    height:18px;
}
</style>

