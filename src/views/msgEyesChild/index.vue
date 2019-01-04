<template>
  <div>
    <headerTop/>
    <div class="allBoth">
      <div class="title" v-html="pageContent.title"></div>
      <div class="content" v-html="pageContent.content"></div>
    </div>
  </div>
</template>

<script>
  import headerTop from '@/components/header'
  import axios from 'axios'

  export default {
    name: "index",
    components: {
      headerTop
    },
    data() {
      return {
        title: '信工新闻眼',
        pageContent: {
          title: '',
          content: ''
        }
      }
    },
    methods: {
      getData() {
        this.$store.commit('CHANGE-HEADERTEXT', this.title)
        const id = this.$route.params.id
        axios.get(`http://211.67.177.56:8080/hhdj/news/newsContent.do?newsId=${id}`).then(res => {
          console.log(res)
          if (res.data.code == 1) {
            this.pageContent.title = res.data.data.title
            this.pageContent.content = res.data.data.content
          }
        }).catch(err => {
          console.log(err)
        })
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
  .allBoth {
    margin-top: 45px;
    .title{
      font-size: 50%;
      padding: 10px 20px;
    }
    .content{
      font-size: 30%;
      padding: 10px 20px;
      line-height: 1.5;
      text-indent:30px
    }
  }
</style>
