<template>
<div class="content" >
   <div class='content-left'>
     <img src="../assets/demo.png" alt="">
     </div>
     <div class='content-right'>
       <span>{{item}}</span>
     </div>
   
  </div>
  
</template>

<script>
export default {
  name:'fxy-head', 
  data(){
    return{
      item:"江西财经大学法学院实训系统"
    }
  }
}

</script>



<style>
body{
  /* background-color: #333; */
  margin-top:10px;
}
.content{
  background-color: rgb(235,240,243);
  width:1024px;
  height:120px;
  margin:0 auto;
}
.content-left{
  width:400px;
  height:120px;
  float:left;
}
.content-right{
  width:624px;
  height:120px;
  float:left;
}
.content-left img{
  width:180px;
  position: absolute;
  left:320px;
  top:65px;
}
.content-right span{
  font-family:'微软雅黑';
  font-weight:bold;
  font-size:30px;
  display:block;
  position:relative;
  top:40px; 
  left:-200px;
} 
</style>

