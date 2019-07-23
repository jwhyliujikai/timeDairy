
<template>
    <div id="box">
        <header>
            <van-nav-bar
                title="时光记"
                left-text
                left-arrow
                fixed
                @click-left="onClickLeft"
                @click-right="onClickRight"
            />
        </header>
        <div id="content">
            <ul>
                <li>
                    <!-- 展示 -->
                    <van-uploader id="img" v-model="fileList" multiple :max-count="1" preview-size="300" :before-read="beforeRead"/>
                    
                </li>
                 
                <li>
                    <p>上传宝宝从小到大的样子</p>
                    <p>每一寸时光都是长大的样子</p>
                </li>

                    <!-- 上传 -->
                <button id="btn" @click="btn">开始导入</button>
          
                
                
                
            </ul>
        </div> 
    
    </div>

</template>

<script>
import axios from "axios"
import { Uploader } from 'vant'
export default {
    data(){
         return {   
             fileList: [
                 
            ]
        }
    },
     methods: {
        onClickLeft() {
            
        },
        onClickRight() {
        
        },
        afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log("aaaa");
        let formData = new FormData();
        formData.append("file",res.file);
        this.$axios.post(url,formData,{
            headers: { //添加请求头
                "Content-Type": "multipart/form-data"
            }
        }).then(res=>{
            console.log(res);
        })

           
        },
          beforeRead(file,detail) {
            if (file.type !== 'image/jpeg'){
                Toast('请上传 jpg 格式图片');
                return false;
            }else{
                console.log(file)
                console.log(detail)
            }
            
            return true;
        },
        btn(){
            //    console.log(this.fileList[0])
            axios({
            method:"post",
              url:"http://10.8.157.61//upLoadImg",
              params:{userId:24,image_file:this.fileList[0].file,imgId:1}
            

             }).then((data)=>{
               console.log(data)
            })

        },
        

        
       
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
        width:100%;
        height:60%;
        border-radius:10px;
        overflow: hidden;
    }
     #content ul li:nth-child(1) #img{
         width:100%;
         height:100%;
         
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
     #content ul li:nth-child(2) p{
         margin-bottom:5%
     }

     #btns{
         background:#cecece;
         border:0;
         outline:none;
         border-radius:20px;
         width:200px;
         
     }
    
</style>
