<template>
  <div class="footerList">

    <router-link  class="item" :class="{active:$route.name === 'Home' }"  to="/">
      <i class="iconfont icon-dang"></i>
      <div class="icon-title">首页</div>
    </router-link>

    <router-link  class="item" :class="{active:$route.name === 'earlyNews'}"  to="/earlyNews" >
      <i class="iconfont icon-xiaoxi"></i>
      <div class="icon-title">消息早知道</div>
    </router-link>

    <router-link  class="item" :class="{active:$route.name === 'mineMsg'}"  to="/mineMsg" >
      <i class="iconfont icon-wodedangxuan"></i>
      <div class="icon-title">我的党建</div>
    </router-link>

  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
.footerList{
  width: 100%;
  height: 48px;
  padding: 5px 0;
  box-sizing: border-box;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .item{
    width: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #666;
    .iconfont{
      font-size: 30px;
    }
    .icon-title{
      font-size: 10px;
    }
  }
  .active{
    border-top: 2px solid #c7000a;
    color:#c7000a;
  }
}

</style>
