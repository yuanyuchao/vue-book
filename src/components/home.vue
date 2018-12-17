<template>
  <div>
    <myHeader>首页</myHeader>
    <div class="content">
      <loadingAnimate v-if="loading"></loadingAnimate>
      <template v-else>
        <swiper :swiperSlides="sliders"></swiper>
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <li v-for="(hot,index) in hotBook">
              <img v-lazy="hot.bookCover" alt="">
              <b>{{hot.bookName}}</b>
            </li>
          </ul>
        </div>
      </template>

    </div>
  </div>

</template>

<script>
  import myHeader from '../base/myHeader'
  import swiper from '../base/swiper'
  import {getSwiper,getHotBook} from '../API'
  import loadingAnimate from '../base/loading'

  export default {
    name: "home",
    data() {
      return {
        sliders:[],
        hotBook:[],
        loading:true,
      }
    },
    components: {
      myHeader,
      swiper,
      loadingAnimate,
    },
    methods:{
      // increment(){
      //   this.$store.dispatch("increment");
      // },
      async getHot(){
        let {data}= await getHotBook();
        // console.log(data.list);
        this.hotBook = data.list;
      },
      async  getBanner(){
        let {data}= await getSwiper();
        this.sliders = data.banner;
     }
    },
    created(){
      // this.$store.store.dispatch('increment');
      // this.increment();
      // console.log(this.$store.state.num);
      this.getBanner();//获取轮播图
      this.getHot();//获取热门图书
      //数据加载完毕loading消失。


      setTimeout( ()=> {
        //   console.log(this);
        this.loading=false;
      },1500)
      // console.log(this.$store.state.num);
    },

  }
</script>

<style scoped>
.container {
  width: 95%;
  margin: 0 auto;
}
ul {
  display: flex;
  flex-wrap: wrap;
  /*默认不换行*/
}
  li {
    width: 45%;
    text-align: center;
    padding: 3px;
    margin: 5px;
    border:1px solid #dddddd;
  }
  li>img {
    width: 100%;
  }
  h3 {
    color: #666666;
    margin: 10px 0px;
  }
</style>
