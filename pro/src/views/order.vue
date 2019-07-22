<template>
<div>
    <van-nav-bar
            title="我的订单"
            left-arrow
            @click-left="onClickLeft"
            />
    <div style="margin-top:20px">
        <van-cell title="全部" icon="points" />
        <van-cell title="待付款" icon="refund-o" />
        <van-cell title="待收货" icon="logistics" @click="tap()"/>
        <van-cell title="待发货" icon="location-o" />
        <van-cell title="已完成" icon="completed" />
        <van-cell title="评价" icon="comment-o" />
        <van-cell title="退款/售后" icon="more-o" />
    </div>
</div>
    
</template>

<script>
export default {
methods: {
    onClickLeft() {
       this.$router.go(-1)
    },
    tap(){
        this.$router.push("/send")
    }
  }
}
</script>

<style>

</style>
