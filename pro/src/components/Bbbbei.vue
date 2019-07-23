<template>
  <div id="bbbbei">
      <div id="top">
         
      </div>
      <div id="list">
        <ul>
          <router-link tag="li" :to='{name:"Goodsdetailindex",query:{id:item.goodsId}}' v-for='(item,index) in list' >
            <img :src="item.goodsImg" alt="">
            <p>{{item.goodsName}}</p>
            <p>{{item.goodsDesc}}</p>
            <p>会员价￥{{item.goodsPrice}}</p>
            <p>宝马亲测:真的好用，不但薄，而且吸收量很大，还没哟红屁股</p>
            <span>{{index+1}}</span>
          </router-link>
        </ul>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Bbbbei',
  data () {
    return {
      title:'宝宝必备',
      list:[],
    }
  },
  methods: {
   
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
#bbbbei{
  margin-top: 46px;
}
#top{
  width: 100%;
  height: 140px;
  background: rgb(234,234,234)
}
#list{
  width: 94%;
  margin: 0 auto;
  height: auto;
  background: red;
  position: relative;
}
#list ul{
  width: 100%;
  height: auto;
  position: absolute;
  top:-75px;
  left: 0;
}
#list  ul li{
  width: 100%;
  height: 150px;
  background: rgb(223,223,223);
  border-radius: 10px;
  margin-bottom: 30px;
  position: relative
}
#list ul li img{
  position: absolute;
  width: 120px;
  height: 120px;
  border:1px solid #666;
  top:15px;
  left: 15px;

}
#list ul li p{
  position: absolute;
  height: 25px;
  line-height: 25px;
  background: rgb(217,217,217)
}
#list ul li p:nth-of-type(1){
  left: 145px;
  width: 140px;
  top:15px;
  color: rgb(119,118,118)
}
#list ul li p:nth-of-type(2){
  left: 145px;
  width: 140px;
  top: 45px;
  overflow: hidden;
  color: rgb(119,118,118)
}
#list ul li p:nth-of-type(3){
  left: 145px;
  width: 140px;
  top: 75px;
  color: rgb(119,118,118)
}
#list ul li p:nth-of-type(4){
  left: 145px;
  width: 140px;
  top: 110px;
  overflow: hidden;
  color: rgb(116,116,116)
}
#list ul li span{
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  top:5px;
  left: 0px;
  text-align: center;
  line-height: 30px;
  border-radius:50%;
  border:1px solid #666; 
  background: #fff;
}
</style>
