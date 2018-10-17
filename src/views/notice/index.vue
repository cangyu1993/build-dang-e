<template>
    <div>
      <headerTop/>
      <div class="content">
         <div class="title">{{mainContent.bigTitle}}</div>
        <div v-html="mainContent.content" class="mainContent"></div>
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
      data(){
          return{
            title:'通知早知道',
            mainContent:{
              bigTitle:'',
              content:''
            }
          }
      },
        methods:{
          getData(){
            this.$store.commit('CHANGE-HEADERTEXT',this.title)
            const id = this.$route.params.id
            console.log(id)
            axios.get(`http://211.67.177.56:8080/hhdj/news/newsContent.do?newsId=${id}`).then(res=>{
              console.log(res)
              this.mainContent.bigTitle = res.data.data.title
              this.mainContent.content = res.data.data.content
            }).catch(err=>{
              console.log(err)
            })
          }
        },
      created(){
          this.getData()
      }
    }
</script>

<style scoped lang="scss">
 .content{
   margin-top: 45px;
   .title{
     padding: 10px 20px;
     font-size: 24px;
   }
   .mainContent{
     padding: 10px 15px;
     font-size: 30%;
   }
 }
</style>
