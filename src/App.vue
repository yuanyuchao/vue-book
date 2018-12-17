<template>
  <div id="app">
    <transition name="fade">
      <!--需要缓存的页面走这里-->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <!--正常访问的页面走这里-->
    <transition name="fade">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>


    <tab></tab>
  </div>
</template>

<script>
  import tab from './base/tab.vue'

  export default {
    name: 'App',
    components: {
      tab,
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input, button {
    -webkit-appearance: none;
  }

  .content {
    position: fixed;
    width: 100%;
    top: 40px;
    bottom: 50px;
    overflow: auto;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  input {
    outline: none;
    background: transparent;
    border: none;
    outline: medium;
    border:1px solid #999999;
  }

  *:focus {
    outline: none;
    background-color: transparent;
  }

</style>
