<template>
<div class="per">
    <router-link :to="'/edit/'+ currentUser.id">
      <div class="profile">
        <!-- $axios.defaults.baseURL读取axios的服务器路径 -->
        <img :src="currentUser.head_img" alt />
        <div class="profile-center">
          <div class="name">
            <span class="iconfont iconxingbienan"></span>{{currentUser.nickname}}
          </div>
          <div class="time">2019-12-16</div>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </router-link>
   <hmcell title='我的关注' desc='关注的用户'></hmcell>
    <hmcell title='我的跟帖' desc='跟帖/回复'></hmcell>
    <hmcell title='我的收藏' desc='文章/视频'></hmcell>
    <hmcell title='设置' desc=''></hmcell>
    <hmbutton text='退出'></hmbutton>
</div>
</template>

<script>
import { getuserId } from '@/request/api.js'
import hmcell from '@/components/cell.vue'
import hmbutton from '@/components/button.vue'
export default {
  data () {
    return {
      currentUser: {}
    }
  },
  components: {
    hmcell, hmbutton
  },
  mounted () {
    let id = this.$route.params.id
    getuserId(id)
      .then(res => {
        console.log(res)
        if (res.data.message === '获取成功') {
          this.currentUser = res.data.data
          if (this.currentUser.head_img) {
            this.currentUser.head_img = localStorage.setItem('hm_baseURL') + this.currentUser.head_img
          } else {
            this.currentUser.head_img = localStorage.getItem('hm_baseURL') + '/uploads/image/default.png'
          }
        }
      })
      .catch(err => {
        console.log(err)
        this.$toast.fail('获取数据失败')
      })
  }
}
</script>

<style lang='less' scoped>
.personal{
    width: 100vw;
    height: 100vh;
    background-color: #eee;
}
a{
    color: #666;
}
.profile {
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px #ddd solid;

  img {
    width: 70 / 360 * 100vw;
    height: 70 / 360 * 100vw;
    border-radius: 50%;
  }

  .profile-center {
    flex: 1;
    padding: 0 10px;
  }

  .name {
    span {
      color: #75b9eb;
    }
  }

  .time {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
  }
}
.btn{
  margin: 50px auto;
}
</style>
