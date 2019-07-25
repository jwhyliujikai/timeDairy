
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
                <van-tab title="记录列表">
                    <div id="list">
                            <ul id="uls">
                                <li>
                                <ul>
                                    <li>
                                        <span>{{time}}</span>
                                        
                                    </li>
                                        
                                    <van-icon class="jia" name="plus" @click="news"/>
                                </ul>
                                <ul>
                                    <li>{{Desc}}</li>
                                </ul>
                                <ul>
                                    <li>身高:{{height}}cm</li>
                                    <li>头围:{{head}}cm</li>
                                </ul>
                                <ul>
                                    <li>体重:{{weight}}kg</li>
                                </ul>
                                </li>
                            </ul>
                    </div>
                </van-tab>
                <van-tab title="身高曲线">
                       <div id="list">
                            <ul id="uls">
                                <li>
                                <ul>
                                    <li>
                                        <span>{{time}}</span>
                                        
                                    </li>
                                        
                                    <van-icon class="jia" name="plus" @click="news"/>
                                </ul>
                                <ul>
                                    <li>{{Desc}}</li>
                                </ul>
                                <ul>
                                    <li>身高:{{height}}cm</li>
                                    <li>头围:{{head}}cm</li>
                                </ul>
                                <ul>
                                    <li>体重:{{weight}}kg</li>
                                </ul>
                                </li>
                            </ul>
                    </div>
                </van-tab>
                <van-tab title="体重曲线">
                       <div id="list">
                            <ul id="uls">
                                <li>
                                <ul>
                                    <li>
                                        <span>{{time}}</span>
                                        
                                    </li>
                                        
                                    <van-icon class="jia" name="plus" @click="news"/>
                                </ul>
                                <ul>
                                    <li>{{Desc}}</li>
                                </ul>
                                <ul>
                                    <li>身高:{{height}}cm</li>
                                    <li>头围:{{head}}cm</li>
                                </ul>
                                <ul>
                                    <li>体重:{{weight}}kg</li>
                                </ul>
                                </li>
                            </ul>
                    </div>
                </van-tab>
                <van-tab title="头围曲线">
                       <div id="list">
                            <ul id="uls">
                                <li>
                                <ul>
                                    <li>
                                        <span>{{time}}</span>
                                        
                                    </li>
                                        
                                    <van-icon class="jia" name="plus" @click="news"/>
                                </ul>
                                <ul>
                                    <li>{{Desc}}</li>
                                </ul>
                                <ul>
                                    <li>身高:{{height}}cm</li>
                                    <li>头围:{{head}}cm</li>
                                </ul>
                                <ul>
                                    <li>体重:{{weight}}kg</li>
                                </ul>
                                </li>
                            </ul>
                    </div>
                </van-tab>
            </van-tabs>
            
       </div>

       
    </div>

</template>

<script >
import axios from 'axios'
import { Toast, CouponList } from 'vant';
export default {
    
    data() {
        return {
            name:"Growth",
            Desc:"",
            head:"",
            height:"",
            weight:"",
            time:""

        };
   
    },
    
    methods: {
    onClickLeft() {
        this.$router.push("/time")
    },
    onClickRight() {
     
    },
    news(){
       


    }
    
    },
    mounted(){
        
       if(localStorage.getItem("Token")){
        var token = localStorage.getItem("Token");
        axios({
            method:"get",
            url:"http://10.8.157.61/showBaby",
            params:{userId:token}
        }).then((data)=>{
            
            var myDate = new Date()
            this.time = myDate.toLocaleString()
    
            this.Desc=data.data.babyDesc
            this.head=data.data.head
            this.height=data.data.heright
            this.weight=data.data.weight
           
        })
       }else{
           Toast("请登录查看")
           this.$router.push("/login")
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
        width: 100%;
        height:46px;
    }
    #content{
        display: flex;
        flex: 1;
        flex-direction: column
    }
   #list{
       width: 85%;
       background: pink;
       height: 100px;
       /* margin:10px 0;  */
       margin:10px auto;
       border-radius: 20px;
       padding: 10px;
       
   }
</style>
