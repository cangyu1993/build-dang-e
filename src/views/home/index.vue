<template>
  <div>
    <div class="header">
      <img src="./login.png" class="login">
      <router-link to="/login" class="title">
        登录
      </router-link>
    </div>
    <div class="sider">
      <van-swipe :autoplay="3000" class="sider-item">
        <van-swipe-item v-for="(item,index) in imgs" :key="index">
          <img :src='item.imgUrl' class="imgSize" @click="hanleClick(item.url)">
        </van-swipe-item>
      </van-swipe>
    </div>

  </div>
</template>


<script>
  import axios from 'axios'

  export default {
    name: "Home",
    data() {
      return {
        imgs: [],
      }
    },
    methods: {
      getImg() {
        axios.get(`http://211.67.177.56:8080/hhdj/carousel/carouselList.do?type=0`).then(res => {
          // console.log(res)
          if (res.data.code == 1) {
            this.imgs = res.data.rows
            // console.log(this.imgs)
          }
        }).catch(err => {
          console.log(err)
        })
      },
      hanleClick(url) {
        this.$router.push({
          name:'news',
          params: {id: url}
        })
      }
    },
    created() {
      this.getImg()
    }

  }
</script>

<style scoped lang="scss">
  .header {
    width: 100%;
    height: 45px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 998;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #c50206;
    .login {
      height: 30px;
      width: 2.5rem;
      margin-left: 20px;
    }
    .title {
      text-decoration: none;
      font-size: 17px;
      color: #fff;
      margin-right: 20px;
    }
  }

  .sider {
    margin-top: 45px;
    .sider-item {
      height: 180px;
      .imgSize {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
