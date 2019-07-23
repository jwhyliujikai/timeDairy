<template>
    <div id="Life">
        <div id="header">
            <ul>
            <router-link to='/life' tag="li" style="background:rgb(248,248,248)">关注</router-link>
             <router-link to='/community' tag="li">社区</router-link>
             <router-link to="/superpro" tag="li">优品</router-link>
            </ul>
            
        </div>
        <div id='body'>
            <router-view></router-view>
            
            
        </div>
    </div>
</template>
<script>

export default {
    name:'Life'
}
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #Life{
        overflow: auto;
    }
    #header{
       height: 46px;
       font-size: 16px;
       width: 100%;
       position: fixed;
       top: 0;
       left: 0;
       background: #fff;
       z-index: 100;
    }
    #header ul{
        margin: 8px auto;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
    }
    #header li{
        list-style: none;
        float:left;
        line-height: 25px;
        width: 80px;
        height: 25px;
        text-align: center;
        margin: 0 5px;
    }
    #body{
        height: 500px;
        margin-bottom: 46px;
    }
</style>
