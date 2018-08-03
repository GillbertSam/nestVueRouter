<template>
  <div id="app">
    <img id="logo" src="./assets/logo.png">
    <div class="link-view">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  
    <div class="clearfix link-a">
      <router-link to="/home/a">H-a</router-link>
      <router-link to="/home/b">H-b</router-link>
      <router-link to="/user/a">U-c</router-link>
      <router-link to="/user/b">U-d</router-link>
    </div>

    <router-link to="/home/a/aa">进入子页面aa</router-link>
  </div>
</template>

<script>
  export default {
    name: "App",
    data(){
      return {

      }
    },
    methods:{

    }
  };
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  #logo {
    width: 50%;
  }
  
  .link-a {
    margin: 0;
    padding: 0;
    position: fixed;
    bottom: 0px;
    width: 100%;
  }
  
  .link-a a {
    float: left;
    width: 25%;
    text-align: center;
    padding: 5px 20px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background: #ccc;
    box-sizing: border-box;
  }
  
  .link-a a.router-link-active {
    background: #e8e8e8;
    color: #f34;
  }
  
  .link-view {
    margin-top: 20px;
    margin-bottom: 28px;
    overflow-x: auto;
  }
  
  .clearfix:after {
    content: ".";
    /*加一段内容*/
    display: block;
    /*让生成的元素以块级元素显示，占满剩余空间*/
    height: 0;
    /*避免生成的内容破坏原有布局高度*/
    clear: both;
    /*清除浮动*/
    visibility: hidden;
    /*让生成的内容不可见*/
  }
  
  .clearfix {
    zoom: 1;
    /*为IE6，7的兼容性设置*/
  }
  
  a {
    text-decoration: none;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active 在低于版本 2.1.8 中 */
  
  {
    opacity: 0;
  }
  
  
  /*
    .slide-fade-enter-active {
      transition: all 0.3s ease;
    }
    
    .slide-fade-leave-active {
      transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }
    
    .slide-fade-enter,
    .slide-fade-leave-to
    /* .slide-fade-leave-active 在低于 2.1.8 版本中 */
  
  
  /*
    {
      transform: translateX(10px);
      opacity: 0;
    }
  
    */
  
  
  /* bounce */
  
  
  /*
    .bounce-enter-active {
      animation: bounce-in 0.5s;
    }
    
    .bounce-leave-active {
      animation: bounce-in 0.5s reverse;
    }
    
    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
    */
</style>
