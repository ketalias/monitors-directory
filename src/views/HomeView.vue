<template>
  <div class="container">
    <h1>Довідник Старости</h1>
    <p>універсальний додаток для полегшенням роботи старостам.</p>
    <p>Авторство староста Роман</p>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style lang="scss" scoped>
$black: #000;
$white: #fff;
$dark-green: #65ada8;
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  color: $black;
  text-align: center;
  margin-bottom: 10px;
}

p {
  font-weight: bold;
  color: $dark-green;
  text-align: center;
  margin: 5px 0;
}
</style>
