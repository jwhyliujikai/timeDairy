
<template>
    <div id="box">
       <header>
            <van-nav-bar
            title="成长记录"
            left-arrow
            fixed
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />
       </header>

       <div id="content">
            <van-tabs color="#ccc" line-width=30px line-height="1px">
                <van-tab title="记录列表"></van-tab>
                <van-tab title="身高曲线"></van-tab>
                <van-tab title="体重曲线"></van-tab>
                <van-tab title="头围曲线"></van-tab>
            </van-tabs>
            
       </div>

       <div id="list">
        <ul id="uls">
            <li>
               <ul>
                   <li>
                       <span>2018.8.16</span>
                       <span>30天</span>
                   </li>
                      
                   <van-icon name="plus" />
               </ul>
               <ul>
                   <li>属性支持传入图标名称或图片链接</li>
               </ul>
               <ul>
                   <li>身高50cm</li>
                   <li>头围30cm</li>
               </ul>
               <ul>
                   <li>体重6kg</li>
               </ul>
            </li>
        </ul>
       </div>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    name:"Growth",
    data() {
        return {
        };
   
    },
    
    methods: {
    onClickLeft() {
        this.$router.push("/time")
    },
    onClickRight() {
     
    }
    }
   
}
</script>

<style scoped>
    #box{
        display: flex;
        flex-direction:column;
        height:100%;
    }
    header{
        height:5%;
    }
    #list{
        flex:1;
        margin-top:3%;
        display:flex;
        justify-content:center;
    }
    #uls{
        
        width:92%;
        height:20%;
        background:#e3e3e3;
        border-radius:10px;
        padding:3% 3%;
       
    }
    #uls li ul{
        display:flex;
        justify-content:space-between;
        margin:2% 0
    }
</style>
