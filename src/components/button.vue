<template>
  <div class="btn" @click="handler">
{{text}}
  </div>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    handler (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style>
 .btn {
        width:314*100vw/360;
        height: 48*100vw/360;
        background-color: rgb(204, 51, 0);
        border-radius: 24*100vw/360;
        color: #fff;
        text-align: center;
        line-height: 48*100vw/360;
        font-size: 18px;
    }
</style>
