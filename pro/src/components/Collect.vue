<template>
    <div style="margin-top:45px">
        <van-tabs >
            <van-tab title="食谱">
                <ul class="l-shipu">
                    <router-link tag='li' v-for='item in list' to='/detail'>
                        <img :src="item.foodsImgUrl"/>
                        <div class="l-infor">
                            <h3>{{item.foodsName}}</h3>
                            <p>{{item.foodsDesc}}</p>
                        </div>
                    
                    </router-link>
                </ul>
            </van-tab>
            <van-tab title="营养计划">内容 2</van-tab>
        </van-tabs>
                    

    </div> 
</template>
<script>
import axios from 'axios';
export default {
    name:"Collect",
    data(){
        return{
             title:'我的收藏',
             list:[],
        }
       
    },

    mounted(){
        this.$emit('toparent',this.title);
        axios({
            url:'http://47.95.218.254/recipe'
        }).then((data)=>{
           // console.log(data.data)
            this.list=data.data
            console.log(this.list)
        })
    },
    methods: {
        
    },
}
</script>
<style scoped=''>
    .l-shipu li{
        width: 93vw;
        height: 150px;
        /* border:1px solid red;    */
        display: flex;
        justify-content: space-between;
        align-items: center
    }
    .l-shipu li img{
        width: 30vw;
        height: 80px;
       
    }
    .l-shipu .l-infor{
        width:60vw;
        height: 80px;
        /* background: red; */

    }
</style>
