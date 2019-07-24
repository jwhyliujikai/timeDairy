<template>
    <div>
        <router-view></router-view>
        <van-tabbar v-model="active">
<<<<<<< HEAD
            <van-tabbar-item name="home"  class="ico">锦囊</van-tabbar-item>
            <van-tabbar-item name="search" class="ico">生活</van-tabbar-item>
            <van-tabbar-item name="friends" class="ico">时光记</van-tabbar-item>
            <van-tabbar-item name="setting" class="ico">消息</van-tabbar-item>
            <van-tabbar-item  class="ico">我的</van-tabbar-item>
=======
            <van-tabbar-item name="home"  class="ico" to="/index">锦囊</van-tabbar-item>
            <van-tabbar-item name="search" class="ico">生活</van-tabbar-item>
            <van-tabbar-item name="friends" class="ico">时光记</van-tabbar-item>
            <van-tabbar-item name="setting" class="ico">消息</van-tabbar-item>
            <van-tabbar-item  class="ico" to="/mine">我的</van-tabbar-item>
>>>>>>> 349d35f9bcc575be98fa094f004b379e0859d788
        </van-tabbar>
    </div>

</template>
<script>

export default {
    name:"Footer",
    
    data(){
        return{
             active:'home',
        }
    }
}
</script>
<style scoped=''>
    .ico{
        font-size: 20px;
    }
</style>