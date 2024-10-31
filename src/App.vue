<template>
  <div class="container">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/students">Student List</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <div id="app">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
$black: #000;
$white: #fff;
$dark-green: #004d00;
.container {
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  nav {
    width: 100%;
    background-color: $black;
    padding: 10px 0;

    a {
      color: $white;
      text-decoration: none;
      margin: 0 15px;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  router-view {
    flex: 1;
    padding: 20px;
  }
}
</style>
