<template>
  <div class="editPersonal">
    <hmheader title="编辑个人信息">
      <span class="iconfont iconjiantou2" slot="left" @click="$router.back()"></span>
      <!-- <span slot='right'>退出</span> -->
    </hmheader>
    <div class="head">
      <img alt src="http://localhost:3000/uploads/image/default.png" />
      <van-uploader :after-read="afterRead" />
    </div>
    <hmcell title='昵称' desc='我是谁'></hmcell>
    <hmcell title='密码' desc='123456'></hmcell>
    <hmcell title='性别' desc='男'></hmcell>
  </div>
</template>

<script>
import hmheader from '@/components/header.vue'
import hmcell from '@/components/cell.vue'
export default {
  components: {
    hmheader, hmcell
  },
  methods: {
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
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
/deep/.van-uploader__upload{
    width: 100 / 360 * 100vw;
    height: 100 / 360 * 100vw;
}
// 设置元素的对齐方式
/deep/.van-uploader{
    // 实现任意元素居中
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    opacity: 0;
}
}
</style>
