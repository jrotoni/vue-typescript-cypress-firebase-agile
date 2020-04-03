<template>
  <div id="app" :class="{ 'dark-mode': darkMode }">
    <AgileManifesto />
    <Controls />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AgileManifesto from "./components/AgileManifesto/index.vue";
import Controls from "./components/AgileManifesto/Controls.vue";

@Component({
  components: {
    AgileManifesto,
    Controls
  }
})
export default class App extends Vue {
  get darkMode() {
    return this.$store.state.darkMode;
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  &.dark-mode {
    color: yellow;
    background-color: #2c3e50;
  }
}
</style>
