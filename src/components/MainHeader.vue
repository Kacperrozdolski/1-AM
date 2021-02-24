<template>
  <div class="header-container">
    <div class="header-wrapper">
      <h1>1:AM</h1>
      <nav>
        <li>porfolio</li>
        <li>about me</li>
        <li>contact</li>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-container {
  height: 20%;
  width: 100%;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    text-shadow: 5px 10px 0px #e7d9ea;
    font-weight: 900;
    font-size: 60px;
    margin: 0;
    color: #16c79a;
  }
  nav {
    display: flex;
    li {
      list-style-type: none;
      margin: 0px 10px 0px 10px;
      color: #e7d9ea;
      font-size: 1rem;
    }
  }
}
</style>