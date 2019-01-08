<template>
  <div class="footer">
    <router-link to="/home">
      <i class="iconfont icon-home"></i>
      首页
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-list"></i>
      列表
    </router-link>
    <router-link to=/collect>
      <i class="iconfont icon-gouwuche"></i>
      购物车
      <span class="circle" v-show="cart.length">{{cart.length}}</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-tianjia"></i>
      添加
    </router-link>
  </div>
</template>

<script>
  import {mapMutations, mapState, mapActions} from 'vuex'

  export default {
    name: "tab",
    computed: {
      ...mapState(['cart']),
    },
  }
</script>

<style scoped>
  /*
  display:flex;
  flex-directin:row/column;
  justify-content；center;垂直居中
  align-item：center;横向居中
  flex:1;每份占1
  */
  .circle {
    position: absolute;
    right: 114px;
    top: 3px;
    display: inline-block;
    width: 18px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid red;
    text-align: center;
    font-size: 12px;
    color: red;
  }

  .footer {
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #dddddd;
  }

  .footer a {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    color: #000;
  }

  a.router-link-active {
    color: red;
  }
</style>
