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
