import Vue from 'vue'
import Vuex from 'vuex'
import {getBook, removeBook} from '../API'
import router from '../router'

Vue.use(Vuex)

const state = {
  list: [],
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
    for (let i = 0, length = state.cart.length; i < length; i++) {
      if (id == state.cart[i].id) {
        if (state.cart[i].bookNumber > 1) {
          state.cart[i].bookNumber--;
        }
      }
    }
  },
  // 数量减1
  increment(state, id) {
    for (let i = 0, length = state.cart.length; i < length; i++) {
      if (id == state.cart[i].id) {
        state.cart[i].bookNumber++;
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
    for (let i = 0; i < state.list.length; i++) {
      if (obj.id == state.list[i].id) {
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
        Vue.set(state.list, i, obj);
        router.push('/list');
      };
    }
  },

  getList(state, list) {
    state.list = list;
  },
//删除
  removeOne(state, one) {
    state.list = state.list.filter(item => item !== one);
    console.log(state.list);
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
    for (let i = 0, length = state.cart.length; i < length; i++) {
      state.totalCount += state.cart[i].bookNumber;
    }
  },
  // 获取购物车商品总价格
  price(state) {
    state.totalPrice = 0;
    for (let i = 0, length = state.cart.length; i < length; i++) {
      state.totalPrice += (state.cart[i].bookPrice) * (state.cart[i].bookNumber);
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
