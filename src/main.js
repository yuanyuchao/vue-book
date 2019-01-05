// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/index.js'
import './base/global.js'

import router from './router'
//引入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//引入懒加载插件
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=175694876,4150293836&fm=200&gp=0.jpg',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543751736289&di=c680e580baa542cc8f1b2ef562e695c5&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160513%2Fcfce8b6a207945499f2cf6680c18dda8_th.jpg',
  attempt: 1,
  listenEvents: [ 'scroll' ]
})
//在每次进入路由之前都会执行此方法
router.beforeEach(function (to,from,next) {
  document.title = to.meta.title;
  next()
})
//使用轮播图插件
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
