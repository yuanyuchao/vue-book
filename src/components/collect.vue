<template>
  <div class=".cart">
    <myHeader>购物车</myHeader>
    <div class="content">
      <h2 v-if="!cart.length">购物车为空！</h2>
      <template v-else>
        <ul>
          <li v-for="(book,index) in cart ">
            <img :src="book.bookCover" alt="">
            <div>
              <h4>{{book.bookName}}</h4>
              <p>{{book.bookInfo}}</p>
              <p class="price">单价：<i>{{book.bookPrice}}</i>元 <span @click="decrement(book.id)">-</span>
                <input type="text" v-model.number="book.bookNumber"> <span @click="increment(book.id)">+</span></p>
            </div>
          </li>
        </ul>
        <p class="total"><span>总数量：<i>{{totalCount}}</i>本</span><span>总价：<i>{{totalPrice.toFixed(2)}}</i>元</span></p>
      </template>
    </div>
  </div>

</template>

<script>
  import myHeader from '../base/myHeader'
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

  export default {
    name: "collect",
    components: {
      myHeader,
    },
    data() {
      return {
        obj: {}
      }
    },
    created() {
      this.count;
      this.price;
    },
    computed: {
      ...mapState(['cart', 'totalPrice', 'totalCount']),
      ...mapGetters(['count', 'price',]),
    },
    methods: {
      ...mapMutations(['increment','decrement']),
    },
    updated() {
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
    left: 0;
    bottom: 65px;
    font-size: 20px;
    background-color: rgba(0,0,0,0.35);
  }
  .total>span:nth-of-type(2){
    margin-left: 125px;
  }
  .total>span:nth-of-type(1){
    margin-left: 12px;
  }
  i {
    font-style: normal;
    color: red;
    font-size: 20px;
  }
  .price span{
    border:1px solid #999999;
    display: inline-block;
    width: 20px;
    text-align: center;
  }
  .price span:nth-of-type(1){
    margin-left: 20px;
  }
  .price {
    display: flex;
    vertical-align: center;
    margin-top: 10px;
    font-size: 18px;
  }
</style>
