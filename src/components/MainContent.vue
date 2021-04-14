<template>
  <div class="content-container">
    <div class="content-wrapper">
      <div @click="openProject('mntn')" class="cell"></div>
      <div @click="openProject('steps')" class="cell"></div>
      <div @click="openProject('collusion')" class="cell"></div>
      <div @click="openProject('adventure')" class="cell"></div>
      <div @click="openProject('duck')" class="cell"></div>
      <div @click="openProject('lyte')" class="cell"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openProject(project) {
      this.$router.push(`"/project?name=${project}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.content-container {
  height: 80%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  animation-name: slideIn;
  animation-duration: 0.7s;
}
@keyframes slideIn {
  from {
    transform: translate(0px, -40px);
  }
  to {
    transform: translate(0);
  }
}

.content-wrapper {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  .cell {
    background-color: transparent;
    width: 400px;
    height: 230px;
    margin: 15px;
    transition: 0.55s;
  }
  .cell:hover {
    transform: translate(0, -6px);
    cursor: pointer;
  }
  .cell:nth-child(1) {
    background-image: url("../assets/adventure.png");
    background-size: cover;
  }
  .cell:nth-child(2) {
    background-image: url("../assets/steps.png");
    background-size: cover;
  }
  .cell:nth-child(3) {
    background-image: url("../assets/collusion.png");
    background-size: cover;
  }
  .cell:nth-child(4) {
    background-image: url("../assets/mntn.png");
    background-size: cover;
  }
  .cell:nth-child(5) {
    background-image: url("../assets/duck.png");
    background-size: cover;
  }
  .cell:nth-child(6) {
    background-image: url("../assets/lyte.png");
    background-size: cover;
  }
}
</style>
