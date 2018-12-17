<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"><img :src="slide" alt=""></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>

  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    props:['swiperSlides'],
    name: 'carousel',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: true,
          speed:10,
        },
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    mounted() {
    }
  }
</script>
<style scoped>
  img {
    width: 100%;
  }
</style>
