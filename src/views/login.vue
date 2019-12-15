<template>
  <div class="login">
    <div id="app">
      <div class="container">
        <div class="close">
          <span class="iconfont iconicon-test"></span>
        </div>
        <div class="logo">
          <span class="iconfont iconnew"></span>
        </div>
        <div class="inputs">
            <hminput placeholder='请输入用户名/手机号码'
            :value="users.username"
            @input="hinput"
            :rules='/^1\d{10}$/'
            msg_err='错误'>
            </hminput>
             <hminput type='password' placeholder='密码' v-model="users.password"></hminput>
        </div>
        <p class="tips">
          没有账号？
          <a href="#/register" class>去注册</a>
        </p>
        <hmbutton text='登陆' @click="login"></hmbutton>
      </div>
    </div>
  </div>
</template>

<script>
import hmbutton from '@/components/button.vue'
import hminput from '@/components/input.vue'
import { userlogin } from '@/request/api.js'
export default {
  data () {
    return {
      users: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    hmbutton, hminput
  },
  methods: {
    login (event) {
    //   console.log(event)
      userlogin(this.users)
        .then(res => {
          console.log(res)
          if (res.data.message === '登录成功') {
            localStorage.setItem('hm_token', res.data.data.token)
            this.$router.push({
              path: `/personal/${res.data.data.user.id}` })
          } else {
            this.$toast.fail(res.data.message)
          }
        })
        .catch(err => {
          console.log(err)
          this.$toast.fail('服务器异常')
        })
    },
    hinput (data) {
      this.users.username = data
    }
  }
}
</script>

<style lang='less'>
.container {
  padding: 20px;
}

.close {
  span {
    font-size: 27 / 360 * 100vw;
  }
}

.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}

.inputs {
  input {
    margin-bottom: 20px;
  }
}

.tips {
  text-align: right;
  margin-bottom: 20px;

  a {
    color: #3385ff;
  }
}
</style>
