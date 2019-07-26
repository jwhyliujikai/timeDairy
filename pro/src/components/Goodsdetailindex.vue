
<template>
    <div id="gi">
        <div id="swiper_pic">
             <swiper :options="swiperOption" ref="mySwiper">
                    <!-- slides -->
                    <swiper-slide v-for="item in 5">
                    <img :src="goods.goodsImg"/>
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                
                    <!-- Optional controls -->

                
                
                </swiper>
        </div>
        <div id="content">
            <h1>{{goods.goodsName}}</h1>
            <p id="jp">
                <span>￥999</span>
                <span>好评:99%</span>
            </p>
            <p id="huiyuan">
                <span>会员价:￥{{goods.goodsPrice}}</span>
            </p>
            <div id="desc">
                <p>设计者:Waiodsnf</p>
                <p>材质：100%纯棉</p>
                <p>颜色：浅蓝  浅粉  浅黄 浅灰 浅绿</p>
                <p>适龄：适合3-8岁儿童</p>
            </div>
            <div id='pg'>
                <router-link tag='p' to="/evaluate">评价</router-link>
                <router-link tag='p' :to='{name:"Goodsdetailljgm",query:{id:this.$route.query.id}}'>规格</router-link>
            </div>
            <div id="pl">
                <div>
                    <h1>VIVI妈妈</h1>
                    <p>{{goods.goodsP}}</p>
                </div>
            </div>
        </div>
        <div id="footer">
            <router-link tag="p" :to='{name:"Addtocar",query:{id:this.$route.query.id}}'>
                加入购物车
            </router-link>
            <router-link tag="p" :to='{name:"Goodsdetailljgm",query:{id:this.$route.query.id}}'>
                立即购买
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'Goodsdetailindex',
    data(){
        return{
            goods:{},
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                     clickable :true,
                    //type: 'fraction',
                    //type : 'progressbar',
                    //type : 'custom',
                },
                effect : 'coverflow',
                slidesPerView: 3,
                centeredSlides: true,
                coverflowEffect: {
                    rotate:0,
                    stretch: -15,
                    depth: 30,
                    modifier: 10,
                    slideShadows:false
                    }
                }
        }
    },
    mounted(){
      
        axios({
            url:'http://47.95.218.254/getGoodsById',
            params:{'goodsId':this.$route.query.id}
        }).then((data)=>{
          
            this.goods=data.data;
            

        })
    }
}
</script>

<style scoped>
#gi{
    overflow: auto;
}
#swiper_pic{
  width: 99%;
  height: 45%;
  margin: 10px auto;

}
#swiper_pic img{
    border:1px solid #cecece;
    width: 213px;
    height: 213px;
    /* height: 260px; */
    border-radius: 20px;
}


#content{
    width: 90%;
    margin: 0 auto;
    height: auto;

    padding-bottom:10px; 
    margin-bottom: 46px;
    overflow: auto;
}
#content h1{
    font-weight: normal;
    font-size: 18px;
    width: 100%;
    text-align: center;
}
#content #jp{
    width: 100%;
    height: 30px;
    /* line-height: 30px; */
    display: flex;
    justify-content: center;
}
#jp span{
    margin: 0 10px;
    float: left;
    width: 80px;
    height:20px;
    border:1px solid #cecece;
    border-radius: 10px;
    margin-top: 5px;
    line-height: 20px;
    text-align: center;
}
#huiyuan{
    width: 100%;
    height:20px;
    display: flex;
    justify-content: center;
 
}
#huiyuan span{
    display: block;
    width: 80px;
    height: 20px;
    line-height: 20px;
border:1px solid #cecece;
    border-radius: 10px;
    text-align: center
}
#desc{
    width: 99%;
    height: 80px;
    border:1px solid #cecece;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
}
#desc p {
    width: 45%;
    height: 40px;

    color: rgb(106,106,106)
}
#pg{
    width: 100%;
    height: 40px;

    display: flex;
    justify-content: space-between;
    align-items:center;
}
#pg p{
    width: 30%;
    height: 30px;
    line-height: 30px;

    text-align: center;
    border:1px solid #cecece;
    border-radius: 5px;
}
#pl{
    width: 99%;
    height: 50px;
    overflow: auto;
    border:1px solid #cecece;
    border-radius: 10px;

}
#pl h1{
    width: 90%;
    margin: 0 auto;
    height: 20px;
    font-size: 12px;
    text-align: left;
}
#pl p{
    width: 90%;
    margin: 0 auto;
}
#footer{
    width: 100%;
    height: 46px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
}
#footer p{
    width: 50%;
    text-align: center;
    font-size: 18px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 100%;
    line-height: 46px;
}
#footer p:nth-of-type(1){
    background: rgb(234,232,232)
}
#footer p:nth-of-type(2){
    background: rgb(198,198,198)
}
</style>

