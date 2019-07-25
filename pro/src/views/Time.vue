<template>
    <div id="box">
        <header>
            <ul id="wq_box">
                <li>
                     <p>{{demo}}</p>
                </li>
                <li>
                    <img :src="img" alt="头像">
                </li>
                <li>
                    <span>{{id}}</span>
                    <span>{{title}}</span>

                </li>

            </ul>
        </header>
        <div id="wq_content">
           <ul id="nav">
               <li @click="photo">云相册</li>
               <li @click="growth">成长记录</li>
               <li @click="accom">成就</li>
               <li>亲团友</li>
           </ul>
           <div id="nav_list">
                <div id="slide">
                    <van-slider v-model="value" vertical active-color="#9f9f9f"/>
                </div>
                <ul id="details">
                    <li v-for="item in arr" :key="item">
                        <img :src="item.headImg" @click="detils">
                    </li>
                    

                </ul>
           </div>
           
        </div>
        <div id="sign">
            <van-icon name="plus"/>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import { Toast } from 'vant';
    export default {
        
        data() {
            return {
            active: 2,
            value: 50,
            name:"Time",
            arr:[],
            img:"",
            title:"",
            id:"",
            demo:""
            };  
        },
        methods:{
            photo(){
                this.$router.push("/photo")
            },
            growth(){
                this.$router.push("/growth")
            },
            accom(){
                this.$router.push("/accom")
            },
            detils(){
                this.$router.push("/detils")
            }
        },
        mounted(){
            if(localStorage.getItem("Token")){
                var token = localStorage.getItem("Token")
                axios({
                method:"get",
                url:"http://10.8.157.61/showbabydid",
                params:{userId:token}
            }).then((data)=>{
                // console.log(data)

                if(data.data.length==0){
                    this.img=this.$store.state.commheadImg
                }else{
                      
                this.arr=data.data
                this.img = data.data[0].headImg
                this.title = data.data[0].userDesc
                this.id = data.data[0].id
                this.demo = data.data[0].userId
                
                }
              
            })
            }else{
                Toast("请登录后查看")
                this.$router.push("/both")
            }
            
        }

        
    }
</script>
<style scoped>
    #box{
       height:100%;
       display: flex;
       flex-direction: column;
       background:#f2f2f2
    }
    header{
        height:30%;
        display: flex;
        flex-direction: column;
        align-items:center;
        
       
     
    }
    #wq_box{
        width:100%;
        height:100%;
    }
    #wq_box :nth-child(1){
        height:10%;
        width:100%;
        
        
        
    }
    #wq_box :nth-child(1) p{
        width:50px;
        height:20px;
        background:#fff;
        text-align: center;
        margin-left:85%

    }
    #wq_box :nth-child(2){
        height:100px;
        width:100%;
        display:flex;
        justify-content: center;

        
     }
      #wq_box :nth-child(2) img{
          width:100px;
          height:100%;
          border-radius:50px
      }
    #wq_box :nth-child(3){
        height:46px;
        width:100%;
        display:flex;
        justify-content:space-around
    }
     #wq_box :nth-child(3) span{
         display: inline-block;
         width:94px;
         height:30px;
         background:#fff;
         text-align: center;
         line-height:30px
     }

    /* header 结束 */

    #wq_content{
        height:60%;
        width:100%;
        background: #fff;
        
    }
    #nav{
        width:100%;
        height:10%;
        display:flex;
        justify-content:space-around;
        text-align: center;

    }
    #nav li{
        height:100%;
        line-height:50px;
    }
    #nav_list{
        height:86%;
        width:96%;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        padding:2%
    }
    #slide{

        height:100%;
        width:2%;
        text-align: center;
        margin-left:1%
    }
    #details{
        width:94%;
        height:96%;
        overflow: hidden;
        padding:2%
    }
    #details li{
        width:99%;
        height:200px;
        border:1px solid #ccc;
        margin:2%;
        border-radius:10px;
    } 
    #details li img{
        width:100%;
        height:100%;
    }



    #sign{
        position: fixed;
        right:5%;
        bottom:11%;
        width:50px;
        height:50px;
        background:#fff;
        border-radius:25px;
        text-align: center;
        line-height:50px;
        font-size:50px
    }
</style>
