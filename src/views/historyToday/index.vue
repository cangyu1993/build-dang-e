<template>
  <div>
    <headerTop/>
    <div class="maincontent" v-html="content">
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
    data(){
      return{
       content:''
      }
    },
    methods:{
      getData(){
        axios.get(`http://211.67.177.56:8080/hhdj/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70505%2Findex.html`).then(res=>{
         console.log(res)
          this.content = res.data
        })
      }
    },
    created(){
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

<style scoped>
.maincontent{
  margin-top: 50px;
  padding: 0 20px;
  font-size: 30%;
}
</style>
