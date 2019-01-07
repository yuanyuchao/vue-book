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
  isSelectedAll:false,//是否全选
  selectedList:[],
};
const mutations = {
  isClickAll(state){
    state.isSelectedAll = !state.isSelectedAll;
    for (let i=0;i<state.cart.length;i++){
      state.cart[i].isSelected = state.isSelectedAll;
    }
  },
  isClick(state,book) {
    book.isSelected = !book.isSelected;
    for(let i=0;i<state.cart.length;i++){
      //every用来检测数组里每个元素，只要有一个元素返回false，结果就为false。
      //所有元素为都为true，结果才为true。
      state.isSelectedAll = state.cart.every(item => item.isSelected);
    }
  },
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
        for(let i=0;i<state.cart.length;i++){
          //every用来检测数组里每个元素，只要有一个元素返回false，结果就为false。
          //所有元素为都为true，结果才为true。
          state.isSelectedAll = state.cart.every(item => item.isSelected);
        }
      };

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
      console.log(res);
      commit('getList', res.data.list);
      localStorage.setItem('list',JSON.stringify(res.data.list));//获取到数据后存入本地，防止丢失。
    })
  }
};
const getters = {
  //获取被选中的列表项
  getSelectedList(state){
    state.selectedList = state.cart.filter(item => item.isSelected == true);
  },
  // 获取购物车商品总数量
  count(state) {
    state.totalCount = 0;
    for (let value of state.selectedList) {
      state.totalCount += value.bookNumber;
      if(state.totalCount>99){
        state.totalCount = 99+'+';
      }
    }
  },
  // 获取购物车商品总价格
  price(state) {
    state.totalPrice = 0;
    for (let value of state.selectedList) {
      state.totalPrice += (value.bookPrice) * (value.bookNumber);
      if(state.totalPrice>9999){
        state.totalPrice = 1+'万+';
      }
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
