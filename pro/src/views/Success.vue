<template>
    <div id="box">
        <header>
            <van-nav-bar
            title="成就"
            left-arrow
             right-text="全部"
             id="banner"
             fixed
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />
        </header>
        <div id="content">
            <swiper id="swiper" ref="mySwiper" :options="swiperOption"> 
                <!-- slides -->
                <swiper-slide v-for="items in arr" :key="items">
                    <div id="background">
                        <img :src="items.headImg" alt="2333">
                        <div id="test">
                            <h2>{{items.didTitle}}</h2>
                            <p>{{items.didDesc}}</p>
                            <button>查看更多</button>
                            <em></em>
                        </div>
                    </div>
                </swiper-slide>
                    
            </swiper>
        </div>

        
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from "axios"
import { Toast } from 'vant';
export default {
   
    
    data() {
      
      return {
        name:"Success",
        arr:[],
        img:"",

        swiperOption: {
            effect : 'coverflow',
            slidesPerView:3,
            centeredSlides: true,
            coverflowEffect: {
                rotate:0,
                stretch:-10,
                depth:200,
                modifier:2.5,
                slideShadows:false
            },
        }
      }
    },

    methods:{
        onClickLeft() {
            this.$router.push("/time")
        },
        onClickRight(){
            this.$router.push("/photo") 
        },
    
        
    },
    components: {
        swiper,
        swiperSlide
    },
    mounted(){
        if(localStorage.getItem("Token")){
            var Token = localStorage.getItem("Token")

             axios({
            method:"get",
            url:"http://10.8.157.61/showbabydid",
            params:{userId:Token}
        }).then((data)=>{
            var data = data.data
            this.arr=data
            this.img= this.arr[0].didImg
        })
        }else{
            Toast("请登录查看")
        }
       
    }
   
    }
  
</script>


<style scoped>
    #box{
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center
        
    }

    #banner{
        background: #cecece;
        color:#000
    }
    #content{
        height:100%;
        width:100%;
        background: #fff;
        display:flex;
        justify-content: center;
        align-items: center;
        position: relative;

      
    }
   

    #swiper{
        width:120%;
        height:80%;
        position:absolute;
        top:0;
        left:-20%;
        overflow: hidden;
        margin-top:20%
    }
     #background{
        width:160%;
        height:100%;
        display: flex;
        flex-direction: column;
        border-radius:20px;
        margin:10%
    }
    #test{
        width:90%;
        height:30%;
        display:flex;
        flex-direction: column;
        align-items: center;
        padding:5%;
        position: relative;
        background: rgba(218, 218, 218, 1);
        border-radius:0 0 20px 20px
    }
    #test button{
        width:80%;
        height:20%;
        border:0;
        outline:none;
        border-radius:20px;
        background: #fff
        
    }
    #test p{
        margin:5% 0;
        line-height:20px
    }
    #test em{
        border-top:1px solid #000;
        width:110%;
        position:absolute;
        left:-5%;
        bottom:99%;
        z-index:33
    }
    #content img{
        display: inline-block;
        width:100%;
        height:60%;
        border-radius:20px 20px 0 0;
    }

</style>