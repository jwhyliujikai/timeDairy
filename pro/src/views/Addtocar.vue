<template>
  <div id="addcar">
      <van-nav-bar
   fixed
  left-text="返回"
@click-left="onClickLeft"
  left-arrow
/>
     <div id="pic">
        <img :src="goods.goodsImg">
     </div>
     <div id="content">
        <div id="title">
          <p>{{goods.goodsName}}</p>
          <p>￥:{{goods.goodsPrice}}</p>
        </div>
        <div id="number">
          <p>数量:</p>
          <p>
            <van-stepper v-model="value" integer />
          </p>
        </div>
        <div id='size'>
            <p>尺寸</p>
            <p>
              <van-slider
                v-model="value1"
                active-color='gray'
                :max="70"
              >
                <div
                  slot="button"
                  class="custom-button"
                  style="width:15px;height:15px;background:gray;border-radius:50%;text-align:center;"
                >
              
                </div>
              </van-slider>
              <ul>
                <li>30cm</li>
                <li>40cm</li>
                <li>50cm</li>
                <li>60cm</li>
                <li>70cm</li>
              </ul>
            </p>
        </div>
        <div id="color">
          <p>颜色</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div id="psz">
          <p>
            地址:
          </p>
          <p>
            河南省郑州市二七区海为科技园
          </p>
        </div>
     </div>
     <div id="footer">
          <p @click="addtocar">确认</p>
     </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Addtocar',
  data () {
    return {
      value:1,
      value1:1,
      goods:{}
    }
  },
   methods:{
         onClickLeft(){
             this.$router.go(-1) ;         
        },
        addtocar(){
          axios({
              url:'http://10.8.157.61/addShop',
              params:{
                userId:24,
                goodsId:this.$route.query.id,
                goodsNum:this.value
              }
            }).then((data)=>{
              console.log(data);
            })
        }
    },
    mounted(){
      axios({
            url:'http://10.8.157.61/getGoodsById',
            params:{'goodsId':this.$route.query.id}
        }).then((data)=>{
          
            this.goods=data.data;

        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#addcar{
  width: 100%;
  height: auto;
  overflow: auto;
  color:rgb(106,106,106)
}
#pic{
  width: 94%;
  height: 240px;
  margin: 0 auto;
  margin-top: 46px;
}
#pic img{
  width: 100%;
  height: 100%;
}
#content{
  width: 94%;
  margin: 0 auto;
  height: auto;
  overflow: auto;
  margin-bottom: 46px;
}
#title{
  width: 100%;
  height: 40px;
  line-height: 40px;
}
#title p:nth-of-type(1){
   float: left;
  width: 70%;
  height: 30px;
  font-size: 16px;
   overflow: hidden;
} 
#title p:nth-of-type(2){
   float: left;
   text-align: right;
  width: 30%;
  height: 30px;

}
#number{
  width: 100%;
  height: 45px;
  line-height: 45px;
}
#number p:nth-of-type(1){
   float: left;
  width: 15%;
  height: 40px;
}
#number p:nth-of-type(2){
   float: left;
  width: 70%;
  height: 40px;
}
#size{
  width: 100%;
  height: 60px;

  overflow: hidden;

}
#size p:nth-of-type(1){
  width: 100%;
  height: 20px;
  line-height: 20px;

}
#size p:nth-of-type(2){
  width:90%;
  margin: 0 auto;
  height: 40px;

  padding-top:15px; 
}
#size p:nth-of-type(2) ul{
  width: 100%;
  height: 20px;
}
#size p:nth-of-type(2) ul li{
  width: 20%;
  height: 20px;
  float: left;
  text-align: center;
  color:rgb(115,115,116);
}
#color{
  width: 100%;
  height: 50px;

}
#color p{
  height: 20px;
  line-height: 20px;
}
#color ul{
  width:100%;
  height: 30px;

  display: flex;
  justify-content: space-around;
  align-items: center
}
#color ul li{
  width: 18px;
  height: 18px;
  float: left;
  border-radius: 50%;
  background: pink;
}
#psz{
  width: 100%;
  height: 50px;

}
#psz p:nth-of-type(1){
  width: 100%;
  height: 20px;
  line-height: 20px;

}
#psz p:nth-of-type(2){
  width: 100%;
  height: 30px;
  line-height: 30px;
  
}
#footer{
  width: 100%;
  height: 46px;
  background: rgb(234,232,232);
    position: fixed;
  bottom: 0;
}
#footer p{
  width: 100%;
  height: 100%;
  line-height: 46px;
  font-size: 20px;
  text-align: center;

}
</style>
