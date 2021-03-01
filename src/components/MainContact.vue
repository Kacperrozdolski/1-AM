<template>
  <div class="contact-container">
    <div class="contact-wrapper">
      <div class="contact-message">
        <div class="contact-message-wrapper">
          <h1 ref="typing" class="green"></h1>
          <div class="glitch-container">
            <div class="glitch" data-text="Hit me up!">
              Hit me up!
              <div class="glitch1" data-text="Hit me up!">Hit me up!</div>
            </div>
          </div>
        </div>
      </div>
      <form @submit="sendMail" class="contact-form">
        <input required v-model="name" placeholder="name" type="text" />
        <input required v-model="email" placeholder="email" type="email" />
        <textarea required v-model="message" placeholder="message"></textarea>
        <button>submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      i: 0,
      txt: "Don't be shy.",
      speed: 120,
      name: "",
      email: "",
      message: "",
    };
  },
  mounted() {
    this.typeWriter();
  },
  methods: {
    sendMail($event) {
      $event.preventDefault();
      let url =
        "https://sheet.best/api/sheets/37d74d64-60d5-4a55-8cb3-0632ced02357";
      let data = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      this.axios.post(url, data).then(() => {
        this.name = "";
        this.email = "";
        this.message = "";
        this.$refs.typing.innerHTML = "";
        this.txt = "Thank you!";
        this.i = 0;
        this.typeWriter();
      });
    },
    typeWriter() {
      if (this.i < this.txt.length) {
        this.$refs.typing.innerHTML += this.txt.charAt(this.i);
        this.i++;
        setTimeout(this.typeWriter, this.speed);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-container {
  width: 100%;
  min-height: 70vh;
  justify-content: center;
  align-items: center;
  display: flex;
  .contact-wrapper {
    width: 85%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    .contact-form {
      width: 35%;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      input {
        width: 100%;
        border: 0;
        border-bottom: 2px solid #16c79a;
        outline: 0;
        color: #e7d9ea;
        padding: 7px 0;
        background: transparent;
        margin-bottom: 20px;
        font-family: Poppins;
      }
      input::placeholder {
        font-family: Poppins;
        color: #16c79a;
        font-weight: 300;
      }
      textarea {
        width: 100%;
        border: 0;
        height: 150px;
        border-bottom: 2px solid #16c79a;
        outline: 0;
        color: #e7d9ea;
        font-family: Poppins;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;
        margin-bottom: 10px;
        resize: none;
        margin-bottom: 40px;
      }
      textarea::placeholder {
        font-family: Poppins;
        color: #16c79a;
        font-weight: 300;
      }
      button {
        background: none;
        font-family: Poppins;
        color: #16c79a;
        font-weight: 300;
        border: 1px solid #16c79a;
        cursor: pointer;
        outline: 0;
      }
    }
    .contact-message {
      width: 65%;
      height: 100%;
      display: flex;
      justify-content: center;
      .contact-message-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: left;
        flex-direction: column;
        .glitch-container {
          width: 80%;
          height: 100%;
          .glitch {
            color: transparent;
            -webkit-text-stroke: 3px #16c79a;
            font-size: 7.5vw;
            position: relative;
            margin: 0 auto;
          }
          @keyframes noise-anim {
            $steps: 20;
            @for $i from 0 through $steps {
              #{percentage($i*(1/$steps))} {
                clip: rect(random(800) + px, 99999px, random(100) + px, 0);
              }
            }
          }
          .glitch:after {
            content: attr(data-text);
            position: absolute;
            left: 10px;
            text-shadow: -1px 0 black;
            -webkit-text-stroke: 3px #16c79a;
            top: 0;
            font-size: 7.5vw;
            color: transparent;
            background: black;
            overflow: hidden;
            clip: rect(0, 900px, 0, 0);
            animation: noise-anim 2s infinite linear alternate-reverse;
          }

          @keyframes noise-anim-2 {
            $steps: 20;
            @for $i from 0 through $steps {
              #{percentage($i*(1/$steps))} {
                clip: rect(random(500) + px, 1000px, random(132) + px, 0);
              }
            }
          }
          .glitch:before {
            content: attr(data-text);
            position: absolute;
            left: 10px;
            text-shadow: 1px 0 black;
            -webkit-text-stroke: 3px #16c79a;
            top: 0;
            font-size: 7.5vw;
            color: transparent;
            background: black;
            overflow: hidden;
            clip: rect(0, 900px, 0, 0);
            animation: noise-anim-2 2s infinite linear alternate-reverse;
          }

          .glitch1 {
            color: transparent;
            -webkit-text-stroke: 3px #e7d9ea;
            font-size: 7.5vw;
            position: absolute;
            width: 100%;
            margin: 0 auto;
            left: 10px;
            top: 0;
          }
          @keyframes noise-anim {
            $steps: 20;
            @for $i from 0 through $steps {
              #{percentage($i*(1/$steps))} {
                clip: rect(random(500) + px, 922px, random(132) + px, 0);
              }
            }
          }
          .glitch1:after {
            content: attr(data-text);
            position: absolute;
            left: 10px;
            text-shadow: -1px 0 black;
            -webkit-text-stroke: 3px #e7d9ea;
            top: 0;
            font-size: 7.5vw;
            color: transparent;
            background: black;
            overflow: hidden;
            clip: rect(0, 900px, 0, 0);
            animation: noise-anim 2s infinite linear alternate-reverse;
          }

          @keyframes noise-anim-2 {
            $steps: 20;
            @for $i from 0 through $steps {
              #{percentage($i*(1/$steps))} {
                clip: rect(random(500) + px, 1000px, random(132) + px, 0);
              }
            }
          }
          .glitch1:before {
            content: attr(data-text);
            position: absolute;
            left: 10px;
            text-shadow: 1px 0 black;
            -webkit-text-stroke: 3px #e7d9ea;
            top: 0;
            font-size: 7.5vw;
            color: transparent;
            background: black;
            overflow: hidden;
            clip: rect(0, 900px, 0, 0);
            animation: noise-anim-2 2s infinite linear alternate-reverse;
          }
        }
        .green {
          color: #16c79a;
          font-size: 7.5vw;
          margin: 0;
          width: 100%;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .contact-container {
    .contact-wrapper {
      flex-direction: column;
      text-align: center;
      .contact-message {
        width: 90%;
        .contact-message-wrapper {
          .green {
            font-size: 10vw;
          }
          .glitch-container {
            display: none;
          }
        }
      }
      .contact-form {
        width: 90%;
      }
    }

    .contact-message-wrapper {
      .green {
        font-size: 10vw;
      }
      .glitch-container {
        display: none;
      }
    }
  }
}
</style>
