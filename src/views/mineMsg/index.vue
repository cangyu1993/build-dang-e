<template>
  <div>
    <div class="header-new">我的党建</div>
    <div class="content">
      <img :src="userData.avartor" class="img" v-if="isShow">
      <img src="./imgs/yuan.png" class="img" v-else>
      <router-link to="/login">
        <p class="userName">{{userData.username}}</p>
      </router-link>
    </div>
    <div class="userDetail">

      <div @click="handleToMsg" class="message">
        <div class="lfetFor">
          <img src="./imgs/01.png" class="img1">
          <p class="nameFor">个人信息</p>
        </div>
         <div class="img2">
           <img src="./imgs/right.png" >
         </div>
      </div>

      <div @click="personIntegral" class="message">
        <div class="lfetFor">
          <img src="./imgs/02.png" class="img1">
          <p class="nameFor">个人量化积分</p>
        </div>
         <div class="img2">
           <img src="./imgs/right.png" >
         </div>
      </div>
      <div @click="changePassword" class="message">
        <div class="lfetFor">
          <img src="./imgs/03.png" class="img1">
          <p class="nameFor">修改密码</p>
        </div>
         <div class="img2">
           <img src="./imgs/right.png" >
         </div>
      </div>
      <div @click="payForMoney" class="message">
        <div class="lfetFor">
          <img src="./imgs/04.png" class="img1">
          <p class="nameFor">党费缴纳</p>
        </div>
         <div class="img2">
           <img src="./imgs/right.png" >
         </div>
      </div>
    </div>
    <van-button type="danger"
                v-if="isShow"
                class="btn"
                @click="outServer"
    >退出登录</van-button>
    <FooterItem/>
  </div>
</template>

<script>
  import FooterItem from '@/components/footer'
  import axios from 'axios'

  export default {
    name: "index",
    components: {
      FooterItem,
    },
    data() {
      return {
        userData: {
          avartor: 'http://imgsrc.baidu.com/forum/w%3D580%3B/sign=705fdc71bc3533faf5b6932698e8fc1f/d31b0ef41bd5ad6eb44331958ccb39dbb6fd3c12.jpg',
          username: ''
        },
        isShow: false
      }
    },
    methods: {
      getData() {
        const user = JSON.parse(sessionStorage.getItem('user'))
        if (!user) {
          this.userData.username = '您未登录，请点击登录'
        } else {
          this.isShow = true
          this.userData.username = user.username
        }
        let userJsonStr = sessionStorage.getItem('user')
        let tryData = JSON.parse(userJsonStr)
        // console.log(tryData)
        if (tryData) {
          this.userData.avartor = tryData.header
        }
        this.$store.commit('SAVE-USER-DETAIL',tryData)
      },
      outServer(){
        this.isShow = false
        sessionStorage.clear()
        this.getData()
      },
      handleToMsg(){
        const user = JSON.parse(sessionStorage.getItem('user'))
        // console.log(status)
        if(user){
          this.$router.push('/home/personalInformation')
        }else {
          this.$router.push('/login')
        }
      },
      changePassword(){
        const user = JSON.parse(sessionStorage.getItem('user'))
        // console.log(status)
        if(user){
          this.$router.push('/home/changePassword')
        }else {
          this.$router.push('/login')
        }
      },
      payForMoney(){
        const user = JSON.parse(sessionStorage.getItem('user'))
        // console.log(status)
        if(user){
          this.$router.push('/home/payFor')
        }else {
          this.$router.push('/login')
        }
      },
      personIntegral(){
        const user = JSON.parse(sessionStorage.getItem('user'))
        if(user){
          this.$router.push('/home/personIntegral')
        }else {
          this.$router.push('/login')
        }
      }
    },
    created() {
      this.getData()
    },
    mounted(){
      document.addEventListener('plusready', function() {
        var webview = plus.webview.currentWebview();
        plus.key.addEventListener('backbutton', function() {
          webview.canBack(function(e) {
            if(e.canBack) {
              webview.back();
            } else {
              var first = null;
              plus.key.addEventListener('backbutton', function() {
                //首次按键，提示‘再按一次退出应用’
                if (!first) {
                  first = new Date().getTime();
                  this.$toast.success('再按一次退出应用');
                  console.log('再按一次退出应用');
                  setTimeout(function() {
                    first = null;
                  }, 1000);
                } else {
                  if (new Date().getTime() - first < 1500) {
                    plus.runtime.quit();
                  }
                }
              }, false);
            }
          })
        });
      });
    }
  }
</script>

<style scoped lang="scss">
  .header-new {
    width: 100%;
    height: 45px;
    background-color: #c50206;
    text-align: center;
    font-size: 20px;
    line-height: 45px;
    color: #fff;
  }

  .content {
    height: 3.75rem;
    width: 100%;
    background-color: #c50206;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .img {
      width: 62px;
      height: 62px;
      border-radius: 50%;
    }
    .userName {
      margin-top: 20px;
      color: #fff;
      font-size: 14px;
    }
  }

  .userDetail {
    .message {
      height: 60px;
      width: 7.5rem;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      .lfetFor{
        padding-left: 20px;
        display: flex;
        align-items: center;
        .img1{
          width: 40px;
          height: 40px;
        }
        .nameFor{
          margin-left: 20px;
          font-size: 18px;
          color: #666;
        }
      }
      .img2{
        padding-right: 20px;
      }
    }
  }

  .btn{
    left: 5%;
    width: 90%;
    border-radius: 10px;
  }
</style>
