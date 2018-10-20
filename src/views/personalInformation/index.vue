<template>
  <div>
    <headerTop/>
    <div class="purpose">编辑</div>
    <div class="personData">
      <van-cell-group>
        <div class="item img-frist">
          <span class="tot">头像</span>
          <img :src="userData.header" class="img">
        </div>
        <div class="item">
          <van-field v-model="userData.leadPerson"
                     label="姓名"
                     :disabled="stutes"
                     label-align="left"
                     input-align="right"
          />
        </div>
        <div class="item">
          <van-field v-model="userData.idCard"
                     label="身份证"
                     disabled
                     label-align="left"
                     input-align="right"
          />
        </div>
        <div class="item">
          <van-field v-model="userData.hometown"
                     label="家庭住址"
                     :disabled="stutes"
                     label-align="left"
                     input-align="right"
          />
        </div>
        <div class="item">
          <van-field v-model="userData.address"
                     label="工作地址"
                     :disabled="stutes"
                     label-align="left"
                     input-align="right"
          />
        </div>
        <div class="item">
          <van-field v-model="userData.nation"
                     label="民族"
                     :disabled="stutes"
                     label-align="left"
                     input-align="right"
          />
        </div>
        <div class="item">
          <van-field v-model="userData.wxNum"
                     label="微信号"
                     :disabled="stutes"
                     label-align="left"
                     input-align="right"
          />
        </div>
        <div class="item">
          <van-field v-model="userData.qqNum"
                     label="qq号"
                     :disabled="stutes"
                     label-align="left"
                     input-align="right"
          />
        </div>
        <div class="item">
          <van-field v-model="userData.sex"
                     label="性别"
                     :disabled="stutes"
                     label-align="left"
                     input-align="right"
          />
        </div>
        <div class="item">
          <van-field v-model="userData.education"
                     label="最高学历"
                     :disabled="stutes"
                     label-align="left"
                     input-align="right"
          />
        </div>
        <div class="item">
          <van-field v-model="userData.jobRank"
                     label="职称"
                     :disabled="stutes"
                     label-align="left"
                     input-align="right"
          />
        </div>
        <div class="item">
          <van-field v-model="userData.salary"
                     label="薪资水平"
                     :disabled="stutes"
                     label-align="left"
                     input-align="right"
          />
        </div>

        <div class="item item-other">
          <span class="item-item">入党时间</span>
          <span class="item-item">{{userData.joinPartyTime}}</span>
        </div>

        <div class="item item-other">
          <span class="item-item">党费最后缴纳时间</span>
          <span class="item-item">{{userData.lastPayTime}}</span>
        </div>

        <div class="item item-other">
          <span class="item-item">当前身份</span>
          <span class="item-item">{{userData.partyIdentity}}</span>
        </div>
      </van-cell-group>
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
        userData: {},
        value: "666",
        stutes: false

      }
    },
    methods: {
      changeTitle() {
        const title = '个人信息'
        this.$store.commit('CHANGE-HEADERTEXT', title)
        this.userData = this.$store.state.userDetail
        // console.log(this.userData)
      },
    },
    created() {
      this.changeTitle()
    }

  }
</script>

<style scoped lang="scss">
  .purpose {
    font-size: 18px;
    color: #fff;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 1000;
  }

  .personData {
    margin-top: 45px;
    .img-frist{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tot{
        margin-left: 10px;
        font-size: 14px;
        color: #333;
      }
      .img{
        width: 50px;
        height: 50px;
      }
    }
    .item {
      padding: 5px;
      border-bottom: 1px solid #ccc;
    }
    .item-other {
      display: flex;
      justify-content: space-between;
      padding: 15px;
      .item-item {
        font-size: 14px;
        color: #333;
      }
    }
  }
</style>
