<template>
  <div class="wantchengebgc">
    <headerTop/>
    <van-list
      :offset=1
      @load="onLoad"
      loading-text="加载中..."
      :immediate-check=false
      check
    >
      <div class="muchContent" v-for="(item,index) in commonts" :key="index">
        <div class="msg">
          <img :src='item.header' class="img">
          <div class="nameAnd">
            <p class="name">{{item.username? item.username:'游客'}}</p>
            <i class="iconfont icon-shijianlishijilujishizhongbiaoxianxing time">{{item.timeFormat}}</i>
          </div>
        </div>
        <div class="content">{{item.comment}}</div>
      </div>
    </van-list>
    <div class="lefttt">还没有更多数据</div>

    <div class="commont">
      <van-field
        v-model="value"
        placeholder="评论内容"
        class="inputT"
      />
      <van-button type="danger" class="btn" @click="commentsToAboue">评论</van-button>
    </div>
  </div>
</template>

<script>
  import headerTop from '@/components/header'
  import axios from 'axios'
  import {Toast} from 'vant';

  export default {
    name: "index",
    components: {
      headerTop
    },
    data() {
      return {
        userData: {},
        value: '',
        commonts: [],
        page:1
      }
    },
    methods: {
      changeTitle() {
        const title = "党员云互动"
        this.$store.commit('CHANGE-HEADERTEXT', title)
        let userJsonStr = sessionStorage.getItem('user')
        let tryData = JSON.parse(userJsonStr)
        this.userData = tryData
      },
      getData() {
        let id = this.$route.params.id
        axios.get(`http://211.67.177.56:8080/hhdj/forum/forumCommentList.do?page=${this.page}&rows=10&forum_id=${id}`).then(res => {
          // console.log(res)
          this.commonts = [...this.commonts, ...res.data.rows]
        })
      },
      onLoad(){
        this.page = this.page + 1
        this.getData()
      },
      commentsToAboue(){
        let token = JSON.parse(sessionStorage.getItem('token'))
        let id = this.$route.params.id
        if (this.value) {
          let forDate = new FormData()
          forDate.append('forum_id',id)
          forDate.append('comment',this.value)
          axios.post(`http://211.67.177.56:8080/hhdj/forum/addComment.do`,forDate,{
            headers: {
              'Content-Type': 'multipart/form-data',
              'token':token
            }
          }).then(res=>{
            // console.log(res)
            if (res.data.code == 0){
              Toast(res.data.msg);
            }else {
              Toast.success('发布成功');
              this.value = ''
              this.getData()
            }
          })
        }else {
          Toast("评论为空！");
        }
      }
    },
    created() {
      this.changeTitle()
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
  .wantchengebgc {
    width: 100vw;
    min-height: 100vh;
    background-color: #f1f1f1;
    padding: 60px 20px 60px 20px;
    box-sizing: border-box;
    .muchContent {
      background-color: #fff;
      padding: 10px 20px;
      border-radius: 6px;
      margin-bottom: 10px;
      .msg {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .img {
          width: 30px;
          height: 30px;
        }
        .nameAnd {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 10px;
          .name {
            font-size: 14px;
            color: #333;
          }
          .time {
            font-size: 12px;
            color: #ccc;
          }
        }
      }
      .content {
        margin-top: 10px;
        font-size: 16px;
        color: #333;
      }
    }
    .lefttt {
      margin-top: 20px;
      font-size: 14px;
      color: #666;
      text-align: center;
    }
    .commont {
      position: fixed;
      z-index: 999;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      .inputT {
        width: 80%;
      }
      .btn {
        width: 20%;
      }
    }
  }
</style>
