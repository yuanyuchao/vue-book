<template>
    <div class="myHeader">
      <slot></slot>
      <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
    </div>
</template>

<script>
    export default {
      props:['back'],
        name: "my-header",
      methods:{
        goBack(){
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>
.myHeader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: #c78eff;
  text-align: center;
  line-height: 40px;
  color: aliceblue;
}
  .icon-fanhui {
    position: fixed;
    top: 0;
    left: 10px;
    font-size: 20px;
  }
</style>
