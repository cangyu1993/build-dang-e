<template>
  <div>
    <headerTop/>

    <div class="redbgc">
        <p class="count">{{userData.totalScore}}</p>
    </div>

    <router-link to="/home/countDetail" class="fristLink">
      <div class="left">
        <img src="./imgs/icon_01.png" class="img1">
        <p class="title">积分明细</p>
      </div>
      <img src="./imgs/right.png" class="img2">
    </router-link>
    
    <div class="countRoules">
      <p class="roule">积分规则</p>
      <img src="./imgs/wenhao.png" class="img2">
    </div>

    <div class="item">
      <span class="leftFont">登陆APP</span>
      <span class="rightCount">5</span>
    </div>
    <div class="item">
      <span class="leftFont">完善个人信息</span>
      <span class="rightCount">2</span>
    </div>
    <div class="item">
      <span class="leftFont">查看积分</span>
      <span class="rightCount">1</span>
    </div>
    <div class="item">
      <span class="leftFont">按时缴纳党费</span>
      <span class="rightCount">10</span>
    </div>
    <div class="item">
      <span class="leftFont">查看通知</span>
      <span class="rightCount">2</span>
    </div>
    <div class="item">
      <span class="leftFont">了解学院工作动态</span>
      <span class="rightCount">5</span>
    </div>
    <div class="item">
      <span class="leftFont">上交思想汇报审核通过</span>
      <span class="rightCount">5</span>
    </div>
    <div class="item">
      <span class="leftFont">主动学习相关文件</span>
      <span class="rightCount">10</span>
    </div>
    <div class="item">
      <span class="leftFont">认真撰写心得总结并上交，经审核通过</span>
      <span class="rightCount">5</span>
    </div>
    <div class="item">
      <span class="leftFont">提交个人总结，并参与评议</span>
      <span class="rightCount">2</span>
    </div>
    <div class="item">
      <span class="leftFont">积极参与互动</span>
      <span class="rightCount">5</span>
    </div>
    <div class="item">
      <span class="leftFont">学习党建知识</span>
      <span class="rightCount">5</span>
    </div>
    <div class="item">
      <span class="leftFont">学习党史</span>
      <span class="rightCount">10</span>
    </div>
    <div class="item">
      <span class="leftFont">创先争优事迹</span>
      <span class="rightCount">10</span>
    </div>
    <div class="item">
      <span class="leftFont">学党章，学习近平总书记系列讲话</span>
      <span class="rightCount">10</span>
    </div>
    <div class="item">
      <span class="leftFont">关注并积极参与特色活动</span>
      <span class="rightCount">3</span>
    </div>
    <div class="item">
      <span class="leftFont">用镜头记录两学一做过程中令人感动的人和事</span>
      <span class="rightCount">5</span>
    </div>
    <div class="item">
      <span class="leftFont">制度化、常态化建设</span>
      <span class="rightCount">5</span>
    </div>
  </div>
</template>

<script>
  import headerTop from '@/components/header'
  import axios from 'axios'
  import { Toast } from 'vant';

  export default {
    name: "personIntegral",
    components: {
      headerTop
    },
    data() {
      return {
        userData: ""
      }
    },
    methods: {
      changeTitle() {
        const idCard = JSON.parse(sessionStorage.getItem('user')).idCard
        if (idCard) {
          const title = '个人量化积分'
          this.$store.commit('CHANGE-HEADERTEXT', title)
          this.userData = this.$store.state.userDetail
          axios.get('http://211.67.177.56:8080/hhdj/user/userInfo.do').then(res=>{
            // console.log(res)
          })
          // console.log(this.userData)
        }else {
          Toast('登陆状态失效，请重新登陆！');
          setTimeout(()=>{
            this.$router.push('/login')
          },1500)
        }
      },
    },
    created() {
      this.changeTitle()
    }
  }
</script>

<style scoped lang="scss">
  .redbgc {
    margin-top: 45px;
    width: 100%;
    height: 145px;
    background: url("./imgs/jifen.png");
    background-size: 100% 100%;
    position: relative;
    .count{
      font-size: 18px;
      position: absolute;
      right: 170px;
      bottom: 60px;
      color: #fff;
    }
  }
  .fristLink{
    padding: 10px 10px;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
       .left{
         display: flex;
         justify-content: flex-start;
         align-items: center;
         .img1{
           width: 30px;
           height: 30px;
         }
         .title{
           margin-left: 10px;
           font-size: 16px;
           color: #666;
         }
       }
    .img2{
      width: 15px;
      height: 15px;
    }
  }
  .countRoules{
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(238, 238, 238);
    .roule{
      font-size: 14px;
      color: #444;
    }
  }
  .item{
    padding: 5px 10px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    .leftFont{
      font-size: 14px;
      color: rgb(153, 153, 153);
    }
    .rightCount{
      color: red;
      font-size: 12px;
    }
  }
</style>
