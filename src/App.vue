<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <p> If ViewUI is successfully added to this project, you'll see an
        <code v-text="'<Button>'"></code>
        below
      </p>
      <Button type="primary">Button</Button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
    margin-top: 60px;
    color: #2c3e50;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    text-align: center;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
