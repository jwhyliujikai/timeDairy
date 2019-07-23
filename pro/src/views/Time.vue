<template>
    <div id="box">
        <header>
            <ul id="wq_box">
                <li>
                     <p>宝宝</p>
                </li>
                <li>
                    <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="头像">
                </li>
                <li>
                    <span>ABC</span>
                    <span>ABC</span>

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
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>

                </ul>
           </div>
           
        </div>
        <div id="sign">
            <van-icon name="plus"/>
        </div>
    </div>
</template>
<script>
    export default {
        name:"Time",
        data() {
            return {
            active: 2,
            value: 50
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
        height:50%;
        width:100%;
        display:flex;
        justify-content: center;

        
     }
      #wq_box :nth-child(2) img{
          width:100px;
          height:100px;
          border-radius:50px
      }
    #wq_box :nth-child(3){
        height:40%;
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
        height:70%;
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
        width:100%;
        height:100px;
        background:black;
        margin:2%;
        border-radius:10px;
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
