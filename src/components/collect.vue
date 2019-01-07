<template>
  <div class=".cart">
    <MyHeader>购物车</MyHeader>
    <div class="content">
      <h2 v-if="!cart.length">购物车为空！</h2>
      <template v-else>
        <ul>
          <li v-for="(book,index) in cart " @click="isClick(book)">
            <i class="iconfont icon-danxuan" v-if="!book.isSelected"></i>
            <i class="iconfont icon-danxuanxuanzhong" v-else></i>
            <img :src="book.bookCover" alt="">
            <div>
              <h4>{{book.bookName}}</h4>
              <p>{{book.bookInfo}}</p>
              <p class="price">单价：<i>{{book.bookPrice}}</i>元 <span @click.stop="decrement(book.id)">-</span>
                <input type="text" v-model.number="book.bookNumber" @click.stop=""> <span
                  @click.stop="increment(book.id)">+</span></p>
            </div>
          </li>
        </ul>
        <p class="total">
          <span @click="isClickAll"><i class="iconfont icon-danxuan ml" v-if="!isSelectedAll"></i>
          <i class="iconfont icon-danxuanxuanzhong ml" v-else></i>
          全选</span>

          <span>合计：<i>{{totalPrice}}</i>元</span>
          <span class="button">去结算({{totalCount}})</span>
        </p>
      </template>
    </div>
  </div>

</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

  export default {
    name: "collect",
    data() {
      return {
        obj: {},
        isSelected: false,
        selectedList:[],
        p:0,
      }
    },
    created() {
      this.getSelectedList;
      this.count;
      this.price;
    },
    computed: {
      ...mapState(['cart', 'totalPrice', 'totalCount', 'isSelectedAll']),
      ...mapGetters(['count', 'price','getSelectedList']),
    },
    methods: {
      ...mapMutations(['increment', 'decrement', 'isClick', 'isClickAll', 'isAll']),

    },
    updated() {
      this.getSelectedList;
      this.count;
      this.price;
    }
  }
</script>

<style scoped>
  .content img {
    width: 100px;
    height: 80px;
    margin-right: 50px;
  }

  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  ul {
    margin-bottom: 60px;
  }

  li {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #dddddd;
    padding: 10px;
  }

  input {
    width: 30px;
    text-align: center;
  }

  .total {
    position: fixed;
    width: 100%;
    height: 60px;
    left: 0;
    bottom: 50px;
    font-size: 20px;
    border-top: 1px solid #dddddd;
    display: flex;
    align-items: center;
    background-color: #fff;
  }

  .total > span:nth-of-type(2) {
    margin-left: 45px;
  }

  i {
    font-style: normal;
    color: red;
    font-size: 20px;
  }

  .price span {
    border: 1px solid #999999;
    display: inline-block;
    width: 20px;
    text-align: center;
  }

  .price span:nth-of-type(1) {
    margin-left: 20px;
  }

  .price {
    display: flex;
    vertical-align: center;
    margin-top: 10px;
    font-size: 18px;
  }

  .iconfont {
    font-size: 20px;
    color: #999999;
    margin-right: 5px;
    line-height: 80px;
  }

  .button {
    position: absolute;
    right: 0;
    display: inline-block;
    /*width: 10px;*/
    height: 100%;
    background-color: red;
    color: #ffffff;
    line-height: 60px;
    padding: 0 10px;
    margin-left: 60px;
  }

  .ml {
    margin-left: 10px;
  }
</style>
