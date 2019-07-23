<template>
    <div>
        <div id="top">
            <van-nav-bar
            title="设置"
            left-text="返回"
            fixed
            left-arrow
            @click-left="onClickLeft"
           
            />

        </div>
        <div id='body'>
            <div id="headImg"> 
              <van-uploader  :max-count="1" capture='camera' v-model="fileList" :after-read="afterRead" :preview-size='75' style="margin:0"/> 
              
            </div>
            <p>1111111</p>
            <div id="userInfos">
                <van-address-edit
                :area-list="areaList"
                show-postal
                show-delete
                show-set-default
                show-search-result
                :search-result="searchResult"
                @save="onSave"
                @delete="onDelete"
                @change-detail="onChangeDetail"
                />
            </div>
        </div>
       <div id="btn">

       </div>
    </div>
</template>
<script>
import AreaList from '@/data/AreaList'
export default {
    name:'Setting',
    data(){
        return {
            username:'',
            areaList:AreaList,
            searchResult: [],
            fileList:[]
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1);
        },
     
        afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
        },
         onSave() {
            Toast('save');
        },
        onDelete() {
            Toast('delete');
        },
        onChangeDetail(val) {
            if (val) {
                this.searchResult = [{
                    name: '黄龙万科中心',
                    address: '杭州市西湖区'
                }];
            } else {
                this.searchResult = [];
            }
        }
    }
}
</script>
<style scoped>
#headImg{
    margin: 0 auto;
    margin-top: 66px;
    /* width: 100%; */
    width: 62px;
    height: 62px;
    padding: 10px 0 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:50%;
    overflow: hidden; 
    border: 1px solid #cecece;
}

#body>p{
    width: 100%;
    height: 30px;
    line-height: 30px;
    /* background: red; */
    text-align: center;
    font-size: 14px;
    font-weight: bold;
}
</style>
