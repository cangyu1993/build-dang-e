<template>
  <div>
    <headerTop/>
    <div class="mainContent">
      <div class="title" v-html="mainContent.title"></div>
      <div class="content" v-html="mainContent.content"></div>
    </div>

    <div class="selectAndNext">
      <select name="666" id="select" @change="seleteData">
        <option value="请选择">请选择</option>
        <option :value="item.id"
                v-for="(item,index) in seletes"
                :key="index"
        >
          {{item.branch}}
        </option>
      </select>
      <van-button type="danger" class="next" @click="nextTo">下一步</van-button>
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
        mainContent: {
          title: '',
          content: ''
        },
        seletes:[],
        dangId:""
      }
    },
    methods: {
      changeTitle() {
        const title = "民主评议"
        this.$store.commit('CHANGE-HEADERTEXT', title)
      },
      getData() {
        axios.get('http://211.67.177.56:8080/hhdj/nationComment/getComment.do').then(res => {
          // console.log(res)
          this.mainContent.title = res.data.titleDesc
          this.mainContent.content = res.data.content
        }).catch(err => {
          console.log(err)
        })
      },
      getSelete(){
        axios.get('http://211.67.177.56:8080/hhdj/branch/findAll.do').then(res=>{
          // console.log(res)
          this.seletes = res.data.rows
        })
      },
      seleteData(event){
        // console.log(event)
        const msgSelete = event.target.value
        // console.log(msgSelete)
        this.dangId = msgSelete
      },
      nextTo(){
        this.$router.push({
          name:'partyMember',
          params:{id:this.dangId}
        })
      }
    },
    created() {
      this.changeTitle()
      this.getData()
      this.getSelete()
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
  .mainContent {
    margin-top: 45px;
    padding: 0 10px;
    .title {
      padding: 20px 0;
      font-size: 20px;
      color: #666;
      text-align: center;
    }
    .content {
      font-size: 30%;
      color: #666;
      line-height: 2;
    }
  }
  .selectAndNext{
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
    #select{
      height: 40px;
      width: 4rem;
      border-radius: 6px;
      background: #c50206;
      color: #fff;
      font-size: 30%;
    }
    .next{
      border-radius: 6px;
    }
  }
</style>
