import Vue from 'vue'
import Router from 'vue-router'
// import home from '../components/home'
// import list from '../components/list'
// import collect from '../components/collect'
// import add from '../components/add'
// import detail from '../components/detail'

Vue.use(Router)


export default new Router({
  routes: [
    // {
    //   path:'/',
    //   redirect:'/home'
    // },
    {
      path:'/home',
      component:() => import('../components/home'),
      meta:{
        keepAlive:true,
        title:'首页',
      },
    },
    {
      path:'/list',
      name:'list',
      component:() => import('../components/list'),
      meta:{
        keepAlive:true,//是否缓存页面
        title:'列表'//设置页面的标题
      }
    },
    {
      path:'/add',
      component:() => import('../components/add'),
      meta:{
        title:'添加',
      }
    },
    {
      name:'detail',
      path:'/detail',
      component:() => import('../components/detail'),
      meta:{
        title:'详情',
      }
    },
    {
      path:'/collect',
      component:() => import('../components/collect'),
      meta:{
        title:'购物车',
      }
    },
    {
      path:'*',
      redirect:'/home'
    }
  ]
})
