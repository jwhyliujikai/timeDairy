<template>
    <div style="margin-top:40px">
         <van-search
            v-model="value"
            placeholder="输入食物名称搜索"
            show-action
            shape="round"
            @input="change"
            >
            <div slot="action" @click="onSearch">搜索</div>
        </van-search> 
        
            

            <!-- <div slot="action" @click="onSearch">搜索</div> -->
        

         <ul>
             <router-link tag='li' class="search" v-for='item in data' @click="top($event)" :to="{name:'wine',query:{a:item.foodsId}}">{{item.foodsName}}</router-link>
             <!-- <li class="search" v-for='item in data' @click="top($event,item.foodsId)">{{item.foodsName}}</li> -->

         </ul>
        <div id="foodslist">
        <router-view></router-view>
        </div>
    </div>
</template>
<script>

//console.log(oLi)
import axios from 'axios';
export default {
    name:"Eatnot",
    data(){
        return{
            value:'',
            title:'能不能吃',            
            data:[],
            arr:[],
        }
    },
    mounted(){
        this.$emit('toparent',this.title);
         //console.log(oLi.innerHTML)
    },
    methods: {
        change(){            
            axios({
            url:'http://47.95.218.254/queryfoods',
            params:{foodsName:this.value}
        }).then((data)=>{

            this.data=data.data;
        });

        },
        onSearch(){ 
            axios({
            url:'http://47.95.218.254/queryfoods',
            params:{foodsName:this.value}
        }).then((data)=>{
          this.data=data.data;
         // console.log(this.data)
           this.data.map((item)=>{
              // console.log(item)
               this.$router.push({name:'wine',query:{a:item.foodsId}})
           })
           
        })
          this.data=data.data;
          console.log(this.data)
           
        }
        },
        top(e){
            var el=e.target;
            
            this.value= $(el).html();
            // this.$route.push('/')
        }
    }
    


</script>
<style scoped=''>
    #foodlist{
        margin-top: 54px;
    }
     
    .search{
        border: 1px solid #ccc;
        width:auto;
        height:30px;
        background: greenyellow;
        font-size: 16px;
        line-height: 30px;
        text-align: left;
    }
</style>