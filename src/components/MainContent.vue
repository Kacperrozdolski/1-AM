<template>
  <div class="content-container">
    <div class="content-wrapper">
      <div class="cell"></div>
      <div class="cell">
        <img src="@/assets/steps.svg" />
        <h1>STEPS</h1>
      </div>
      <div class="cell"></div>
      <div class="cell"><img src="@/assets/unda.png" /></div>
      <div class="cell"></div>
      <div class="cell"><img src="@/assets/lyte.png" /></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content-container {
  height: 80%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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
    margin: 10px;
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