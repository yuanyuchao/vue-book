<template>
    <div>
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "alert"
    }

    //默认隐藏，需要时显示，三秒后再隐藏
</script>

<style scoped>
div {
  position: absolute;
  left: 50%;
  top: 85%;
  transform: translate(-50%,-50%);
  width: 250px;
  height: 40px;
  background-color: rgba(0,0,0,0.7);
  color: white;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  border-radius: 4px;
}
</style>
