<template>
  <div id="inner">
     <p><span>关注你感兴趣的人</span></p>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">

       <div id='wnav'>
             <ul id='nav'>
                 <li v-for="(item,index) in userlist" > 
                    <p @click.stop="attention($event,item.id)">
                        <van-icon name="checked" color="orange" id='icon' size="14" v-show='false'  />
                        <img  :src='item.headImg'/>
                    </p>
                    <p>{{item.userMonicker}}</p>
                   </li>
             </ul>
             </div>
             <p id='yjgz'><span @click="yjgz"  >一键关注</span></p>
            
             </van-pull-refresh>
             
  </div>
</template>

<script>
import axios from 'axios';
import {Toast} from 'vant';
export default {
  name: 'Attentioninfos',
  data(){
    return{
       isLoading: false,
       userlist:[],
       attionslist:[],
    }
  },
  methods: {
    attention(event,id){   
      var el=event.currentTarget;
      if($(el).find('i').css('display')=='none'){
        $(el).find('i').css({'display':'block'});
        this.attionslist.push(id);
        
        
      }else{
        $(el).find('i').css({'display':'none'});
        var index=this.attionslist.indexOf(id);
        this.attionslist.splice(index,1);
      }
      // if(!$(el).find('#icon').attr('v-show')){
      //       $(el).find("#icon").attr({'v-show':'true'});  
      //       console.log('关注了')
      // }else{      
      //       $(el).find("#icon").attr({'v-show':'false'});
      //       console.log('取关')  
      // }
    },
    yjgz(){
      if(!localStorage.getItem('Token')){
          Toast('请先登录');
      }else{
            if(this.attionslist.length==0){
              this.$router.push('/community');
          }else{
              for(var i=0;i<this.attionslist.length;i++){
                  axios({
                    url:'http://10.8.157.61/addAtt',
                    params:{
                      userId:localStorage.getItem("Token"),
                      addUserAttId:this.attionslist[i]
                    }
                  }).then((data)=>{
                    
                  })
              }
            this.$router.push('/attentioninfos');
          }

      }
      
      
    },
    adduser(){
      console.log(this.attionslist)
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        axios('http://10.8.157.61/headList').then((data)=>{
          this.userlist=data.data;
          $('#nav li i').css({'display':'none'})
        })
      }, 500);
    }
  },
  mounted(){
    axios('http://10.8.157.61/headList').then((data)=>{
      this.userlist=data.data;
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
padding:0;
}
li{
  list-style: none;
}

#inner{
  margin-top:46px; 
  height:100%;
  /* margin-bottom: 46px; */
} 
#inner>p:nth-of-type(1){
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
#inner>p:nth-of-type(1) span{
  display: block;
  height: 20px;
  width: 110px;
  /* background: rgb(248,248,248); */
  line-height: 20px;

}
#wnav{
  width: 90%;
  height:auto;
  /* background: pink; */
  margin: 0 auto;
}
#nav{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
#nav li{
 width: 30%; 
 /* background: lightblue; */
 margin-top: 20px;

}
#nav li img{
  width: 100%;
  border-radius: 50%;

}
#nav li p:nth-of-type(1){
  width: 70%;
  margin: 0 auto;
  position: relative;
}
#nav li p:nth-of-type(2){
  width: 100%;
  text-align: center;
  font-size: 12px;
  overflow: hidden;

}
#icon{
  position: absolute;
  top: 0;
  right:10px;
}
#yjgz{
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  margin-top: 10px;
}
#yjgz span{
display: block;
margin: 0 auto;
width: 30%;
background:rgb(215,213,213);
text-align: center;
border-radius:10px;
}
</style>
