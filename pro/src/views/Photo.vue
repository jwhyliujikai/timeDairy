<template>
  <div id="box"> 
    <header>
      <van-nav-bar
        title="时光记"
        left-text
        left-arrow
        fixed
        @click-left="onClickLeft"
        
      />
    </header>


     <div class="waterfall-wrapper">
      <ul class="left-waterfall" ref="left">
        <li class="item" v-for="(item, index) in leftItems" v-bind:style=" {height:item.height+'px'}">
          <img @click="detail" :src="item" alt="">
        </li>
      </ul>
      <ul class="right-waterfall" ref="right">
        <li class="item" v-for="(item, index) in rightItems" v-bind:style=" {height:item.height+'px'}"> <img @click="detail" :src="item" alt=""></li>
      </ul>
    </div>


  </div>
</template>
 
<script>

import { Popup } from 'vant'

export default {
  data () {
    return {
      leftItems:["http://img2.imgtn.bdimg.com/it/u=2594954460,618903872&fm=26&gp=0.jpg","http://img4.imgtn.bdimg.com/it/u=508387608,2848974022&fm=26&gp=0.jpg","http://img1.imgtn.bdimg.com/it/u=184317050,1666959161&fm=26&gp=0.jpg","http://img1.imgtn.bdimg.com/it/u=1378897116,1103132713&fm=26&gp=0.jpg","http://img0.imgtn.bdimg.com/it/u=2381247408,1568314224&fm=26&gp=0.jpg"],
      rightItems:["http://img1.imgtn.bdimg.com/it/u=184317050,1666959161&fm=26&gp=0.jpg","http://img1.imgtn.bdimg.com/it/u=1378897116,1103132713&fm=26&gp=0.jpg","http://img0.imgtn.bdimg.com/it/u=2381247408,1568314224&fm=26&gp=0.jpg"]

    }
  },
  
  methods: {
        updateWaterfall () {
        const leftHeight = this.$refs.left.clientHeight
        const rightHeight = this.$refs.right.clientHeight
        let item = this.data.shift()

        if (item == null) {
          return
        }
        if (leftHeight <= rightHeight) {
          this.leftItems.push(item)
        }
        else {
          this.rightItems.push(item)
        }
        this.$nextTick(function () {
          this.updateWaterfall()
        })
      },
      onClickLeft(){
        this.$router.push("/time")
      },
      detail(){
        this.$router.push("/detils")
      }
  }


  }
</script>
 
<style scoped>
  #box{
    display:flex;
    flex-direction: column;
    height:100%;
    flex-wrap:wrap;
  
    
  }
  header{
    height:10%;
   
 
  }
  .waterfall-wrapper{
    height:90%;
    width:90%;
    padding-left:2%
  }
  ul {
    width: 45%
  }
 
  ul.left-waterfall {
    float: left;
  }
 
  ul.right-waterfall {
    float: right;
  }
 
  li.item {
    width: 100%;
 
    margin: 10px;
   
    
  }
  li img{
    width:100%;
  border-radius:10px;
  }
 
</style>
