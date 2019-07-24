<template>
    <div>
        <router-view></router-view>
        <van-tabbar v-model="active">
          
            <van-tabbar-item name="home"  class="ico" to="/index">锦囊</van-tabbar-item>
            <van-tabbar-item name="search" class="ico" to="/life">生活</van-tabbar-item>

            <van-tabbar-item name="friends" class="ico" to="/time">时光记</van-tabbar-item>
            <van-tabbar-item name="setting" class="ico">消息</van-tabbar-item>
            <van-tabbar-item  class="ico" to="/mine">我的</van-tabbar-item>

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