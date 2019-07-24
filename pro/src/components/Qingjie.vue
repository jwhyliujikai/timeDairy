<template>
  <div id='qingjie' >
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <ul id="list1">
      <li v-for="item in list">
        <router-link :to='{name:"Goodsdetailindex",query:{id:item.goodsId}}' tag='img' :src='item.goodsImg'></router-link>
        <p>
           <router-link :to='{name:"Goodsdetailindex",query:{id:item.goodsId}}' tag='span'>{{item.goodsName}}</router-link>
          <router-link :to='{name:"Goodsdetailindex",query:{id:item.goodsId}}' tag='span'>会员价￥{{item.goodsPrice}}</router-link>
          
        </p>
      </li>
    </ul>
    </van-pull-refresh>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Qingjie',
  data(){
    return{
      title:'',//标题
      list:[],//商品列表
      isLoading:false
    }
  },
   methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
         axios('http://nj9jzc.natappfree.cc/prolist').then((data)=>{
            this.list=data.data.list;
        })
      }, 500);
    }
  },
  mounted(){
  
    var id=this.$route.query.id;
    if(id=="1"){
      this.title='喂养'
    }else if(id=="2"){
      this.title="清洁"
    } else if(id=="3"){
      this.title="童装"
    }else{
      this.title="更多"
    } 
    this.$emit("titleText",this.title);
    axios({
        url:'http://10.8.157.61/getGoodsByType',
        params:{
          goodsTypeId:id,
          num:4
        }
      }).then((data)=>{
            // this.list=data.data.list;
            this.list=data.data
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #qingjie{
    margin: 0 auto;
    margin-top: 46px;
    height: auto;

    width:90%;
  }
  #list1{
    width: 100%;
    display: flex;
    height: auto;
    flex-wrap: wrap;
    justify-content:space-between;
    align-items: center;
    margin-bottom: 20px;
   
  }
  #list1 li{
    width: 45%;
    height: 170px;
 margin-top: 20px; 
  }
  #list1 li img{
    width: 100%;
    height: 130px;
    display: block;
    border: 0;

    border-radius: 10px;
  }
  #list1 li span{
    display: block;
    text-align: center;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
  }
</style>
