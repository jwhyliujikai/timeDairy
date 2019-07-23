<template>
    <div>
        <div style="position:fixed; top:0;width:100%;z-index:100;">
            <van-search placeholder="请输入搜索关键词" v-model="value" style="font-size:30px"/>
        </div>
        <div class="lunbo" style="margin-top:40px">
            <van-swipe :autoplay="2000" indicator-color="white" :height="200">
            <van-swipe-item class="logo" v-for="item in list">
               <img :src="item" style="width:100%;height:200px"/>
            </van-swipe-item>
            
        </van-swipe>
        </div>
        <ul class="nav">
            <router-link tag="li" to='/cookbook'>食谱</router-link>
             <router-link tag="li" to='/all'>百科</router-link>
              <router-link tag="li" to='/question'>问答</router-link>  
        </ul>

         
         <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <ul id="klist">
            <li class="pro" v-for='item in list1'>
                <img :src="item.imgUrl"/>
                <div class="read">
                    <p>{{item.cycDesc}}</p>
                   
                    <span>{{item.number}}</span>
                </div>
               
                
            </li>
        </ul>   
        </van-pull-refresh>     
           
       
    </div>
    
</template>

<script>

     
    // import IScroll from 'iscroll'
     import axios from 'axios';
export default {
     name:'Index',
     
     data(){
         return{
            value:'',
              active: 2,            
              list:{},
              list1:[],
              isLoading: false
        }
    },
    mounted(){
        axios({
            url:'http://10.8.157.61/bannerUrl'
        }).then((data)=>{
            
           this.list = data.data;
          
        }),
        axios({
            url:'http://10.8.157.61/essay'
        }).then((data)=>{    
            console.log(data) 
           this.list1 = data.data;
          // console.log(this.list1)
        })
    },
     methods: {
        onRefresh() {
        setTimeout(() => {
            console.log('刷新')
            this.isLoading = false;

        }, 500);
        },
        
  }
}
</script>
<style scoped="">
*{
    margin: 0;
    padding: 0;
}
    .tu1{
        height: 200px;
        width: 100%;
    }
     .logo{
        background: red
    }
    
    .nav{
        width:100%;
        height: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 16px;
        margin-top:20px;
        margin-bottom: 10px;
    }
   img{
       
        width: 120px;
        height: 60px;
        flex-shrink: 0;
    }
     #klist{
        
        margin-bottom: 50px;
    } 
    .pro{
        
        display: flex;
        border: 1px solid red;
        margin-bottom: 10px;
        border: 1px solid red;
        justify-content: space-between;
        align-items: center 
        
    }
    .read{
        width: 60%;
        height: 70px;
        background: red;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 14px

    }
    
 
   
    
</style>