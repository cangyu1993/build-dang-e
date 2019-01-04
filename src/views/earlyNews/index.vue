<template>
  <div>
    <div class="header-new">通知早知道</div>
    <div class="mainContent" >
        <router-link :to="{name:'notice',params:{id:item.newsId}}" v-for="(item,index) in newsMsg" :key="index">
          <div class="list-toast" >
            <div class="left">
              <img src="./dbs.png" class="img" >
            </div>
            <div class="right">
              <p class="toastDetail01">{{item.title}}</p>
              <p class="toastDetail02">{{item.currentTime}}</p>
            </div>
          </div>
        </router-link>
    </div>
    <p class="msgData">没有数据了</p>
    <van-loading
      size="70px"
      v-if="loading"
      class="loading"
    />
    <FooterItem/>
  </div>
</template>

<script>
  import FooterItem from '@/components/footer'
  import axios from 'axios'
  import {Toast} from 'vant';

  export default {
    name: "index",
    components: {
      FooterItem,
    },
    data() {
      return {
        title: '新闻早知道',
        newsMsg: [],
        loading:false
      }
    },
    methods: {
      getNews() {
        this.loading = true
        axios.post('http://211.67.177.56:8080/hhdj/news/newsList.do?page=1&rows=10&type=2').then(res => {
          // console.log(res)
          if (res.data.code == 1) {
            this.loading = false
            let newData = [...res.data.rows]
            let newArr = newData.splice(0,newData.length)
            this.newsMsg = newArr
          }
        }).catch(err => {
          console.log(err)
          Toast.fail('获取信息失败!');
          this.loading = false
        })
      },
    },
    created() {
      this.getNews()
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
   .loading{
    position: fixed;
    z-index: 998;
    top: 70%;
    left: 40%;
  }
  .header-new {
    width: 100%;
    height: 45px;
    background-color: #c50206;
    text-align: center;
    font-size: 20px;
    line-height: 45px;
    color: #fff;
  }

  .msgData {
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
    color: #666;
    font-weight: 700;
  }

  .mainContent {
    .list-toast{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px solid #bbb;
      .left{
        .img{
          width: 35px;
          height: 35px;
          padding: 20px 40px ;
        }
      }
      .right{
         width: 240px;
        .toastDetail01{
          font-size: 14px;
          color: #333;
        }
        .toastDetail02{
          margin-top: 1px;
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
</style>
