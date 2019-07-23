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
                    
        <li class="item" v-for="(item) in leftItems" :key="item" v-bind:style=" {height:item.height+'px'}"></li>
        </ul>
        <ul class="right-waterfall" ref="right">
          <li class="item" v-for="(item, index) in rightItems" :key="item" v-bind:style=" {height:item.height+'px'}">{{ index }}</li>
        </ul>
  </div>


       

      


    
  </div>
</template>
 
<script>

import { Popup } from 'vant'

export default {
  data () {
    return {
      data: [
        {
          height: 100
        },
        {
          height: 110
        },
        {
          height: 150
        },
        {
          height: 200
        },
        {
          height: 300
        },
        {
          height: 100
        },{
          height: 222
        },{
          height: 111
        },{
          height: 123
        },{
          height: 451
        },
      ],
      leftItems: [],
      rightItems: [],
      show: false,
      index: 0,
      images: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ],
    
     
    }
  },
  mounted () {
    // TODO GET DISPLAY_DATA
    this.updateWaterfall()
  },
  methods: {
    updateWaterfall () {
      const leftHeight = this.$refs.left.clientHeight
      const rightHeight = this.$refs.right.clientHeight
      let item = this.data.shift()
      console.log(leftHeight)
      console.log(rightHeight)
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
     onClickLeft() {
      this.$router.push("/time")
    },
    popup(){
      
    },
    onChange(index) {
      this.index = index;
    },
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
    background-color: aqua;
    margin: 10px;
    border-radius:10px
  }
 
</style>
