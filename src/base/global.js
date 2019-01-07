import Vue from 'vue'
//使组件名的第一个字母大写
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
//找到同级文件下以.vue命名的文件
//require.context三个参数
//1.要搜索的文件夹目录
//2.是否搜索它的子目录文件
//3.匹配文件的正则表达式
const requireComponent = require.context('.',false,/\.vue$/);
//keys 是一个函数，它返回一个数组，由所有可能被上下文模块处理的请求组成。
requireComponent.keys().forEach(fileName=>{
  const componentConfig = requireComponent(fileName);
  const componentName = capitalizeFirstLetter(
    fileName.replace(/^\.\//,'').replace(/\.\w+$/,'')
  );
  //因为得到的fileName格式是：'./baseButton.vue',所以这里去掉头和尾，值保留真正的文件名。
  Vue.component(componentName,componentConfig.default||componentConfig);//注册全局组件
})

