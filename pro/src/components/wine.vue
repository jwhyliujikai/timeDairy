<template>
    <div  style="margin-top:50px">
        <div  style='margin-bottom:20px ;'>
            <img :src='data.foodsImgUrl' style='width:100%; height:30vh ;'/>
            <p style='margin-top:10px;font-size:16px;color:#c1c1c1;line-height:30px'>{{data.foodsDesc}}</p>
        </div>    
            <hr/>          
            <div v-for="item in list">
                <h4 style='margin:15px 0'>{{item.ask}}</h4>
                <span ><van-icon name="warning-o" color=red />{{item.notice}}</span>
                <p style='margin-top:15px'>{{item.answer}}</p>
                <hr/>
            </div>    
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"Wine",
    data(){
        return {
            title:'酒酿',
            data :{},
            list:[]
        }
    },
    mounted(){
         //console.log(this.$route.query.a);
        
        axios({
            url:'http://10.8.157.61/foodsinfo',
            params:{foodsId:this.$route.query.a}
        }).then((data)=>{
        //    this.data=data;
          // console.log(data.data);
           this.data=data.data;
          // console.log(this.data)
           this.list=this.data.foodsInfoIssue;
        //    console.log(this.list);
        }),

        
       



        this.$emit('toparent',this.title)
        //  this.$emit('toparent',this.title)
    },
    
}
</script>

<style scoped=''>
    img{
        display: block;
        border:none
    }
</style>