<template>
  <div>
    <myHeader>列表</myHeader>
    <div class="content">
      <pop v-show="isShow">{{tanMsg}}</pop>
      <loadingAnimate v-if="loading"></loadingAnimate>
      <ul v-else>
        <router-link v-for="(book,index) in list"
                     :key="index"
                     :to="{name:'detail',query:{id:book.id}}"
                     tag="li">
          <img :src="book.bookCover" alt="">
          <div>
            <h4>{{book.bookName}}</h4>
            <p ref="aa" @click.stop="getValue($event.target.innerHTML)">{{book.bookInfo}}</p>
            <b>{{book.bookPrice}}元</b>
            <div class="btn">
              <button @click.stop="newAddCart(book)">加入购物车</button>
              <button @click.stop="removeOne(book)">删除</button>
            </div>
          </div>
        </router-link>
      </ul>

    </div>
  </div>

</template>

<script>
  import myHeader from '../base/myHeader'
  import {getBook, removeBook} from '../API'
  import loadingAnimate from '../base/loading'
  import pop from '../base/alert'
  import {mapState, mapMutations, mapActions,mapGetters} from 'vuex'

  export default {
    name: "list",
    data() {
      return {
        obj:{
          id:'',
          bookName:'',
          bookPrice:'',
          bookInfo:'',
          bookCover:'',
        },
        loading: true,
        msg:'hello',
        isShow:false,
        tanMsg:'',
      }
    },
    components: {
      myHeader,
      loadingAnimate,
      pop
    },
    computed: {
      ...mapState(['list','cart']),
      ...mapActions(['getListAction']),

    },
    created() {
      this.getListAction;
      setTimeout(() => {
        this.loading = false;
      }, 1500)
      //数据加载完毕loading消失。
    },
    mounted() {
    },

    methods: {
      // save(){
      //   alert(1)
      //   localStorage.setItem('list',JSON.stringify(this.list))
      // },
      newAddCart(obj){
        for (let value of this.cart) {
          if (obj == value) {
            this.isShow = true;
            this.tanMsg = '该商品已经在购物车了';
            setTimeout(()=>{
              this.isShow = false;
            },2000)
            return;
          }
        }
        ;
        this.addCart(obj);
      },
      ...mapMutations(['getList','removeOne','getValue','revise','addCart']),
      // async getBooks() {
      //   let {data} = await getBook();
      //   this.books = data.list;
      // },
      // async remove(id) {
      //  await removeBook(id);
      // }
      // remove(id) {
      //   //item就是数组里的每一项 在这里是this.books;
      //   this.books = this.books.filter(item => item.id !== id);
      // },
    }
  }
</script>

<style scoped>
  b {
    color: red;
  }

  h4 {
    font-size: 20px;
    margin-top: 20px;
  }

  ul {
    padding: 10px;
  }

  p {
    color: #2a2a2a;
    line-height: 25px;
    margin: 20px 0;
  }

  li {
    display: flex;
    border-bottom: 1px solid #dddddd;
    padding-bottom: 10px;
    margin-bottom: 15px;
  }

  .btn {
    display: flex;
    justify-content:flex-start;
    margin-top: 20px;
  }
  .btn>button:nth-of-type(1){
    width: 90px;
    height: 30px;
    border: none;
    background-color: red;
    outline: none;
    color: #ffffff;
    border-radius: 3px;
  }

  .btn>button:nth-of-type(2) {
    width: 50px;
    height: 30px;
    border: none;
    background-color: orangered;
    outline: none;
    color: #ffffff;
    border-radius: 3px;
    margin-left: 45px ;
  }

  li:last-child {
    margin-bottom: 0;
  }

  img[lazy=loading] {
    width: 200px;
    height: 200px;
    text-align: center;
  }

  img[lazy=error] {
    width: 200px;
    height: 200px;
    text-align: center;
  }
</style>
