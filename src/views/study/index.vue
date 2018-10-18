<template>
  <div>
    <headerTop/>
    <img src="./timg.jpg" class="img">
    <div class="fiveLink">
      <div @click="handleToList" class="linkItem">
        <img src="./icon1.png" class="imgItem">
        <p class="title">政治学习</p>
      </div>
      <router-link to="/home/study/thinkingReport" class="linkItem">
        <img src="./icon2.png" class="imgItem">
        <p class="title">思想汇报</p>
      </router-link>
      <div @click="hangClickToTwo" class="linkItem">
        <img src="./icon3.png" class="imgItem">
        <p class="title">心得总结</p>
      </div>
      <router-link to="/" class="linkItem">
        <img src="./icon4.png" class="imgItem">
        <p class="title">民主评议</p>
      </router-link>
      <div @click="ToMap" class="linkItem">
        <img src="./icon5.png" class="imgItem">
        <p class="title">流动党员找组织</p>
      </div>
    </div>
  </div>
</template>

<script>
  import headerTop from '@/components/header'

  export default {
    name: "index",
    components: {
      headerTop
    },
    data() {
      return {
        title: '掌上组织生活',
        userName:'',
      }
    },
    methods: {
      changeTitle() {
        this.$store.commit('CHANGE-HEADERTEXT', this.title)
        this.userName =this.$store.state.userData.username
      },
      hangClickToTwo(){
        if(this.userName){
          this.$router.push('/home/study/summarize')
        }else {
          this.$router.push('/login')
        }
      },
      handleToList(){
        const title = "政治学习"
        this.$store.commit('CHANGE-HEADERTEXT',title)
        this.$store.commit('CHANGGE-LISTTABLE-TITLE',title)
        this.$router.push('/home/listShow')
      },
      ToMap(){
        const title = "流动党员找组织"
        this.$store.commit('CHANGE-HEADERTEXT',title)
        this.$router.push('/home/study/Bmap')
      }

    },
    created() {
      this.changeTitle()
    }
  }
</script>

<style scoped lang="scss">
  .img {
    margin-top: 45px;
    width: 7.5rem;
    height: 186px;
    display: block;
  }
  .fiveLink{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .linkItem{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 2.5rem;
      height: 145px;
      .imgItem{
        height: 85px;
        width: 85px;
      }
      .title{
        margin-top: 10px;
        font-size: 14px;
        color: #666;
      }
    }
  }
</style>
