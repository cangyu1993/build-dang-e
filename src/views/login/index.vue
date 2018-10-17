<template>
  <div>
    <headerTop/>
    <div class="loginAll">

      <div class="loginMsg">
        <img src="./login.png" class="logo">
      </div>

      <div class="login-input">
        <input type="text"
               v-model="userData.idCard"
               class="userId"
               placeholder="身份证号码"
        >
        <input type="password"
               v-model="userData.password"
               class="userPassword"
               placeholder="密码"
        >
        <van-button type="danger" class="btn" @click="handliClick">登陆</van-button>
      </div>

    </div>
    <van-loading
      size="70px"
      v-if="loading"
    class="loading"
    />
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
        title: '登陆',
        userData: {
          idCard: '1001',
          password: '123456'
        },
        loading:false
      }
    },
    methods: {
      changeTitle() {
        this.$store.commit('CHANGE-HEADERTEXT', this.title)
      },
      handliClick(){
        this.loading = true
        axios.post('http://211.67.177.56:8080/hhdj/user/userLogin.do',this.userData).then(res=>{
          // console.log(res)
          if (res.data.code == 1) {
            Toast.success('登录成功');
            this.loading = false
            this.$router.back(-1)
          }else {
            Toast.fail('登录失败');
            this.loading = false
          }
        }).catch(err=>{
          Toast('请求失败！')
        })
      }
    },
    created() {
      this.changeTitle()
    }
  }

</script>

<style scoped lang="scss">
  .loading{
    position: fixed;
    z-index: 998;
    top: 70%;
    left: 40%;
  }
  .loginAll {
    width: 100%;
    height: 100vh;
    background-color: #c50206;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .loginMsg {
      margin-top: 90px;
      .logo{
        display: block;
        width: 80%;
        height: 80%;
        margin: 0 auto;
      }
    }
    .login-input {
      width: 6rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin-top: 30px;
      .userId {
        width: 6rem;
        height: 40px;
        font-size: 14px;
        border-radius: 10px;
        border: 1px solid #ff0;
        padding-left: 10px;
        background-color: #c50206;
      }
      .userPassword {
        width: 6rem;
        height: 40px;
        font-size: 14px;
        border-radius: 10px;
        margin-top: 20px;
        border: 1px solid #ff0;
        padding-left: 10px;
        background-color: #c50206;
        color: #ffffff;
      }
      .btn{
        width: 100%;
        margin-top: 10px;
        border-radius: 10px;
      }
      input::-webkit-input-placeholder {
        color: #ffffff;
      }
    }
  }
</style>
