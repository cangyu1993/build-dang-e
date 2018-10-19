<template>
  <div>
    <headerTop/>
    <div style="margin-top: 45px">
      <van-list
        :offset=1
        @load="onLoad"
        loading-text="加载中..."
        :immediate-check=false
        check
      >
        <div @click="handleClickToChild(item.newsId)"
                     class="content"
                     v-for="(item,index) in dataMsg" :key="index"
        >
          <img :src="item.pic" class="left-img">
          <div class="right">
            <div class="title">{{item.title}}</div>
            <div class="data-eyeIcon">
              <span class="data-detail">{{item.currentTime}}</span>
              <div class="eye-count">
                <img src="./eye.png" class="iconEyes">
                <span class="count">{{item.count}}</span>
              </div>
            </div>
          </div>
        </div>
      </van-list>
      <div class="toastContent">
        没有更多数据了...
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import headerTop from '@/components/header'

  export default {
    name: "index",
    components: {
      headerTop
    },
    data() {
      return {
        page: 1,
        dataMsg: [],
        loading:true
      }
    },
    methods: {
  // {}
      getData() {
        const title = this.$store.state.listTable.title
        this.$store.commit('CHANGE-HEADERTEXT',title)
        // console.log(title)
        switch (title) {
          case '政治学习' :
            axios.get(`http://211.67.177.56:8080/hhdj/news/newsList.do?page=${this.page}&rows=10&type=8`).then(res => {
              // console.log(res)
              if (res.data.code == 1) {
                this.dataMsg = [...this.dataMsg, ...res.data.rows]
                // console.log(this.dataMsg)
              }
            }).catch(err => {
              console.log(err)
            })
          case '党建一点通':
            axios.get(`http://211.67.177.56:8080/hhdj/news/newsList.do?page=${this.page}&rows=10&type=3`).then(res => {
              // console.log(res)
              if (res.data.code == 1) {
                this.dataMsg = [...this.dataMsg, ...res.data.rows]
                // console.log(this.dataMsg)
              }
            }).catch(err => {
              console.log(err)
            })
          case '党员亮身份':
            axios.get(`http://211.67.177.56:8080/hhdj/news/newsList.do?page=${this.page}&rows=10&type=5`).then(res => {
              // console.log(res)
              if (res.data.code == 1) {
                this.dataMsg = [...this.dataMsg, ...res.data.rows]
                // console.log(this.dataMsg)
              }
            }).catch(err => {
              console.log(err)
            })
          case '随时随地学':
            axios.get(`http://211.67.177.56:8080/hhdj/news/newsList.do?page=${this.page}&rows=10&type=6`).then(res => {
              // console.log(res)
              if (res.data.code == 1) {
                this.dataMsg = [...this.dataMsg, ...res.data.rows]
                // console.log(this.dataMsg)
              }
            }).catch(err => {
              console.log(err)
            })
          case '制度建设':
            axios.get(`http://211.67.177.56:8080/hhdj/news/newsList.do?page=${this.page}&rows=10&type=4`).then(res => {
              // console.log(res)
              if (res.data.code == 1) {
                this.dataMsg = [...this.dataMsg, ...res.data.rows]
                // console.log(this.dataMsg)
              }
            }).catch(err => {
              console.log(err)
            })
          case '特色活动':
            axios.get(`http://211.67.177.56:8080/hhdj/news/newsList.do?page=${this.page}&rows=10&type=1`).then(res => {
              // console.log(res)
              if (res.data.code == 1) {
                this.dataMsg = [...this.dataMsg, ...res.data.rows]
                // console.log(this.dataMsg)
              }
            }).catch(err => {
              console.log(err)
            })
          default:
            return title
        }
      },
      onLoad(){
        this.page = this.page + 1
        this.getData()
      },
      handleClickToChild(id){
        this.$router.push({name: 'listShowChild',params: {id: id}})
        // console.log("6666")
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .content {
    border-bottom: 1px solid #ccc;
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .left-img {
      width: 80px;
      height: 80px;
      padding: 10px 10px;
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        font-size: 15px;
        line-height: 1.5;
        padding-bottom: 20px;
        color: #666;
      }
      .data-eyeIcon {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 255px;
        .data-detail {
          font-size: 10px;
          color: #999;
        }
        .eye-count {
          margin-right: 5px;
          display: flex;
          align-items: center;
          .iconEyes {
            width: 14px;
            height: 10px;
            margin-right: 10px;
          }
          .count {
            font-size: 10px;
            color: #999;
          }
        }
      }
    }
  }
  .toastContent{
    padding: 10px 0;
    text-align: center;
    color: #999;
    font-size: 14px;
  }
</style>
