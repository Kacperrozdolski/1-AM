<template>
  <div class="presentation-container">
    <h1>fully responsive e-commerce website desgin</h1>
    <div class="presentation-carousele">
      <vueper-slides :touchable="false" fixedHeight="100%">
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image"
        ></vueper-slide>
      </vueper-slides>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      slides: [
        {
          image: require("@/assets/freelance.png"),
        },
        {
          image: require("@/assets/freelance.png"),
        },
        {
          image: require("@/assets/freelance.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.presentation-container {
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #16c79a;
    font-size: 25px;
    font-weight: 100;
  }
  .presentation-carousele {
    height: 100%;
    width: 70%;
    background: transparent;
    border: 3px solid #16c79a;
  }
}
</style>
