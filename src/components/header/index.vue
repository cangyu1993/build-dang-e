<template>
  <div class="header">
    <img src="./houtui.png" class="icon-font" @click='handle'>
    <span class="title">{{this.$store.state.headerText}}</span>
    <span style="width: 30px"></span>
  </div>
</template>

<script>
  export default {
    name: "headerTop",
    methods:{
      handle(){
        this.$router.back(-1)
      },
    }
  }
</script>

<style scoped lang="scss">
  .header {
    height: 45px;
    width: 100%;
    background-color: #c50206;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    .icon-font {
      position: relative;
      bottom: -6px;
      height: 30px;
      width: 30px;
      float: left;
      color: #fff;
    }
    .title {
      font-size: 20px;
      line-height: 45px;
      color: #fff;
      float: left;
    }

  }
</style>
