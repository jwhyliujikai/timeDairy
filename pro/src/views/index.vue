<template>
    <div>
        
       <router-view></router-view>
       <div id='footer'>
           <ul>
               
           </ul>
       </div>
    </div>
</template>
<script>
export default {
    name:"Index"
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
    #footer{
        width: 100%;
        height: 40px;
        background: red;
        position:fixed;
        bottom: 0;
        left: 0;
    }
</style>

