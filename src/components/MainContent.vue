<template>
  <div class="content-container">
    <div class="content-wrapper">
      <div @click="openProject()" class="cell"></div>
      <div @click="openProject()" class="cell">
        <img src="@/assets/steps.svg" />
        <h1>STEPS</h1>
      </div>
      <div @click="openProject()" class="cell"></div>
      <div @click="openProject()" class="cell">
        <img src="@/assets/unda.png" />
      </div>
      <div @click="openProject()" class="cell"></div>
      <div @click="openProject()" class="cell">
        <img src="@/assets/lyte.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openProject() {
      console.log("Project");
      this.$emit("openProject");
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
    background-image: url("../assets/collusion.png");
    background-size: cover;
  }
  .cell:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3d3b3b;
    flex-direction: column;
    h1 {
      margin: 0;
      font-weight: 100;
      font-size: 40px;
      color: white;
    }
  }
  .cell:nth-child(3) {
    background-image: url("../assets/freelance.png");
    background-size: cover;
  }
  .cell:nth-child(4) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #01adb7;
    flex-direction: column;
    img {
      height: 90%;
    }
  }
  .cell:nth-child(5) {
    background-image: url("../assets/skullcandy.png");
    background-size: cover;
  }
  .cell:nth-child(6) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #171313;
    flex-direction: column;
    img {
      height: 90%;
    }
  }
}
</style>
