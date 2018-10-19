<template>
  <div>
    <headerTop/>
    <div class="list">
      <van-list
        :offset=1
        @load="onLoad"
        loading-text="加载中..."
        :immediate-check=false
        check
      >
        <div class="listItem" v-for="(item,index) in dataDetail" :key="index">
          <div class="left">
            <img :src="item.header" class="img">
            <p class="title">{{item.username}}</p>
          </div>
          <div class="right">{{item.branchName}}</div>
        </div>
      </van-list>
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
        id: '',
        page: 1,
        dataDetail: []
      }
    },
    methods: {
      changeTitle() {
        const title = "参评党员"
        const id = this.$route.params.id
        this.id = id
        // console.log(id)
        this.$store.commit('CHANGE-HEADERTEXT', title)
        this.getData()
      },
      getData() {
        axios.get(`http://211.67.177.56:8080/hhdj/nationComment/userList.do?select_branch=${this.id}&user_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHQiOjE1NDA1NjExOTc1MTAsInVpZCI6MiwicHdkIjoiZTEwYWRjMzk0OWJhNTlhYmJlNTZlMDU3ZjIwZjg4M2UiLCJpYXQiOjE1Mzk5NTYzOTc1MTB9.YnTnnw32mDdW0A5HwvPnK3Llx82r7Tw0MJZdWI0C6fs&page=${this.page}&rows=10`).then(res => {
          console.log(res)
          this.dataDetail = [...this.dataDetail, ...res.data.rows]
        })
      },
      onLoad() {
        this.page = this.page + 1
        this.getData()
      },
    },
    created() {
      this.changeTitle()
    }
  }
</script>

<style scoped lang="scss">
  .list {
    margin-top: 45px;
    .listItem{
      padding: 10px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      .left{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        .img{
          width: 40px;
          height: 40px;
        }
        .title{
          line-height: 40px;
          margin-left: 5px;
          font-size: 14px;
          color: #666;
        }
      }
      .right{
        font-size: 14px;
        color: #666;
      }
    }
  }
</style>
