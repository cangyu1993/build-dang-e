<template>
  <div>
    <div class="header">
      <img src="../login/login.png" class="login">
      <router-link to="/login" class="title" v-if="isShow">
        登录
      </router-link>
    </div>
    <div class="sider">
      <van-swipe :autoplay="3000" class="sider-item">
        <van-swipe-item v-for="(item,index) in imgs" :key="index">

          <!--<img :src='item.imgUrl' class="imgSize" @click="toDetail(item.url)">-->

          <router-link :to="{name: 'news',params: {id: item.url}}">
            <img :src='item.imgUrl' class="imgSize">
            <p class="imgTitle">{{item.title}}</p>
          </router-link>

        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="sixToLink">
      <router-link to="/home/msgEyes" class="ingAndName">
        <img src="./imgs/icon_01.png" class="link-img">
        <p class="name">信工新闻眼</p>
      </router-link>
      <router-link to="/home/study" class="ingAndName">
        <img src="./imgs/icon_03.png" class="link-img">
        <p class="name">掌上组织生活</p>
      </router-link>
      <div @click="cloudinteraction" class="ingAndName">
        <img src="./imgs/icon_05.png" class="link-img">
        <p class="name">党员云互动</p>
      </div>
      <div @click="formDangToList" class="ingAndName">
        <img src="./imgs/icon_04.png" class="link-img">
        <p class="name">党建一点通</p>
      </div>
      <div @click="FiveToList" class="ingAndName">
        <img src="./imgs/icon_06.png" class="link-img">
        <p class="name">党员亮身份</p>
      </div>
      <div @click="SixToShow" class="ingAndName">
        <img src="./imgs/icon_02.png" class="link-img" style="padding-left: 10px">
        <p class="name">党史上的今天</p>
      </div>
    </div>
    <div class="shiJiuBig">
      <img src="./imgs/banner01.png" class="shiJiuBig01">
    </div>
    <div class="homeLastPart">
      <div class="left"></div>
      <div class="right">
        <div @click="oneJump" class="right-item"></div>
        <router-link to="/home/shootHome" class="right-item"></router-link>
        <div @click="therrJump" class="right-item"></div>
        <div @click="fourJump" class="right-item"></div>
      </div>
    </div>
    <div style="height: 45px"></div>
    <FooterItem/>
  </div>
</template>


<script>
  import FooterItem from '@/components/footer'
  import axios from 'axios'

  export default {
    name: "Home",
    components:{
      FooterItem,
    },
    data() {
      return {
        imgs: [],
        isShow:true
      }
    },
    methods: {
      getImg() {
        const user = JSON.parse(sessionStorage.getItem('user'))
        if (user){
         this.isShow = false
        }
        axios.get(`http://211.67.177.56:8080/hhdj/carousel/carouselList.do?type=0`).then(res => {
          if (res.data.code == 1) {
            this.imgs = res.data.rows
          }
        }).catch(err => {
          console.log(err)
        })
      },
      formDangToList(){
        const title = '党建一点通'
        this.$store.commit('CHANGE-HEADERTEXT',title)
        this.$store.commit('CHANGGE-LISTTABLE-TITLE',title)
        this.$router.push('/home/listShow')
      },
      FiveToList(){
        const title = '党员亮身份'
        this.$store.commit('CHANGE-HEADERTEXT',title)
        this.$store.commit('CHANGGE-LISTTABLE-TITLE',title)
        this.$router.push('/home/listShow')
      },
      SixToShow(){
        const title = '党史上的今天'
        this.$store.commit('CHANGE-HEADERTEXT',title)
        this.$router.push('/home/historyToday')
      },
      oneJump(){
        const title = '随时随地学'
        this.$store.commit('CHANGE-HEADERTEXT',title)
        this.$store.commit('CHANGGE-LISTTABLE-TITLE',title)
        this.$router.push('/home/listShow')
      },
      therrJump(){
        const title = '制度建设'
        this.$store.commit('CHANGE-HEADERTEXT',title)
        this.$store.commit('CHANGGE-LISTTABLE-TITLE',title)
        this.$router.push('/home/listShow')
      },
      fourJump(){
        const title = '特色活动'
        this.$store.commit('CHANGE-HEADERTEXT',title)
        this.$store.commit('CHANGGE-LISTTABLE-TITLE',title)
        this.$router.push('/home/listShow')
      },
      cloudinteraction(){
        const user = JSON.parse(sessionStorage.getItem('user'))
        if (user) {
          this.$router.push('/home/cloudInteraction')
        }else {
          this.$router.push('/login')
        }
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
      position: relative;
      height: 180px;
      .imgSize {
        width: 100%;
        height: 100%;
      }
      .imgTitle {
        width: 100%;
        padding: 5px 0;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 666;
        background: rgba(0, 0, 0, .5);
        font-size: 12px;
        color: #ffffff;
      }
    }
  }

  .sixToLink {
    width: 100%;
    height: 200px;
    background: url("./imgs/bt_bg.png");
    background-size: 100% 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    .ingAndName {
      width: 2.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .link-img {
        width: 60px;
        height: 60px;
      }
      .name {
        font-size: 12px;
        color: #666;
      }
    }
  }

  .shiJiuBig {
    width: 100%;
    height: 90px;
    .shiJiuBig01 {
      width: 100%;
      height: 100%;
    }
  }

  .homeLastPart {
    width: 100%;
    height: 165px;
    background: url("./imgs/zhuanlan.png");
    background-size: 100% 100%;
    display: flex;
    justify-content: flex-start;
    .left{
      width: 2.5rem;
      height: 100%;
    }
    .right{
      width: 5rem;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      .right-item{
        height: 50%;
        width: 2.5rem;
      }
    }
  }

</style>
