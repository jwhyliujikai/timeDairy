<template>
  <div id='more' >
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
  name: 'More',
  data(){
    return{
      title:'更多',
      list:[],
      isLoading:false
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        axios('http://10.8.157.61/goodsList').then((data)=>{
            this.list=data.data;
        })
      }, 500);
    }
  },
  mounted(){
    this.$emit("titleText",this.title);
    axios('http://10.8.157.61/goodsList').then((data)=>{
            this.list=data.data;
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #more{
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

  }
  #list1 li{
    width: 45%;
    height: 170px;

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
    overflow: hidden;
    height: 20px;
    line-height: 20px;
  }
</style>
