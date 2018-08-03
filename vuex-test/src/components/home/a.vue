<template>
<div>
    {{name}}
    
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    data () {
      return {
        name:"I'm home a"
      }
    }
  }
</script>

<style scoped type='text/css'>

</style>