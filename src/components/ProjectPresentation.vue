<template>
  <MainHeader />
  <div class="presentation-container">
    <h1>{{ tittle }}</h1>
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
  <MainFooter />
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: {
    MainHeader,
    MainFooter,
    VueperSlides,
    VueperSlide,
  },
  mounted() {
    if (this.$route.query.name == "mntn") {
      this.slides = [
        {
          image: require(`../assets/projectCovers/mntn.png`),
        },
        {
          image: require("../assets/projectCovers/adventure.png"),
        },
        {
          image: require("../assets/projectCovers/steps.png"),
        },
      ];
      this.tittle =
        "MNTN is perfectly responsive and pixel perfect hiking guide website";
    }
  },
  data() {
    return {
      tittle: "",
      slides: [],
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
  }
}
</style>
