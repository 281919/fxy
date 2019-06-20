<template>
<div class='content-mid'>
  <div class='content-tab'>
  <div class='box box-left'>
       
  <a href="#" class="button">
        <span class='icon'><img src="../assets/left.png" alt=""></span>
        <!-- <span class='icon'><img src="../assets/xm1.png" alt=""></span> -->
        <div class='button-icon'>
          <!-- <div class='icon-2'><img src="" alt=""></div> -->
          <div class='icon-2'><i class='el-icon-video-camera-solid'></i></div>
          <div class='icon-button'><span>案例仿真</span></div>
          </div>
        
      </a>
  </div>
  <div class='box box-center'>
       
  <a href="#" class="button">
        <span class='icon'><img src="../assets/center.png" alt=""></span>
        <div class='button-icon'>
          <!-- <div class='icon-2'><img src="" alt=""></div> -->
          <div class='icon-2'><i class='el-icon-video-play'></i></div>
          <div class='icon-button'><span>经典判决</span></div>
          </div>
        
      </a>
  </div>
  <div class='box box-right'>
  
  <a href="#" class="button">
        <span class='icon'><img src="../assets/right.png" alt=""></span>
        <div class='button-icon'>
          <div class='icon-2'><i class='el-icon-office-building'></i></div>
          <div class='icon-button'><span>相关法律</span></div>
          </div>
        
      </a>
  </div>
  <div class='bottom-1'>
  <el-button type="primary" round>申报视频</el-button>
  </div>
  <div class='bottom-2'>
    <p>建议使用火狐浏览器，谷歌浏览器或者360极速浏览器</p>
  </div>
  </div>
</div>

  
</template>

<script>
export default {
  name:'fxy-content'
}
</script>

<style>

.content-mid{
  width:1024px;
  height:485px;
  margin: 0 auto;
  background:url(../assets/blue.jpg) repeat;
}
.content-mid .box{
  width: 205px;
  height: 220px;
  float: left;
  margin: 120px 68px;
}
.content-tab{
  margin:0 auto;
}
.box-left .icon img{
  width: 174px;
  height: 155px;
  display: block;
  margin: 0 auto;
  /* background-color: blue; */
  /* transition: all 0.2s;
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  -moz-transition: all 0.2s; */
}
/* .box-left .icon img hover{
  transform:scale(1.2);
  -webkit-transform:scale(1.2);
  -o-transform:scale(1.2);
  -moz-transform:scale(1.2);
} */

.box-center .icon img{
  width: 174px;
  height: 155px;
  display: block;
  margin: 0 auto;
}
.box-right .icon img{
  width: 174px;
  height: 155px;
  display: block;
  margin: 0 auto;
}
.box .button{
  width: 205px;
  height: 217px;
  line-height: 45px;
  display: block;
  font-size: 18px;
  font-weight: bolder;
  
  text-decoration:none;
  /* background-color: blue; */
}
.button-icon{
  /* background-color: #ccc; */
  width:202;
  height:50px;
 

}
.button-icon .icon-2{
  width:35px;
  height:30px;
  
  float:left;
  position:relative;
  top:10px;

}
.box-left .button .icon-2 i{
  display:block;
  width:35px;
  position:relative;
  left:32px;
  top:8px;
}
.box-center .button .icon-2 i{
  display:block;
  width:35px;
  position:relative;
  left:47px;
  top:9px;
}
.box-right .button .icon-2 i{
  display:block;
  width:35px;
  position:relative;
  left:9px;
  top:9px;
}
.icon-2 img{
  width:35px;
  position:relative;
  left:25px;
  top:-4px;
}
.button-icon .icon-button{
  width:150px;
  height:31px;
  /* background-color:green; */
  position:relative;
  top:10px;
  float:left;
}
.icon-button span{
  display:block;
  position:relative;
  height:35px;
  line-height:35px;
  color:black;
  font-family:'微软雅黑'
  /* background-color:yellow; */
}
.box-left .icon-button{
  position:relative;
  left:-10px;
}
.box-center .icon-button{
  position:relative;
  left:6px;
}
.box-left .icon-button{
  position:relative;
  left:-9px;
}
.box-right .icon-button{
  position:relative;
  left:-33px;
}
.bottom-1{
  position:relative;
  top:-100px;
}
.bottom-2{
  position:relative;
  top:-80px;
  font-size:14px;
  font-family:'微软雅黑';
  color:black;
}



</style>

