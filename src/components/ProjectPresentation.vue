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
          content: `<a href="https://kacperrozdolski.github.io/mntn/" target='_blank'><div class='live'></div><a/> <span>click to go live</span>`,
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
        {
          content: `<a href="https://kacperrozdolski.github.io/Adventure-Card/" target='_blank'><div class='live'></div><a/> <span>click to go live</span>`,
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
        {
          content: `<a href="https://kacperrozdolski.github.io/Duck-Interactive/" target='_blank'><div class='live'></div><a/> <span>click to go live</span>`,
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
        {
          content: `<a href="https://kacperrozdolski.github.io/steps/" target='_blank'><div class='live'></div><a/> <span>click to go live</span>`,
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
        {
          content: `<a href="https://kacperrozdolski.github.io/lyte/" target='_blank'><div class='live'></div><a/> <span>click to go live</span>`,
        },
      ];
      this.tittle = "Lyte app - url shortener service.";
    }
    if (this.$route.query.name == "charity") {
      this.slides = [
        {
          image: require(`../assets/charity/1.png`),
        },
        {
          image: require("../assets/charity/2.png"),
        },
        {
          image: require("../assets/charity/3.png"),
        },
        {
          image: require("../assets/charity/4.png"),
        },
        {
          content: `<a href="https://kacperrozdolski.github.io/earth-foundation/" target='_blank'><div class='live'></div><a/> <span>click to go live</span>`,
        },
      ];
      this.tittle =
        "Earth Foundation is completely responsive and pixel perfect charity website";
    }
  },
  methods: {
    console() {
      console.log("dupa");
    },
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
    .vueperslides__arrow {
      color: #16c79a;
    }
    .vueperslides__bullet .default {
      border: 1px solid #16c79a;
      transition: 0.5s;
    }
    .vueperslides__bullet--active .default {
      background-color: #42b983;
    }
    .live {
      height: 150px;
      width: 150px;
      background-image: url("../assets/icons/live.svg");
      background-size: cover;
      background-position: center;
      margin-bottom: 10px;
    }
    span {
      color: rgb(110, 110, 110);
    }
  }
}
@media only screen and (max-width: 600px) {
  .presentation-container {
    h1 {
      text-align: center;
    }
    .presentation-carousele {
      width: 100%;
    }
  }
}
</style>
