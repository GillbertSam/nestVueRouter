<template>
    <div>
        <button @click="goBack">返回</button>
        <h2>我是a的子页面aa</h2>
    </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name:'aa',
    data () {
      return {
      }
    },
    methods:{
      goBack:function() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped type='text/css'>

</style>