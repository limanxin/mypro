<template>
<input type="text"
class="inp"
:value="value"
@input="handlerinput"
@blur="handlerblur"
:class="{error:!statu,success:statu}">
</template>

<script>
// import { Toast } from 'vant'
export default {
  data () {
    return {
      statu: false
    }
  },
  // rules文本框的验证规则
  props: ['value', 'rules', 'msg_err'],
  methods: {
    handlerinput (event) {
      let value = event.target.value
      if (this.rules) {
        if (this.rules.test(value)) {
          this.statu = true
        } else {
          this.statu = false
        }
      } else {
        this.statu = !!value
      }

      this.$emit('input', value)
    },
    handlerblur (event) {
      if (this.rules && !this.rules.test(event.target.value)) {
        console.log(this.msg_err)
        this.$toast.fail(this.msg_err)
      }
    }
  }
}
</script>

<style lang='less' scoped>
.inp{
    width: 314*100vw/360;
    height: 40*100vw/360;
    border: none;
    outline: none;
    border-bottom: 2px solid rgb(117, 117, 117);
    font-size: 18px;
    margin: 5px 0;
}
.error{
     border-bottom-color:red
}
.success{
     border-bottom-color:green
}
</style>
