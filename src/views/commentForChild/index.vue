<template>
  <div>
    <headerTop/>
    <div class="img">
      <van-uploader :after-read="onRead" accept="image/gif, image/jpeg, image/png" multiple class="imgLoading">
        <i class="iconfont icon-shangchuan"></i>
      </van-uploader>
    </div>
    <div v-if="imgs.length"  class="imgsShow">
      <img :src="item" class="imgItem" v-for="(item,index) in imgs" :key="index" >
    </div>
    <van-button type="danger" class="toServe" @click="toServe">提交审核</van-button>
  </div>
</template>

<script>
  import headerTop from '@/components/header'
  import axios from 'axios'
  import {Toast} from 'vant';

  export default {
    name: "uploading",
    components: {
      headerTop
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
      },


      onRead(event) {
        const imgBase = event.content
        const str = 'base64,'
        const indexNum = imgBase.indexOf(str)
        // console.log(indexNum)
        const imgBase64 = imgBase.substring(indexNum+7)
        // console.log(imgBase64)
        this.imgs = [...this.imgs,imgBase]
        let formData = new FormData()
        formData.append('myFile', imgBase64)
        axios.post('http://211.67.177.56:8080/hhdj/nationComment/submitSummary.do', formData,{
          headers: {
            'Content-Type': 'multipart/form-data',
            // 'Content-Type':'application/x-www-form-urlencoded',
            // 'Content-Type':'application/json'
          }
        }).then(res => {
          console.log(res)
        })
      },
      toServe() {
        if (this.imgs.length >= 1) {
          console.log("post请求没写")
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
