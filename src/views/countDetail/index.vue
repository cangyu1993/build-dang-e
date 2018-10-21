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
        <div class="item">
          <div class="item-left">
            <p class="title">互动发帖</p>
            <p class="time">2018-10-19 21:01:04</p>
          </div>
          <div class="item-right">
            +0.1
          </div>
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
    data(){
      return{
        page:1,
        content:[]
      }
    },
    methods: {
      changeTitle() {
        const title = '积分明细'
        this.$store.commit('CHANGE-HEADERTEXT', title)
        const token = this.$store.state.token
        axios.get(`http://211.67.177.56:8080/hhdj/integral/integralList.do?page=${this.page}&rows=10`).then(res => {
          console.log(res)
          if (res.data.code == 1) {
            this.content = [...this.content, ...res.data.rows]
            // console.log(this.dataMsg)
          }
        }).catch(err => {
          console.log(err)
        })
      },
      onLoad() {
        this.page = this.page + 1
        this.getData()
      }
    },
    created() {
      this.changeTitle()
    }

  }
</script>

<style scoped lang="scss">
 .list{
   margin-top: 45px;
   .item{
     padding: 10px 10px;
     display: flex;
     justify-content: space-between;
     border-bottom: 1px solid #ccc;
     box-sizing: border-box;
     .item-left{
       .title{
         font-size: 18px;
         color: #666;
       }
       .time{
         padding: 5px 0;
         font-size: 16px;
         color: #ccc;
         }
     }
     .item-right{
       font-size: 16px;
       color: red;
     }
   }
 }
</style>
