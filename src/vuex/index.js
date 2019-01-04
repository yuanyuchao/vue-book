import Vue from 'vue'
import Vuex from 'vuex'
import {getBook, removeBook} from '../API'
import router from '../router'

Vue.use(Vuex)

const state = {
  list: [],//列表页数据
  totalPrice: 0,//购物车总价格
  msg: '',
  cart: [],//购物车商品列表
  totalCount: 0,//购物车总数量
};
const mutations = {
  getSave(state){
    state.list = JSON.parse(localStorage.getItem('list'));
  },
  // 数量加1
  decrement(state, id) {
    for (let value of state.cart) {
      if (id == value.id) {
        if (value.bookNumber > 1) {
          value.bookNumber--;
        }
      }
    }
  },
  // 数量减1
  increment(state, id) {
    for (let value of state.cart) {
      if (id == value.id) {
        value.bookNumber++;
      }
    }
  },
  //添加书籍到列表页
  add(state, obj) {
    state.list.unshift(obj);
    router.push('/list');
  },
  //添加到购物车
  addCart(state, obj) {
    for (let value of state.list) {
      if (obj.id == value.id) {
        state.cart.unshift(obj);
        router.push('/collect');//vuex里使用路由跳转步骤
        // 1.引入router
        // 2.在store里注册router
        // 3.不用加this，router也不用加$,直接使用router。
      }
    }
    ;
  },

  //修改列表项
  revise(state, obj) {
    for (let i = 0; i < state.list.length; i++) {
      if (obj.id == state.list[i].id) {
        Vue.set(state.list, i, obj);//必须用Vue.set方法，否则视图不更新。
        router.push('/list');
      };
    }
  },

  getList(state, list) {
    state.list = list;
  },
//删除
  removeOne(state, one) {
    //item就是数组里的每一项
    state.list = state.list.filter(item => item !== one);
  },

  getValue(state, value) {
    state.msg = value;
  },

};
const actions = {
  // 从后台获取数据
  getListAction({commit}) {
    getBook().then((res) => {
      commit('getList', res.data.list);
      localStorage.setItem('list',JSON.stringify(res.data.list));//获取到数据后存入本地，防止丢失。
    })
  }
};
const getters = {
  // 获取购物车商品总数量
  count(state) {
    state.totalCount = 0;
    for (let value of state.cart) {
      state.totalCount += value.bookNumber;
    }
  },
  // 获取购物车商品总价格
  price(state) {
    state.totalPrice = 0;
    for (let value of state.cart) {
      state.totalPrice += (value.bookPrice) * (value.bookNumber);
    }
  },


};
export default new Vuex.Store({
  router,
  state,
  mutations,
  getters,
  actions,
})
