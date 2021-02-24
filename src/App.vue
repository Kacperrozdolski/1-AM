<template>
  <landing-page></landing-page>
</template>

<script>
import LandingPage from "./views/LandingPage.vue";
export default {
  components: { LandingPage },
};
</script>

<style lang="scss" >
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;800;900&display=swap");
body {
  margin: 0 !important;
  font-family: "Poppins";
  background: black;
}
</style>