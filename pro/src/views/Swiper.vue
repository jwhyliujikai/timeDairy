<template>
    <div id="swiper">
        <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="item in 7">
       <img src="https://img04.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi03piccdn.sogoucdn.com%2Ff685febd6bbb65b9&appid=122"/>
    </swiper-slide>
   
    <!-- Optional controls -->

 
  
  </swiper>
    </div>
</template>

<script>

     export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
         autoplay:true,
         effect : 'coverflow',
         slidesPerView: 3,
         centeredSlides: true,
         coverflowEffect: {
              rotate: 10,
              stretch: -10,
              depth: 10,
              modifier: 5,
             }
        }
      }
    },
 
  }
</script>
<style scoped>
#swiper{
    margin-top: 40px;
}
#swiper img {
 width: 150%;
  border-radius: 20px;
}
</style>

