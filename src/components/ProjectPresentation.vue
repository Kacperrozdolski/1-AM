<template>
  <MainHeader />
  <div class="presentation-container">
    <h1>{{ tittle }}</h1>
    <div class="presentation-carousele">
      <vueper-slides :touchable="false" fixedHeight="100%">
        <vueper-slide
          :content="slide.content"
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image"
          :style="'color:white'"
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
          image: require(`../assets/mntn/1.png`),
        },
        {
          image: require("../assets/mntn/2.png"),
        },
        {
          image: require("../assets/mntn/3.png"),
        },
        {
          content:
            "Slide title can be HTML.<a href='https://www.w3schools.com'>Visit W3Schools</a> the slide content, <span style='font-size: 1.2em;color: yellow'>why not?</span>",
        },
      ];
      this.tittle =
        "MNTN is completely responsive and pixel perfect hiking guide website";
    }
    if (this.$route.query.name == "adventure") {
      this.slides = [
        {
          image: require(`../assets/adventure/1.png`),
        },
        {
          image: require("../assets/adventure/2.png"),
        },
        {
          image: require("../assets/adventure/3.png"),
        },
      ];
      this.tittle = "Memory card game in Adventure Time world.";
    }
    if (this.$route.query.name == "duck") {
      this.slides = [
        {
          image: require(`../assets/duck/1.png`),
        },
        {
          image: require("../assets/duck/2.png"),
        },
        {
          image: require("../assets/duck/3.png"),
        },
      ];
      this.tittle =
        "Duck Interactive is completely responsive and pixel perfect company website";
    }
    if (this.$route.query.name == "steps") {
      this.slides = [
        {
          image: require(`../assets/steps/1.png`),
        },
        {
          image: require("../assets/steps/2.png"),
        },
        {
          image: require("../assets/steps/3.png"),
        },
      ];
      this.tittle = "Steps - browser tool for creating simple roadmaps.";
    }
    if (this.$route.query.name == "lyte") {
      this.slides = [
        {
          image: require(`../assets/lyte/1.png`),
        },
        {
          image: require("../assets/lyte/2.png"),
        },
      ];
      this.tittle = "Lyte app - url shortener service.";
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
