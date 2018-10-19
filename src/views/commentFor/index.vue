<template>
  <div>
    <headerTop/>
    <div class="btn">
      <van-button type="danger" class="btnItem" @click="ToChildren">个人总结</van-button>
      <van-button type="danger" class="btnItem" @click="ToMinZhu">民主评测</van-button>
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
    methods:{
      ToChildren(){
        this.$router.push('/home/study/commentFor/commentForChild')
      },
      ToMinZhu(){
        this.$router.push('/home/study/commentFor/MinZhuPingYi')
      },
      changeTitle(){
        const title = "掌上组织生活"
        this.$store.commit('CHANGE-HEADERTEXT',title)
      },
    },
    created(){
      this. changeTitle()
    }
  }
</script>

<style scoped lang="scss">
   .btn{
     margin-top: 40vh;
     display: flex;
     flex-direction: column;
     align-items: center;
     box-sizing: border-box;
     .btnItem{
       width: 70%;
       margin: 20px 0;
       border-radius: 6px;
     }
   }
</style>
