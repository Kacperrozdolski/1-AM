<template>
  <div class="contact-container">
    <div class="contact-wrapper">
      <div class="contact-message">
        <h1 class="green">Don't be shy.</h1>
        <h1 class="outline">Hit me up!</h1>
      </div>
      <div class="contact-form">
        <input placeholder="name" type="text" />
        <input placeholder="email" type="text" />
        <textarea placeholder="message" name="" id="" cols="30" rows="10"></textarea>
        <button>submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-container {
  width: 100%;
  min-height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  .contact-wrapper {
    width: 90%;
    height: 100%;
    display: flex;
    .contact-form {
      width: 35%;
      display: flex;
      justify-content: center;
      justify-content: space-around;
      flex-direction: column;
    }
    .contact-message {
      width: 65%;
      height: 100%;
      .green {
        color: #16c79a;
        font-size: 7.5rem;
        margin: 0;
      }
      .outline {
        font-size: 7.5rem;
        -webkit-text-stroke: 3px #16c79a;
        margin: 0;
        color: transparent;
        position: relative;
      }
      .outline::before {
        content: "Hit me up!";
        -webkit-text-stroke: 3px #e7d9ea;
        color: transparent;
        position: absolute;
        left: 6px;
      }
    }
  }
}
</style>
