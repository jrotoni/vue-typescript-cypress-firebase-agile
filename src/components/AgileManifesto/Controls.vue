<template>
  <div
    :class="{ controls: true, on: on, loading: !loading }"
    @click="switchMode()"
  >
    <i class="fas fa-spinner fa-spin" v-if="!loading"></i>
    <i :class="{ far: !on, fas: on, 'fa-moon': true }" v-else></i>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Controls extends Vue {
  get on() {
    return this.$store.state.darkMode;
  }
  get loading() {
    return this.$store.state.agile.length;
  }
  switchMode() {
    this.$store.commit("switchDarkMode");
  }
}
</script>

<style scoped lang="scss">
.controls {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  font-size: 25px;
  margin-bottom: 10px;
  color: #2c3e50;

  &:hover {
    cursor: pointer;
  }

  &.on {
    color: #ffff16;
  }

  &.loading {
    background-color: transparent;
    border: 0;
    color: #2c3e50;
  }
}
</style>
