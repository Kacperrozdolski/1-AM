<template>
  <div class="footer-container">
    <p>copyright © 2021 kacper rozdolski. all rights reserved.</p>
    <div class="footer-wrapper">
      <a href="mailto:leopoldsinx@gmail.com"
        ><img src="@/assets/icons/mail.svg"
      /></a>
      <a
        href="https://www.linkedin.com/in/kacper-rozdolski-ba6a4715b/"
        target="_blank"
        ><img src="@/assets/icons/linkedin.svg"
      /></a>
      <a href="https://github.com/Kacperrozdolski" target="_blank"
        ><img src="@/assets/icons/github.svg"
      /></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-container {
  height: 20%;
  width: 100%;
  color: #e7d9ea;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    text-align: center;
  }
  img {
    margin: 10px;
  }
}
</style>
