<template>
  <div>
    <div class="header-new">我的党建</div>
    <div class="content">
      <img :src="userData.avartor" class="img">
      <router-link to="/login">
        <p class="userName">{{userData.username}}</p>
      </router-link>
    </div>
    <div class="userDetail">

      <router-link to="/" class="message">
        <div class="lfetFor">
          <img src="./imgs/01.png" class="img1">
          <p class="nameFor">个人信息</p>
        </div>
         <div class="img2">
           <img src="./imgs/right.png" >
         </div>
      </router-link>

      <router-link to="/" class="message">
        <div class="lfetFor">
          <img src="./imgs/02.png" class="img1">
          <p class="nameFor">个人量化积分</p>
        </div>
         <div class="img2">
           <img src="./imgs/right.png" >
         </div>
      </router-link>
      <router-link to="/" class="message">
        <div class="lfetFor">
          <img src="./imgs/03.png" class="img1">
          <p class="nameFor">修改信息</p>
        </div>
         <div class="img2">
           <img src="./imgs/right.png" >
         </div>
      </router-link>
      <router-link to="/" class="message">
        <div class="lfetFor">
          <img src="./imgs/04.png" class="img1">
          <p class="nameFor">党费缴纳</p>
        </div>
         <div class="img2">
           <img src="./imgs/right.png" >
         </div>
      </router-link>
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
          avartor: 'http://img.bimg.126.net/photo/OyQCP7deIj1rlSU50IKRJw==/3945997698523498081.jpg',
          username: ''
        },
        isShow: false
      }
    },
    methods: {
      getData() {
        if (!this.userData.username) {
          this.userData.username = '您未登录，请点击登录'
        } else {
          this.isShow = true
        }
      },
      outServer(){
        this.$router.push('/login')
        this.isShow = false
      }
    },
    created() {
      this.getData()
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
