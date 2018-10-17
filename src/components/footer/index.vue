<template>
  <div class="footerList">

    <router-link to="/" class="footerListItem1" active-class="active">
      <div class="icon-list-01"></div>
      <p class="footer-title-01">首页</p>
    </router-link>

    <router-link to="/earlyNews" class="footerListItem2" active-class="active">
      <div class="icon-list-02"></div>
      <p class="footer-title-02">消息早知道</p>
    </router-link>

    <router-link to="/mineMsg" class="footerListItem3" active-class="active">
      <div class="icon-list-03"></div>
      <p class="footer-title-03">我的党建</p>
    </router-link>

  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  .footerList {
    width: 100%;
    height: 44px;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 998;
    display: flex;
    background-color: #fff;
    .footerListItem1 {
      width: 2.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon-list-01 {
        width: 21px;
        height: 26px;
        background: url("./imgs/01_grey.png");
        background-size: 100% 100%;
      }
      .footer-title-01 {
        color: #666;
        font-size: 10px;
      }
    }
    .footerListItem1.active{
      border-top: 2px solid red;
      .icon-list-01 {
        background: url("./imgs/01_red.png");
        background-size: 100% 100%;
      }
      .footer-title-01 {
        color: red;
      }
    }
    .footerListItem2 {
      width: 2.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon-list-02 {
        width: 21px;
        height: 26px;
        background: url("./imgs/02_grey.png");
        background-size: 100% 100%;
      }
      .footer-title-02 {
        color: #666;
        font-size: 10px;
      }
    }
    .footerListItem2.active{
      border-top: 2px solid red;
      .icon-list-02 {
        background: url("./imgs/02_red.png");
        background-size: 100% 100%;
      }
      .footer-title-02 {
        color: red;
      }
    }
    .footerListItem3 {
      width: 2.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon-list-03 {
        width: 21px;
        height: 26px;
        background: url("./imgs/03_grey.png");
        background-size: 100% 100%;
      }
      .footer-title-03 {
        color: #666;
        font-size: 10px;
      }
    }
    .footerListItem3.active{
      border-top: 2px solid red;
      .icon-list-03 {
        background: url("./imgs/03_red.png");
        background-size: 100% 100%;
      }
      .footer-title-03 {
        color: red;
      }
    }
  }
</style>
