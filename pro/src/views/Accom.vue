<template>
    <div id="box">
        <header>
            <van-nav-bar
            title="成就"
            left-arrow
            fixed
             id="banner"  
             @click-left="onClickLeft"
            />
        </header>
        <div id="content">
            <ul>
                <li v-for="item in 10" :key="item">1</li>
               
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    name:"Accom",
    data(){
        return{};
    },
    methods:{
        onClickLeft() {
            this.$router.push("/time")
        }
    }
}
</script>

<style>
    #box{
        height:100%;
        display:flex;
        flex-direction: column
    }
    header{
        width:100%;
        height:10%;
    }
    #content{
        width:100%;
        height:90%;
        
    }
    #content ul{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:row;
        justify-content: space-around;
        align-items: center;
        flex-wrap:wrap
    }
    #content li{
        width:100px;
        height:100px;
        background:#eee;
        border-radius:5px;
        margin:2%
        
    }
</style>
