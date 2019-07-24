<template>
    <div id='repinfo'>
        <div id="top">
            <van-nav-bar
                title="米粒肥瘦"
            
                left-arrow
                @click-left="onClickLeft"
                />
        </div>
        <div id="repcontent">
12121
        </div>
        <div id="repinput">
            <div id='icon'><van-icon name='audio' size='30' color='rgb(232,232,232)'></van-icon></div>
            <div id="input">
                <van-field v-model="value"  />
            </div>
            <div id='icon1'>
                <van-icon name='clock' size='30' color='rgb(232,232,232)'></van-icon>
                <van-icon name='add' size='30' color='rgb(232,232,232)'></van-icon>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Repinfo',
    data(){
        return {
            value:''
        }

    },
    methods:{
        onClickLeft(){
            
        }
    }

}
</script>
<style scoped>
#repinfo{
    display: flex;
    flex-direction: column;
}
#top{
    height: 46px;
}
#repcontent{
   flex: 1;
   background: pink;
   
}
#repinput{
    height: 46px;
    display: flex;
    background: #cecece;
    justify-content: center;
    align-items: center;
}
#icon{
   width: 10%;
}
#icon1{
    width: 20%;
    display: flex;
}
#input{
 width: 70%;  
}
</style>
