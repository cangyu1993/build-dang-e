<template>
  <div>
    <headerTop/>
    <div class="img">
      <div v-if="imgs.length" class="imgsShow">
        <img :src="item" class="imgItem" v-for="(item,index) in imgs" :key="index">
      </div>
      <uploading @getimgs="getSonimgs"/>
    </div>
    <van-button type="danger" class="toServe" @click="toServe">提交审核</van-button>
  </div>
</template>

<script>
  import uploading from '@/components/uploading.vue'

  import headerTop from '@/components/header'

  import axios from 'axios'

  import {Toast} from 'vant';

  export default {
    components: {
      headerTop,
      uploading
    },
    data() {
      return {
        token: '',
        imgs: []
      }
    },
    methods: {
      changetitle() {
        const title = '个人总结'
        this.$store.commit('CHANGE-HEADERTEXT', title)
        let user = JSON.parse(sessionStorage.getItem('user'))
        // console.log(user)
      },
      getSonimgs(e) {
        this.imgs = [...this.imgs, e]
      },
      toServe() {
        if (this.imgs.length >= 1) {

          let token = JSON.parse(sessionStorage.getItem('token'))
          let comment_id='CEBBD1A4FF2147C8B9ED0CEA6AE90BCF'

          let forDate = new FormData()
          forDate.append('pic_list',this.imgs)
          forDate.append('comment_id',comment_id)
          forDate.append('user_id',token)
          axios.post('http://211.67.177.56:8080/hhdj/nationComment/submitSummary.do',forDate,{
            headers: {
              'Content-Type': 'multipart/form-data',
              'token':token
            }
          }).then(res=>{
            console.log(res)
            if (res.data.code == 0) {
              Toast('提交内容重复');
            }else {
              Toast.success(res.data.msg);
            }
          })
        } else {
          Toast('提交内容为空，请重新填写！');
        }
      }
    },
    created() {
      this.changetitle()
    }
  }
</script>

<style scoped lang="scss">


  .img {
    margin-top: 60px;
    margin-left: 20px;
    display: flex;
    flex-wrap: wrap;
    .imgLoading {
      border: 1px dashed #666;
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
      border-radius: 6px;
      .iconfont {
        font-size: 50px;
        color: #ccc;
      }
    }
  }

  .imgsShow {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-left: 20px;
    .imgItem {
      width: 100px;
      height: 100px;
    }
  }

  .toServe {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 100px;
    width: 100%;
  }
</style>
