<template>
<div class="per">个人中心</div>
</template>

<script>
import { getuserId } from '@/request/api.js'
export default {
  mounted () {
    let id = this.$route.params.id
    getuserId(id)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>

</style>
