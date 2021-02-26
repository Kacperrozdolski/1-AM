<template>
  <div class="landing">
    <main-header
      @openPortfolio="openPortfolio"
      @openAbout="openAbout"
      @openContact="openContact"
    ></main-header>
    <main-content
      @openProject="openProject"
      v-if="handler == 'portfolio'"
    ></main-content>
    <project-presentation v-if="handler == 'project'"></project-presentation>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainContent from "@/components/MainContent.vue";
import MainFooter from "@/components/MainFooter.vue";
import ProjectPresentation from "@/components/ProjectPresentation.vue";

export default {
  components: { MainHeader, MainFooter, ProjectPresentation, MainContent },
  data() {
    return {
      handler: "portfolio",
    };
  },
  methods: {
    openPortfolio() {
      this.handler = "portfolio";
    },
    openAbout() {
      this.handler = "about";
    },
    openContact() {
      this.handler = "contact";
    },
    openProject() {
      this.handler = "project";
    },
  },
};
</script>

<style lang="scss" scoped>
.landing {
  width: 100%;
  min-height: 109vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
