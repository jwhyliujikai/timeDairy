
<template>
    <div id="box">
        <header>
            <van-nav-bar
                title="时光记"
                left-text
                left-arrow
                fixed
                @click-left="onClickLeft"
          
            />
        </header>
        <div id="content">
            <ul>
                <li>
                    <!-- 展示 -->
                <van-uploader id="ig" v-model="fileList" multiple :after-read="onRead" :max-count="1" preview-size="250"/>

                </li>
                 
                <li>
                    <input v-model="text1" type="text" placeholder="描述">
                </li>

                    <!-- 上传 -->
                <button id="btn" @click="btn">开始导入</button>
                
            </ul>
        </div> 
    
    </div>

</template>

<script>
import axios from "axios"
import { Uploader, Toast } from 'vant'

import qs from "qs"
export default {
    data(){
        
         return {   
             fileList:[],
             name:"",
             headerImg:"",
             str:{},
             text1:"",
             size:"",
             strs:"",
           
             
             
        }
    },
     methods: {
        onClickLeft() {
            this.$router.push("/time")
        },
       
        btn(){
            //    console.log(this.fileList[0])        

            if(localStorage.getItem("Token")){
                
                axios({
                method:"post",
                url:"http://47.95.218.254/upLoadImg",
                dataType:"json",
                data:{userId:24,imgUrl:this.strs,imgDesc:this.text1},
                headers: {'Content-Type':'multipart/form-data'},
                }).then((data)=>{
                    console.log(data)
                    Toast("上传成功")
                }).catch((error)=>{
                    console.log(error)
                    Toast("上传失败")
                })
       
            }else{
                Toast("请登录")
                this.$router.push("/login")
                console.log(localStorage.getItem("TOken"))
            }
           

        },
        onRead(file){
            console.log(file)
            var formData = new FormData()
            this.strs = file.file.name
            
            console.log(this.strs)
            formData.append("avatarFile",file.file)
            formData.append("userId",24)
            formData.append("imgDesc",this.text1)
            formData.append("imgUrl",this.str.content)

            console.log(formData.get("userId"))
      
            
            
        }

    },
    

}
</script>

<style scoped>
    #box{
        height:100%;
        display:flex;
        flex-direction: column;
        
    }
    header{
        height:10%;
    }
    #content{
        height:90%;
        display:flex;
        justify-content: center;
        align-items: center;
        
    }
    #content ul{
        width:80%;
        height:60%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
    }
    #content ul li:nth-child(1){
        width:76%;
        height:74%;
        border-radius:10px;
        overflow: hidden;
        border:1px solid red
    }

     #content ul li:nth-child(2){
         height:30%;
         width:100%;
         display:flex;
         flex-direction:column;
         justify-content: center;
         align-items: center;
         font-size:18px
     }
     #content ul li:nth-child(2) input{
         margin-bottom:5%;
         border:0;
         outline:none;
         border-bottom:1px solid #cecece;
         width:100%
     }

     #btn{
         background:#cecece;
         border:0;
         outline:none;
         border-radius:20px;
         width:200px;
         height:50px;         
     }
    
</style>
