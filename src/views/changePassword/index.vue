<template>
  <div>
    <headerTop/>
    <div class="mainContent">
      <div>
        <p class="titleFor">旧密码</p>
        <van-field v-model="changeData.oldPwd" class="input" type="password"/>
      </div>
      <div>
        <p class="titleFor">新密码</p>
        <van-field v-model="changeData.newPwd" class="input" type="password"/>
      </div>
      <div>
        <p class="titleFor">确认密码</p>
        <van-field v-model="changeData.againPwd" class="input" type="password"/>
      </div>

      <van-button type="danger" class="btn" @click="changeToServer">确定</van-button>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'vant';
  import axios from 'axios'
  import headerTop from '@/components/header'

  export default {
    name: "index",
    components: {
      headerTop
    },
    data() {
      return {
        changeData: {
          oldPwd: '',
          newPwd: '',
          againPwd: ''
        }
      }
    },
    methods: {
      getData() {
        const title = '修改密码'
        this.$store.commit('CHANGE-HEADERTEXT', title)
      },
      changeToServer(){
        let token = JSON.parse(sessionStorage.getItem('token'))
        const newPassword = this.changeData.newPwd
        const againPassword = this.changeData.againPwd
        if ( newPassword === againPassword) {
          axios.get(`http://211.67.177.56:8080/hhdj/user/updatePwd.do?newPwd=${newPassword}&oldPwd=${this.changeData.oldPwd}`).then(res=>{
            // console.log(res)
            if (res.data.code == 0) {
              Toast(res.data.msg);
              this.$router.push('/login')
            }else {
              Toast.success(res.data.msg);
              this.$router.back(-1)
            }
          }).catch(err=>{
            Toast.fail('请求失败！');
          })
        }else{
          Toast.fail('密码输入不一致！');
        }
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .mainContent {
    box-sizing: border-box;
    margin-top: 100px;
    width: 80%;
    margin-left: 10%;
    .titleFor {
      font-size: 18px;
      color: #666;
      padding: 10px 0;
    }
    .input {
      border: 1px solid #666;
      border-radius: 6px;
      width: 100%;
    }
    .btn {
      width: 100%;
    }
  }
</style>
