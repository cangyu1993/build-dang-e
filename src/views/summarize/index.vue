<template>
  <div>
    <headerTop/>
    <div class="imgAndFont">
      <img src="./reviewing.png" class="img">
      <p class="title">正在审核中</p>
    </div>
    <van-button type="danger" @click='handleClick' class="btn">关闭</van-button>

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
        title: '心得总结',
      }
    },
    methods: {
      changeTitle() {
        this.$store.commit('CHANGE-HEADERTEXT', this.title)
      },
      handleClick() {
        this.$router.back(-1)
      }
    },
    created() {
      this.changeTitle()
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
  .imgAndFont {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    .img{
      width: 90px;
      height: 90px;
    }
    .title{
      margin-top: 20px;
      font-size: 14px;
      color: #666;
    }
  }
  .btn{
    margin-top: 100px;
    width: 70%;
    left: 15%;
    border-radius: 6px;
  }
</style>
