<template>
  <div>
    <headerTop/>
    <div class="purpose" @click="changeMsg">{{this.stutes? "编辑":"保存"}}</div>
    <div class="personData">
      <van-cell-group>
        <div class="item img-frist">
          <span class="tot">头像</span>
          <img :src="userData.header" class="img" v-if="this.stutes">
          <label v-if="!this.stutes" class="img">
            <img :src="userData.header" class="img">
            <input type="file" style="display: none" @change="changeImg">
          </label>
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
        <div class="item item-other">
          <span class="item-item">性别</span>
          <span class="item-item item-color" v-if="stutes">{{userData.sex? '男':'女'}}</span>
          <van-radio-group v-model ='userData.sex'  v-else class="item-else">
            <van-radio name = "1">男</van-radio>
            <van-radio name = "0">女</van-radio>
          </van-radio-group>
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
          <span class="item-item item-color">{{userData.joinPartyTime}}</span>
        </div>


        <div class="item item-other">
          <span class="item-item">党费最后缴纳时间</span>
          <span class="item-item item-color">{{userData.lastPayTime}}</span>
        </div>

        <div class="item item-other">
          <span class="item-item">当前身份</span>
          <span class="item-item item-color" v-if="stutes">{{userData.partyIdentity}}</span>
          <select name="666" id="select" @change="seleteData" v-else>
            <option value="党员">党员</option>
            <option value="预备党员">预备党员</option>
            <option value="积极份子">积极份子</option>
          </select>
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
      headerTop,
    },
    data() {
      return {
        userData: {},
        value: "666",
        stutes: true,
        base64: '',
        imgUrl: '',
      }
    },
    methods: {
      changeTitle() {
        const title = '个人信息'
        this.$store.commit('CHANGE-HEADERTEXT', title)
        this.userData = JSON.parse(sessionStorage.getItem('user'))
        // console.log(this.userData)
      },
      getData() {
        let token = JSON.parse(sessionStorage.getItem('token'))
        axios.get('http://211.67.177.56:8080/hhdj/user/userInfo.do', {
          headers: {
            'Content-Type': 'multipart/form-data',
            'token': token
          }
        }).then(res => {
          // console.log(res)
          this.userData = res.data.data
          sessionStorage.setItem('user', JSON.stringify(this.userData))
        })
      },
      changeMsg() {
        let token = JSON.parse(sessionStorage.getItem('token'))
        this.stutes = !this.stutes
        if (this.stutes) {
          if (this.imgUrl) {
            let forData = new FormData()
            forData.append('header', this.imgUrl)

            axios.post('http://211.67.177.56:8080/hhdj/user/modifyInfo.do', forData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                'token': token
              }
            }).then(res => {
              // console.log(res)
              this.getData()
            }).catch(err => {
              console.log(err)
            })
          }
        }

      },
      changeImg(event) {
        let token = JSON.parse(sessionStorage.getItem('token'))
        let file = event.target.files[0]

        let render = new FileReader()
        render.readAsDataURL(file)
        render.onload = (e) => {
          let imgCodes = e.target.result
          this.userData.header = imgCodes
          this.base64 = imgCodes.substring(imgCodes.indexOf('base64,') + 7)
          let forDate = new FormData()
          forDate.append('myFile', this.base64)
          axios.post('http://211.67.177.56:8080/hhdj/image/uploadBase64.do', forDate, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'token': token
            }
          }).then(res => {
            // console.log(res)
            this.imgUrl = res.data.url
          })
        }
      },
      seleteData(event){
        const msgSelete = event.target.value
        this.userData.partyIdentity = msgSelete
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
    .img-frist {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tot {
        margin-left: 10px;
        font-size: 14px;
        color: #333;
      }
      .img {
        width: 50px;
        height: 50px;
        /*vertical-align: middle*/
      }
    }
    .item {
      padding: 5px;
      border-bottom: 1px solid #ccc;
      .item-else{
        display: flex;
        font-size:14px;

      }
    }
    .item-other {
      display: flex;
      justify-content: space-between;
      padding: 15px;
      .item-item {
        font-size: 14px;
        color: #333;
      }
      .item-color {
        color: #999;
      }
    }
    #select{
      height: 20px;
      width: 1.5rem;
      border-radius: 6px;
      background: #fff;
      color: #666;
      font-size: 18%;
    }
  }
</style>
