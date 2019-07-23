<template>
    <div style="margin-top:45px">
        <div class="box">
            <van-sidebar v-model="activeKey">
                <van-sidebar-item title="阶段" />
                <van-sidebar-item title="功效" />
                <van-sidebar-item title="五谷" />
                 <van-sidebar-item title="肉蛋类" />
                <van-sidebar-item title="海鲜类" />
                <van-sidebar-item title="菌类" />
                 <van-sidebar-item title="水果类" />
                <van-sidebar-item title="豆制类" />
                <van-sidebar-item title="坚果类" />
            </van-sidebar>
            <div class="main">
                <ul>
                    <li>
                        <h4>孕期</h4>
                        <div class="r-main">
                            <div><img src=""/><h5>孕早期</h5></div>
                            <div><img src=""/><h5>孕早期</h5></div>
                            <div><img src=""/><h5>孕早期</h5></div>
                        </div>
                        
                       
                    </li>
                    
                </ul>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'Yingyang',
    data(){
        return{
             activeKey: 0,
             title:'营养食谱'
        }
        
    },
    mounted(){
        this.$emit('toparent',this.title)
    }
}
</script>
<style scoped=''>
    .box{
        display: flex
    }
    .main{
        background: red;
        flex: 1;
    }
    .main li{
        height: 100px;
        background:blue;
        display: flex;
        flex-direction: column;
        justify-content: space-between
    }
    .main img{
        height: 50px;
        width: 15vw;
        background: red;
    }
    .r-main{
        display: flex;
        justify-content: space-around;
    }
</style>
