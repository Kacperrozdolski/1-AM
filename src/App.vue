<template>
  <router-view />
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;800;900&display=swap");

body {
  margin: 0 !important;
  font-family: "Poppins";
  background: black;
}

::-webkit-scrollbar {
  width: 5px;
  height: 0px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #e7d9ea;
  border: 0px none #e7d9ea;
  border-radius: 0px;
}
::-webkit-scrollbar-thumb:hover {
  background: #e7d9ea;
}
::-webkit-scrollbar-thumb:active {
  background: #e7d9ea;
}
::-webkit-scrollbar-track {
  background: #000000;
  border: 0px none #e7d9ea;
  border-radius: 0px;
}
::-webkit-scrollbar-track:hover {
  background: #000000;
}
::-webkit-scrollbar-track:active {
  background: #000000;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
</style>
