<template>
  <div>
    <div class="header">
      <img src="./houtui.png" class="icon-font" @click='handle'>
      <span class="title">随时随地学</span>
    </div>
    <div v-html="content.title" class="addpadding"></div>
    <div v-html="content.article"></div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        content: {
          title: '',
          article: '',
        }
      }
    },
    methods: {
      getNews() {
        const id = this.$route.params.id
        axios.get(`http://211.67.177.56:8080/hhdj/news/newsContent.do?newsId=${id}`).then(res => {
          console.log(res)
          if (res.data.code == 1) {
            this.content.title = res.data.data.title
            this.content.article = res.data.data.content
            console.log(this.content)
          }
        }).catch(err => {
          console.log(err)
        })
      },
      handle(){
        this.$router.push({
          name:'Home'
        })
      }
    },
    created() {
      this.getNews()
    }
  }
</script>

<style scoped lang="scss">
  .header {
    height: 45px;
    width: 100%;
    background-color: #c50206;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    .icon-font {
      position: relative;
      bottom: -6px;
      height: 30px;
      width: 30px;
      float: left;
      color: #fff;
    }
    .title{
      font-size: 20px;
      line-height: 45px;
      color: #fff;
      float: left;
      margin-left: 80px;
    }
  }
  .addpadding{
    padding-top: 45px;
  }
</style>
