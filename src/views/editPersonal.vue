<template>
  <div class="editPersonal">
    <hmheader title="编辑个人信息">
      <span class="iconfont iconjiantou2" slot="left" @click="$router.back()"></span>
      <!-- <span slot='right'>退出</span> -->
    </hmheader>
    <div class="head">
      <img alt :src="head_img" />
      <van-uploader :after-read="afterRead" />
    </div>
    <hmcell title="昵称" desc="我是谁"></hmcell>
    <hmcell title="密码" desc="123456"></hmcell>
    <hmcell title="性别" desc="男"></hmcell>
  </div>
</template>

<script>

import hmheader from '@/components/header.vue'
import hmcell from '@/components/cell.vue'
import { uploadFile } from '@/request/uploadFile.js'
import { getuserId, editUser } from '@/request/api.js'
export default {
  data () {
    return {
      id: '',
      current: {}
    }
  },
  components: {
    hmheader,
    hmcell
  },
  async mounted () {
    this.id = this.$route.params.id
    // console.log(this.id)
    let res = await getuserId(this.id)
    if (res.data.message === '获取成功') {
      this.current = res.data.data
    } else {
      this.$toast.fail('获取用户信息失败')
    }
  },
  methods: {
    // 实现文件上传功能
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      // 1.file.file就是我们需要的文件资源数据
      // 2.包装为formdata
      let formdata = new FormData()
      formdata.append('file', file.file)
      // 3.发起异步请求实现文件上传
      uploadFile(formdata)
        .then(async res => {
          console.log(res)
          if (res.data.message === '文件上传成功') {
            // 实现用户头像数据的更新
            let res1 = await editUser(this.id, { head_img: res.data.data.url })
            console.log(res1)
            if (res1.data.message === '修改成功') {
              this.$toast.success('修改用户头像成功')
              this.head_img =
                localStorage.getItem('hm_token') + res.data.data.url
            } else {
              this.$toast.fail('修改头像失败，请重试')
            }
          } else {
            this.$toast.fail('文件上传失败，请重试')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang='less' scoped>
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;

  img {
    display: block;
    width: 100 / 360 * 100vw;
    height: 100 / 360 * 100vw;
    border-radius: 50%;
  }
  // 修改元素的大小
  /deep/.van-uploader__upload {
    width: 100 / 360 * 100vw;
    height: 100 / 360 * 100vw;
  }
  // 设置元素的对齐方式
  /deep/.van-uploader {
    // 实现任意元素居中
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
}
</style>
