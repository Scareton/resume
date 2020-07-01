<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="work-slider mt-2">
    <swiper-slide v-for="(slide, index) in images" :key="index">
      <img :src="slide" class="work-slide" />
      <!-- <v-img contain :src="slide" class="work-slide" /> -->
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  props: {
    images: {
      type: Array
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data: () => ({
    swiperOptions: {
      slidesPerView: "auto",
      // centeredSlides: true,
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination"
      }
    }
  }),
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  }
};
</script>

<style scoped>
.work-slider {
  max-height: 300px;
}
.work-slide {
  border-radius: 4px;
  /* width: 100%; */
  height: 300px;
  object-fit: contain;
}
.swiper-slide {
  width: auto;
}
@media (max-width: 599px) {
  /* .swiper-slide {
    max-width: 100%;
  }
  .work-slide {
    max-width: 100%;
    object-fit: cover;
  } */
}
</style>