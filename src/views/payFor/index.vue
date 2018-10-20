<template>
  <div>
    <headerTop/>
    <div class="mainContent">
      <p class="title">请选择支付方式</p>

      <div class="payFor" @click="handleImgOne">
        <div class="left">
          <i class="iconfont icon-weixin3" style="color: #1afa29"></i>
          <span class="payForName">微信</span>
        </div>
        <img src="./imgs/right.png" class="right">
      </div>
      <van-dialog
        v-model="weixinpay"
        :show-confirm-button='false'
        :close-on-click-overlay="true"
      >
        <p class="payweixin">微信支付</p>
        <img src="./imgs/wechat.png" class="imgmamama">
      </van-dialog>
      <van-dialog
        v-model="anypay"
        :show-confirm-button='false'
        :close-on-click-overlay="true"
      >
        <p class="payweixin">支付宝支付</p>
        <img src="./imgs/alipay.png" class="imgmamama">
      </van-dialog>

      <div class="payFor" @click="patforany">
        <div class="left">
          <i class="iconfont icon-zhifubao"></i>
          <span class="payForName">支付宝</span>
        </div>
        <img src="./imgs/right.png" class="right">
      </div>

    </div>
  </div>
</template>

<script>
  import headerTop from '@/components/header'
  import axios from 'axios'

  export default {
    name: "index",
    components: {
      headerTop
    },
    data(){
      return{
        weixinpay:false,
        anypay:false
      }
    },
    methods: {
      changeTitle() {
        const title = '党费缴纳'
        this.$store.commit('CHANGE-HEADERTEXT', title)
      },
      handleImgOne(){
         this.weixinpay = true
      },
      patforany(){
        this.anypay = true
      }
    },
    created() {
      this.changeTitle()
    }
  }
</script>

<style scoped lang="scss">
.mainContent{
  margin-top: 50px;
  .title{
    font-size: 14px;
    font-weight: 700;
    padding: 10px 10px;
    border-bottom: 1px solid #ccc;
  }
  .payweixin{
    text-align: center;
    font-size: 25px;
    line-height: 2;
  }
  .imgmamama{
    width: 80%;
    height: 80%;
    margin-left: 30px;
  }
  .payFor{
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    border-bottom: 1px solid #ccc;
    .left{
      display: flex;
      align-items: center;
      .iconfont{
        font-size: 50px;
        color: #1296db;
      }
      .payForName{
        margin-left: 10px;
        font-size: 18px;
        color: #666;
      }
    }
    .right{
      height: 15px;
      width: 15px;
    }
  }
}
</style>
