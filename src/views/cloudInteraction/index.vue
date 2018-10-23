<template>
  <div>
    <headerTop/>
    <div class="mainContent">
      <van-list
        :offset=1
        @load="onLoad"
        loading-text="加载中..."
        :immediate-check=false
        check
      >
        <div class="content clearfix" v-for="(item,index) in listData" :key="index">
          <div class="contentOne">
            <div class="content-left">
              <img :src="item.header" class="img">
              <div class="msg">
                <p class="user">{{item.username}}</p>
                <div class="timeAnd">
                  <i class="iconfont icon-shijianlishijilujishizhongbiaoxianxing"></i>
                  <span>{{item.currentTime}}</span>
                  <i class="iconfont icon-shengyinyinliangmianxing"></i>
                  <span>公开</span>
                </div>
              </div>
            </div>
            <div class="content-right">
              <p class="sort">
                党员互动
              </p>
            </div>
          </div>
          <div class="contentTwo">{{item.content}}</div>
          <router-link :to='{name:"cloudInteractionChild",params:{id:item.forumId}}' class="callback ">
            <i class="iconfont icon-xiaoxi1"></i>
            <span>回复</span>
          </router-link>
        </div>
      </van-list>
    </div>

    <div class="addcommont" @click="handclickTo">
      <i class="iconfont icon-xinzeng changebig"></i>
    </div>

    <van-popup
      class="inputToSer"
      v-model="show"
      position="bottom"
    >
      <van-field v-model="value" class="inputMsg"/>
      <div class="twoBtn">
        <van-button type="danger" class="btn" @click="suerToSer">确定</van-button>
        <van-button type="warning" class="btn" @click="cancelN">取消</van-button>
      </div>
    </van-popup>
  </div>

</template>

<script>
  import headerTop from '@/components/header'
  import axios from 'axios'
  import { Toast } from 'vant';
  export default {
    name: "index",
    components: {
      headerTop
    },
    data() {
      return {
        page: 1,
        listData: [],
        show: false,
        value: '',
      }
    },
    methods: {
      changeTitle() {
        const title = "党员云互动"
        this.$store.commit('CHANGE-HEADERTEXT', title)
      },
      getData() {
        axios.get(`http://211.67.177.56:8080/hhdj/forum/forumList.do?page=${this.page}&rows=10&type=0&cates=0`).then(res => {
          // console.log(res)
          this.listData = [...this.listData, ...res.data.rows]
          // console.log(this.listData)
        })
      },
      onLoad() {
        this.page = this.page + 1
        this.getData()
      },
      handclickTo() {
        this.show = true
      },
      cancelN(){
        this.show = false
      },
      suerToSer(){
        let token = JSON.parse(sessionStorage.getItem('token'))
        let formData=new FormData()
        formData.append('content',this.value)
        formData.append('type',"1")
        axios.post(`http://211.67.177.56:8080/hhdj/forum/saveForum.do`,formData,{
          headers: {
            'Content-Type': 'multipart/form-data',
            'token':token
          }
        }).then(res=>{
          console.log(res)
          if (res.data.code == 0){
            Toast('用户未登录');
            this.show = false
          }else {
            Toast.success('发布成功');
            this.show = false
            this.getData()
          }
        })
      }
    },
    created() {
      this.changeTitle()
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .mainContent {
    margin-top: 45px;
    .contentTwo {
      font-size: 18px;
      color: #444;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .callback {
      float: right;
      font-size: 16px;
      color: #666;
    }
    .clearfix::after {
      display: block;
      content: "";
      clear: both;
      height: 0;
    }
    .content {
      padding: 20px 10px;
      box-sizing: border-box;
      border-bottom: 6px solid #f1f1f1;
      .contentOne {
        display: flex;
        justify-content: space-between;
        .content-left {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .img {
            height: 35px;
            width: 35px;
          }
          .msg {
            margin-left: 10px;
            .user {
              font-size: 18px;
              color: #333;
            }
            .timeAnd {
              padding: 10px 0;
              font-size: 12px;
              color: #666;
            }
          }
        }
        .content-right {
          .sort {
            font-size: 14px;
            padding: 10px 20px;
            color: red;
            border: 1px solid red;
            border-radius: 20px;
          }
        }
      }
    }
  }

  .addcommont {
    position: fixed;
    z-index: 1000;
    right: 20px;
    bottom: 60px;
    color: red;
    .changebig {
      font-size: 60px;
    }
  }

  .inputToSer {
    width: 100%;
    height: 300px;
    background-color: #f1f1f1;
    .inputMsg{
      width: 90%;
      height: 210px;
      margin-left: 5%;
      margin-top: 10px;
      border-radius: 6px;
    }
    .twoBtn{
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      .btn{
        width: 100px;
        border-radius: 6px;
      }
    }
  }
</style>
