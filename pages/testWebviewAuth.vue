<template>
  <div id="app">
   <webviewer path="."/>
  </div>
</template>
  
<script setup>
  // definePageMeta({ auth: false })
</script>

<style>
html,
body {
  margin: 0;
}
#goBackLink {
  color: white;
}
#goBackButton {
  margin-top: 0;
  margin: 10px;
  color: white;
  float: left;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #17191e;
  margin: 0 auto;
  height: 100vh;
}
#webviewer{
  height: 100vh;
  width: auto;
  text-align: center;
}
</style>
  