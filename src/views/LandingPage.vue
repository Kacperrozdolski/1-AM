<template>
  <div class="landing">
    <main-header></main-header>
    <main-content></main-content>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainContent from "@/components/MainContent.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  components: { MainHeader, MainContent, MainFooter },
};
</script>

<style lang="scss" scoped>
.landing {
  width: 100%;
  min-height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>