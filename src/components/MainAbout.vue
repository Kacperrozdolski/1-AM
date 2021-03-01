<template>
  <div class="about-container">
    <div class="about-wrapper">
      <p>
        Hi! My name is <span @click="console">Kacper Rozdolski</span> i am
        frontend developer. <br /><br />
        “Reality is created by the mind” and i love to create it with computer
        and keyboard. I want to create most user friendly websites which bring
        value and purpose.
        <br /><br />
        My toolset contain HTML, SCSS, JavaScript, Vue.js & Figma.
        <br /><br />
        Besides that i love to meet new people, read books, hitchhiking and
        learning new foreign languages
      </p>
      <img src="@/assets/coolperson.jpg" />
      <p>It's me!</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-container {
  min-height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  .about-svg {
    position: fixed;
  }
  .about-wrapper {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    animation-name: slideIn;
    animation-duration: 0.7s;
    span {
      font-weight: 600;
    }
    p:nth-child(1) {
      font-size: 25px;
      color: #e7d9ea;
      font-weight: 300;
      margin-top: 50px;
    }
    img {
      width: 100%;
      border-radius: 0.1rem;
    }
    p:nth-child(3) {
      font-size: 15px;
      color: #e7d9ea62;
      font-weight: 300;
    }
  }
  @keyframes slideIn {
    from {
      transform: translate(0px, 40px);
      opacity: 0.5;
    }
    to {
      transform: translate(0);
      opacity: 1;
    }
  }
}
@media only screen and (max-width: 600px) {
  .about-container {
    .about-wrapper {
      width: 90%;
    }
  }
}
</style>
