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
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 220px;
  height: 40px;
  background-color: black;
  color: white;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  border-radius: 5px;
}
</style>
