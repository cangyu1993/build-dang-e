<template>
  <div>
    <headerTop />
    <div v-html="content.title" class="addpadding"></div>
    <div class="content">
      央视网消息：7月26日至27日，省部级主要领导干部“学习习近平总书记重要讲话精神，迎接党的十九大”专题研讨班在京举行。中共中央总书记、国家主席、中央军委主席习近平在开班式上发表重要讲话，提出了一系列新的重要思想、重要观点、重大判断、重大举措，具有很强的思想性、战略性、前瞻性、指导性。讲话内涵丰富、干货满满，小编进行了梳理提炼，以飨读者。(樊帆 陈腾)
    </div>
    <img src="http://oowantxlb.bkt.clouddn.com/upload/rear/a115f76d7d78d03c73950aa1e49db118.jpg" class="img">
  </div>
</template>

<script>
  import axios from 'axios'
  import headerTop from '@/components/header'
  export default {
    components: {
      headerTop
    },
    data() {
      return {
        title:'随时随地学',
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
          // console.log(res)
          if (res.data.code == 1) {
            this.content.title = res.data.data.title
            this.content.article = res.data.data.content
            // console.log(this.content)
          }
        }).catch(err => {
          console.log(err)
        })
      },
      changeTitle(){
        this.$store.commit('CHANGE-HEADERTEXT',this.title)
      }
    },
    created() {
      this.getNews()
      this.changeTitle()
    }
  }
</script>

<style scoped lang="scss">
  .addpadding{
   margin-top: 45px;
    padding: 10px 20px;
    font-size: 40%;
  }
  .content{
    font-size: 35%;
    line-height: 2;
    padding: 10px 20px;
    color: rgb(34, 34, 34);
  }
  .img{
    width: 90%;
    padding-left: 20px;
  }
</style>
