<template>
    <div>
        <div class="head" >
            <van-icon name="service-o" color="red" size='20' @click='tap()'/>
            <div>
                <van-search placeholder="请输入搜索关键词" v-model="value" @input='tap2()' />
            </div>
            
            <van-icon name="bill" color='red' size='20' @click='tap1()'/>
  	    </div>
          <!-- 常用清单和为我推荐 -->
        <van-tabs style="margin-bottom:50px">
            <van-tab title="为我推荐">
                <router-link v-for="item in list" :to="{name:'/detail',query:{id:item.id}}">
                    
                    <van-card 
                       
                        :price="item.price"
                        :desc="item.desc"  
                        :title="item.name"
                        :thumb="item.photo"
                    />

                </router-link>
            </van-tab>
            <van-tab title="常用清单">内容 2</van-tab>
        </van-tabs>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"Checklist",
    data(){
        return{
            value:'',
            list:[],

        }
    },
    mounted(){
        axios({
            method:'post',
            url:'http://106.12.52.107:8081/MeledMall/menu/recommend'
        }).then((data)=>{
           
            this.list=data.data.info
            console.log(this.list)
        })
    }
}
</script>

<style scope="">
    *{
	margin: 0;
	padding: 0;
}
	.head{
		
		background: blue;
		width: 100%;
		height: 40px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		
	}
</style>
